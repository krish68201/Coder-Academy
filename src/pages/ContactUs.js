import React from 'react'
import ContactFormSection from '../components/core/About/ContactFormSection'
import Footer from '../components/common/Footer'

const ContactUs = () => {
  return (
    <div className=''>
        <div className='mx-auto flex flex-col items-center justify-between gap-3 mt-36'>
        <ContactFormSection />
        </div>
        
        <Footer />
    </div>
  )
}

export default ContactUs