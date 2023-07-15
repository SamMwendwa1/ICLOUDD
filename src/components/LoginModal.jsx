// LoginModal.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';

import { GoogleLogin } from 'react-google-login';

import Input from './Input';
import axios from 'axios';

import { styles } from '../styles';
import { slideIn } from '../utils/motion';


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "", // Add this line
  };
  

const Login = ({ isSignup: initialIsSignup }) => {
    const [isSignup, setIsSignup] = useState(initialIsSignup);

    const [formData, setFormData] = useState(initialState);

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        console.log(res);
    };
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google SIgn In was unsuccessful. Try Again Later");
    };

    const [ showPassword, setShowPassword] = useState(false);
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (isSignup) {
            const res = await axios.post('http://127.0.0.1:5010/api/users', formData);
            console.log(res.data);
            // Update the UI or store the user data as needed
          } else {
            const res = await axios.post('http://127.0.0.1:5010/api/login', {
              username: formData.username,
              password: formData.password,
            });
            console.log(res.data);
            if (res.status === 200) {
                ReactDOM.render(<App2 />, document.getElementById("root"));
                // After a successful login, save the user data
                localStorage.setItem('user', JSON.stringify(user));

                // Store the token in local storage

                // Reload the page to allow access to the restricted content

              // User authentication was successful
              // Update the UI or store the authenticated user data as needed
            } else {
              // Handle errors (e.g., user not found, invalid password)
              // Update the UI to show an error message
            }
          }
        } catch (error) {
            console.log(error);
            // Handle other possible errors, such as network issues or server errors
            // Update the UI to show an error message
          }
        }
      
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]:e.target.value});
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            {isSignup && (
                <>
                    <Input
                        name='firstName'
                        label='First Name'
                        placeholder='John'
                        value={formData.firstName}
                        onChange={handleChange}
                        autoFocus
                    />
                    <Input
                        name='lastName'
                        placeholder='Doe'
                        label='Last Name'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <Input
                        name='email'
                        placeholder='johndoe@gmail.com'
                        label='Email Address'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        name='username'
                        placeholder='Enter your Username'
                        label='Username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </>
            )}



            {!isSignup && (
                <Input
                    type="text"
                    label="Username/Email"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter email or username"
                    autoFocus
                />
            )}
            
            <Input
                name='password'
                label='Password'
                placeholder='Enter your Password'
                value={formData.password}
                onChange={handleChange}
                type={ showPassword ? "text" : "password"} 
                handleShowPassword = {handleShowPassword}
            />
            {isSignup && (
                <Input
                    name='confirmPassword'
                    label='Confirm Password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    type={ showPassword ? "text" : "password"} 
                />
            )}
            
            
            <div className="flex justify-center">
                <button
                    type='submit'
                    className='bg-tertiary hover:bg-secondary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl'
                >
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </button>
            </div>
            <div className='flex justify-center'>
                <GoogleLogin
                    clientId="143299848994-8016dc2pupdqfbpqud6vvtmjq9dviolg.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button className='bg-tertiary hover:bg-secondary cursor-pointer py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            Google Sign In
                        </button>
                    )}

                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy= "single_host_origin"

                />
            </div>
            <div className="flex justify-center">
                <button onClick={switchMode} className='bg-tertiary hover:bg-secondary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl'>
                    { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </button>
            </div>        
        </form>
    );

};

const LoginModal = ({ onClose, isSignup }) => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen z-50 flex justify-center items-center'>
            <div className='absolute bg-black opacity-50 inset-0 z-0' onClick={onClose} />
            <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-black-100 p-8 rounded-2xl z-10'
                style={{ maxHeight: '90vh', overflowY: 'scroll' }}
            >
                {isSignup ? (
                    <>
                        <p className={styles.sectionSubText}>Sign Up</p>
                        <h3 className={`${styles.sectionHeadText} mb-10`}>Get Started.</h3>
                    </>
                    ) : (
                    <>
                        <p className={styles.sectionSubText}>Login</p>
                        <h3 className={`${styles.sectionHeadText} mb-10`}>Welcome Back.</h3>
                    </>
                )}


                <Login isSignup={isSignup} />


                <div className="flex justify-center">
                <button
                    onClick={onClose}
                    className='bg-tertiary hover:bg-secondary mt-4 py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl'
                >
                    Close
                </button>
                </div>
            </motion.div>
        </div>

    );
};
      
export default LoginModal;