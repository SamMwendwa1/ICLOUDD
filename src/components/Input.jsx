import React from 'react';
import { useState } from 'react';

const Input = ({ name, label, type, onChange, autoFocus, placeholder, half }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${half ? 'w-1/2' : 'w-full'}`}>
      <label htmlFor={name} className="text-white font-medim mb-4 flex">
        {label}
      </label>
      <div className='mt-1 hover:outline'>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
          name={name}
          id={name}
          placeholder={placeholder}
          required
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
          autoFocus={autoFocus}
          onChange={onChange}
        />
        
      </div>
      {type === 'password' && (
          <div className='mt-5'>
            <label htmlFor={`${name}-show-password`} className='inline-flex items-center'>
              <input
                type='checkbox'
                id={`${name}-show-password`}
                name={`${name}-show-password`}
                className='form-checkbox cursor-pointer h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                checked={showPassword}
                onChange={handleShowPassword}
              />
              <span className='ml-2 text-sm text-gray-600'>Show password</span>
            </label>
          </div>
        )}
    </div>
  );
};

export default Input;
