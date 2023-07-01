import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
  const[ emailSent, setEmailSent] = useState (false);
  const [email,setEmail]=useState("");
    const {loading} =useSelector((state)=>state.auth);
     const dispatch=useDispatch()
    const handleSubmit = ((e)=>{
       e.preventDefault();
       dispatch(getPasswordResetToken(email,setEmailSent));
    })
  return (
    <div>
        {
          loading ?(
            <div> Loading .....</div>
          ):(
            <div className='text-white flex flex-col items-center my-48 justify-center'>
              <h1 className='text-2xl mb-5'>
              {
                !emailSent ? "Reset Your Password" : "Check Your email"
              }

              </h1>
             <p className= 'text-richblack-600	 text-sm w-1.5/5'>
              
               {
                !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                : `We have sent the reset email to ${email}`
              }
             </p>

             <form onSubmit={handleSubmit}>
         {!emailSent && (
          <label className="w-full">
      <p  className="mt-4 mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address</p>
      <input
        required
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          
        }}
        placeholder="Enter Your email address"
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
      />
    </label>
  )}

  <button   className="w-full mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 text-center" type='submit  '>
   { !emailSent ? "Reset Password" : " Resend Email"}
  </button>
</form>

<div>
  <Link to="/login">
    <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">Back To Login</p>
  </Link>
  </div>
              </div>
          )
        }
    </div>
  )
}

export default ForgotPassword