import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'
const ContactFormSection = () => {
  return (
    <div className='mx-auto'>
        <h1 className='text-4xl mb-10 text-center text-white'>
            Get In Touch
        </h1>
        <p className='text-2xl  mb-10 text-center text-richblack-600'>
            We d love to hear for you.Please fill out this form.
        </p>
        <div>
            <ContactUsForm />
        </div>
    </div>
  )
}

export default ContactFormSection