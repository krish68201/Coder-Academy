import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import CountryCode from "../../data/countrycode.json" 

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data) => {
      console.log("Logging Data" , data);
      try{
          setLoading(true);
          // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
          const response = {status:"OK"};
          console.log("Logging response", response);
          setLoading(false);
      }
      catch(error) {
          console.log("Error:" , error.message);
          setLoading(false);
      }
  }

    useEffect( () => {
      if(isSubmitSuccessful) {
          reset({
              email:"",
              firstname:"",
              lastname:"",
              message:"",
              phoneNo:"",
          })
      }
  },[reset, isSubmitSuccessful] );
  return (
    <form onSubmit={handleSubmit(submitContactForm)}>

    <div className='flex flex-col gap-14'>
            <div className='flex gap-5'>
                {/* firstName */}
                <div className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    <label htmlFor='firstname'>First Name</label>
                    <input  
                        type='text'
                        name='firstname'
                        id='firstname'
                        placeholder='Enter first name'
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                          }}
                          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        {...register("firstname", {required:true})}
                    />
                    {
                        errors.firstname && (
                            <span>
                                Please enter Your name
                            </span>
                        )
                    }
                </div>

                {/* lastName */}
                <div className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    <label htmlFor='lastname'>Last Name</label>
                    <input  
                        type='text'
                        name='lastname'
                        id='lastname'
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                          }}
                          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        placeholder='Enter Last name'
                        {...register("lastname")}
                    />
                    
                </div>

            </div>


            {/* email */}
            <div className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                <label htmlFor='email'>Email Address</label>
                <input 
                    type='email'
                    name='email'
                    id='email'
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    placeholder='Enter email Address'
                    {...register("email", {required:true})}
                />
                {
                    errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                    )
                }
            </div>
                  {/* phoneNo */}
            <div className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">

<label htmlFor='phonenumber'>Phone Number</label>

<div className='flex flex-row gap-1'>
    {/* dropdown */}
   
        <select
            name='dropdown'
            id="dropdown"
            style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            {...register("countrycode", {required:true})}
        >
            {
                CountryCode.map( (element , index) => {
                    return (
                        <option key={index} value={element.code}>
                            {element.code} -{element.country}
                        </option>
                    )
                } )
            }
        </select>
        
        <input
            type='number'
            name='phonenumber'
            id='phonenumber'
            placeholder='12345 67890'
            style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            {...register("phoneNo",  
            {
                required:{value:true, message:"Please enter Phone Number"},
                maxLength: {value:10, message:"Invalid Phone Number"},
                minLength:{value:8, message:"Invalid Phone Number"} })}
        />
  
</div>
{
    errors.phoneNo && (
        <span>
            {errors.phoneNo.message}
        </span>
    )
}

</div>
             {/* message */}
             <div className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                <label htmlFor='message'>Message</label>
                <textarea 
                    name='message'
                    id='message'
                    cols="30"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    rows="7"
                    placeholder='Enter Your message here'
                    {...register("message", {required:true})}
                />
                {
                    errors.message && (
                        <span>
                            PLease enter your message.
                        </span>
                    )
                }
            </div>

            <button type='submit'
            className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 mb-20 '>
                    Send Message
            </button>
    </div>

    </form>
  )
}

export default ContactUsForm