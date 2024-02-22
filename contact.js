/*===============  email script ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form -publickey
    emailjs.sendForm('service_6gmkblb','template_hg0flij','#contact-form','Bhi39JJvjcDh5PcJl')
        .then(() =>{
            //show message sent
            contactMessage.textContent = 'Your message has been sent'

            //remove mesaage after five second
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        })
}

contactForm.addEventListener('submit', sendEmail)