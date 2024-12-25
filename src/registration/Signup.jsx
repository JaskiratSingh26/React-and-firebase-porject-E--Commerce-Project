import React, { useState } from 'react';
import { useContext } from 'react';
import Mycontext from '../Context/Mycontext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firedb } from '../Firebase/FirbaseConfig';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import Loader from '../components/loader/Loader'
import { useNavigate } from 'react-router';

export default function Signup() {
  let { loading, setloading } = useContext(Mycontext)
  let [usersignup, setusersignup] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  })

  const navigate = useNavigate();
  const usersignupFunction = async () => {
    setloading(true)
    try {

      await createUserWithEmailAndPassword(auth, usersignup.email, usersignup.password)

      const user = auth.currentUser;
      console.log('cureetn user', user)

   if(user){
    await setDoc(doc(firedb,'users',user.uid),{
      name: usersignup.name,
      uid: user.uid,
      email: user.email,
      role: usersignup.role,
 
    })
  alert('Signup successfully')






  navigate("/login")
   }



    } catch (error) {
      alert('sigup failed')
      console.log('from sign try catch  function ', error)
      setloading(false)
    }
  }

  //    const usersignupFunction= async ()=>{
  //     setloading(true)
  //   try {

  //  const users=  await createUserWithEmailAndPassword(auth, usersignup.email, usersignup.password)

  //  const user={
  //   name:usersignup.name,
  //   uid:users.user.uid,
  //   email:users.user.email,
  //   role:usersignup.role,
  //  }

  //  const userefernce=collection(firedb,'user')
  //    await addDoc(userefernce,user)
  //   setusersignup({
  //     name:'',
  //     email:'',
  //     password:'',
  //     confirmPassword:'',
  //     role:'user',

  //   })
  //  alert('Signup successfully')
  //   setloading(false)

  //   } catch (error) {
  //     console.log('from sigunup function',error)
  //     alert('signup failed')
  //     setloading(false)
  //   }
  //   }
  return (

    <div className='bg-[url(https://wallpapercave.com/wp/wp4511355.jpg)] bg-no-repeat   bg-cover bg-center'>
      {loading && <Loader />}
      {/* bg-gradient-to-br from-purple-400 via-pink-500 to-red-500  */}

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-xl shadow-lg p-8 w-full max-w-md transition-all duration-300 ease-in-out hover:bg-opacity-20">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-md">
            Sign Up
          </h1>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={usersignup.name}
                onChange={(e) => {
                  setusersignup({ ...usersignup, name: e.target.value })
                }}
                className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all duration-200"
                required
                placeholder="Choose a username"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={usersignup.email}
                onChange={(e) => {
                  setusersignup({ ...usersignup, email: e.target.value })
                }}
                className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all duration-200"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={usersignup.password}
                onChange={(e) => {
                  setusersignup({ ...usersignup, password: e.target.value })
                }}
                className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all duration-200"
                required
                placeholder="Create a password"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={usersignup.confirmPassword}
                onChange={(e) => {
                  setusersignup({ ...usersignup, confirmPassword: e.target.value })
                }}
                className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all duration-200"
                required
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-white bg-opacity-30 hover:bg-opacity-40 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 mt-6"
              onClick={(e) => {
                e.preventDefault();
                usersignupFunction()
              }}
            >
              Create Account

            </button>
          </form>
          <p className="mt-4 text-center text-white text-sm">
            Already have an account?{' '}
            <a href="/Login" className="font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

