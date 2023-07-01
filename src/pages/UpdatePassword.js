import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').slice(-1)[0];
    dispatch(resetPassword(password, confirmPassword, token));
  };

  return (
    <div className='text-white flex flex-col items-center my-36 justify-center'>
      {loading ? (
        <div>Loading.....</div>
      ) : (
        <div>
          <h1 className='text-2xl mb-5'>Choose new Password</h1>
          <p className= 'text-richblack-600	 text-sm w-1.5/5'>Almost done. Enter your new password and you're all set.</p>
          <form onSubmit={handleOnSubmit}>
            <label className="w-full">
              <p className="mt-4 mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">New password *</p>
              <input style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                required
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={handleChange}
              />
           
            </label>

            <label className="w-full">
              <p className="mt-4 mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"> Confirm password *</p>
              <input style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                required
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
            
            </label>

            <button  className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900' type="submit">Reset Password</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
