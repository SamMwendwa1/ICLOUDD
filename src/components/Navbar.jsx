// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';

import { cloud_icon, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={cloud_icon}
              alt='logo'
              className='w-9 h-9 object-contain'
            />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              I-CLOUD &nbsp;
              <span className='sm:block hidden'>
                | &nbsp; By Samuel Mwendwa
              </span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a
                  href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li
              className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
            >
              <a href='http://localhost:3000/'>Login</a>
            </li>
          </ul>
              
          </div>
      </nav>
    </>
  );
};

export default Navbar;
