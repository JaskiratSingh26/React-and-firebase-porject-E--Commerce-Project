import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { MdShoppingCart } from "react-icons/md";
import { Link, Navigate, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();
  // console.log('User  data retrieved:', user);
  const logout = () => {
    localStorage.clear('users');
    navigate("/login")
  }


   const cartitems = useSelector(state => state.cart.items);

  return (
    <nav className='bg-black p-3   text-white'>
      <div className=' container mx-auto'>
        {/* Desktop menu */}
        <div className='hidden lg:flex items-center cursor-pointer justify-between'>
          <h1 className=' text-[2vh] font-bold'    onClick={()=>{
            navigate('/')
          }}  >Hint/xx</h1>
          <div className='flex items-center justify-center flex-grow'>
            <a href="/" className='hover:text-gray-300 mx-4'>Home</a>
            <a href="/ALLproducts" className='hover:text-gray-300 mx-4'>All products</a>

            {user && user.role == 'user' &&

              // <a href="/Userdashborad" className='hover:text-gray-300 mx-4'>User dashborad</a>
              <Link to={'/Userdashborad'}>
                <span className='hover:text-gray-300 mx-4'>User dashborad</span>
              </Link>
            }



            {/* <a href="/Admindashboard" className='hover:text-gray-300 mx-4'>Admin dashboard</a> */}
            {user && user.role == "admin" && <li  className='list-none'>
              <Link to={'/Admindashboard'}>
                <span className='hover:text-gray-300 mx-4'>Admin</span>
              </Link>
            </li>}
            <a onClick={()=>{
               navigate('/Aboutpage')
            }} className='hover:text-gray-300 mx-4'>About us </a>

          </div>
          <div className='flex items-center space-x-6'>
            <Link to={'/Cart'}>
              <button className='hover:text-gray-300'>
                <div className=' flex'>

                <MdShoppingCart size={24} />
                {cartitems.length}
                </div>
              </button>
            </Link>
            <div className='relative'>
              <button
                className='hover:text-gray-300'
                onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
              >
                <VscAccount size={24} />
              </button>
              {isAccountDropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700'>
                  {/* <a href="/Login" className='block px-4 py-2 hover:bg-gray-100'>Login</a> */}
                  {/* <a href="/Signup" className='block px-4 py-2 hover:bg-gray-100'>Sign Up</a> */}
                  {!user ? <li className=' list-none block px-4 py-2 hover:bg-gray-100'>
                    <Link to={'/Login'} >Login</Link>
                  </li> : ""}
                  {!user ? <li className=' z-10  list-none block px-4 py-2 hover:bg-gray-100'>
                    <Link to={'/signup'} >Signup</Link>
                  </li> : ""}

                  {user ? <li className='list-none'> <a href="" onClick={() => {
                    logout()
                  }}>logout</a> </li> : ''}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className='lg:hidden'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-xl cursor-pointer font-bold'     onClick={()=>{
            navigate('/')
          }} >Hint/xx</h1>
            <div className='flex items-center space-x-4'>
              <Link to={'/Cart'}>
                <button onClick={() => {

                }} className='hover:text-gray-300  mt-2'>


<div className=' flex ' >

                <MdShoppingCart size={20} />
                <span  className='text-sm'>

                {cartitems.length}
                </span>
                </div>
                    

                </button>
              </Link>

              <button
                className='hover:text-gray-300'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className='flex flex-col space-y-4'>
              <a href="/" className='hover:text-gray-300' >Home</a>
              <a href="/ALLproducts" className='hover:text-gray-300'>All products</a>
              {/* <a href="/Userdashborad" className='hover:text-gray-300 mx-4'>User dashborad</a> */}
              {user && user.role === 'user' &&

                // <a href="/Userdashborad" className='hover:text-gray-300 mx-4'>User dashborad</a>
                <Link to={'/Userdashborad'}>
                  <span className='hover:text-gray-300 mx-4'>User dashborad</span>
                </Link>
              }

              {/* <a href="/Admindashboard" className='hover:text-gray-300 mx-4'>Admin dashboard</a> */}
              {user && user.role === "admin" && <li className='list-none'>
              <Link to={'/Admindashboard'}>
                <span className='hover:text-gray-300'>Admin</span>
              </Link>
            </li>}
            <a onClick={()=>{
               navigate('/Aboutpage')
            }} className='hover:text-gray-300'>About us </a>
              <div className='relative'>
                <button
                  className='hover:text-gray-300 w-full text-left'
                  onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                >
                  Account
                </button>
                {isAccountDropdownOpen && (
                  <div className='mt-2 rounded-md shadow-lg py-1'>
                    {/* <a href="/Login" className='block px-4 py-2 hover:bg-gray-700'>Login</a> */}
                    {/* <a href="/Signup" className='block px-4 py-2 hover:bg-gray-700'>Sign Up</a> */}

                    {!user ? <li className='  block px-4 py-2 hover:bg-gray-100'>
                    <Link to={'/Login'} >Login</Link>
                  </li> : ""}
                  {!user ? <li className='block px-4 py-2 hover:bg-gray-100'>
                    <Link to={'/signup'} >Signup</Link>
                  </li> : ""}
                  {user ? <li className='list-none' > <a href="" onClick={() => {
                    logout()
                  }}>logout</a> </li> : ''}

                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

