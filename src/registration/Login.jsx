import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Mycontext from '../Context/Mycontext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firedb } from '../Firebase/FirbaseConfig';
import { collection, onSnapshot, query ,doc, getDoc} from 'firebase/firestore';
import { where } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader/Loader';
export default function Login() {
  // let [loading, setloading] = useContext(Mycontext)
  let [userlogin, setuserlogin] = useState({
    email: '',
    password: ''
  })
  const Navigate = useNavigate();

  //  

  const userloginfuncton = async () => {
    try {

      await signInWithEmailAndPassword(auth, userlogin.email, userlogin.password)
      alert("Login Success")
      // let user=auth.currentUser
      // console.log(user)


      auth.onAuthStateChanged(async (user)=>{
        console.log('inside user state',user)
        const docref= doc(firedb,'users',user.uid);
        const docsnapshot= await getDoc(docref)
         if(docsnapshot.exists()){
            const userData= docsnapshot.data()
            console.log(userData)
            localStorage.setItem('userData',JSON.stringify(userData))
            if(userData.role === 'admin'){
              Navigate('/Admindashboard')
            }
            else{
              Navigate('/Userdashborad')

            }
         }
         else{
           alert('user data not found')
         }

  
      })

  



    } catch (error) {
      alert('login failed')
      console.log('from login function', error);
    }
  }


  //
  return (
    <div className=' bg-[url(http://wallup.net/wp-content/uploads/2017/03/28/425586-nature-landscape-mountains-trees-forest-sunset-mist.jpg)] bg-no-repeat   bg-cover bg-center'>
      {/* {
  loading && <Loader/>
} */}
      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-xl shadow-lg p-8 w-full max-w-md transition-all duration-300 ease-in-out hover:bg-opacity-20">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-md">
            Login
          </h1>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={userlogin.email}
                onChange={(e) => {
                  setuserlogin({ ...userlogin, email: e.target.value })
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
                value={userlogin.password}
                onChange={(e) => {
                  setuserlogin({ ...userlogin, password: e.target.value })
                }}
                className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all duration-200"
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                userloginfuncton()
              }}
              type="submit"
              className="w-full py-3 px-4 bg-white bg-opacity-30 hover:bg-opacity-40 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
            >
              login In
            </button>
          </form>
          <h2 className=' text-center text-white' > Dont have an account yet ?</h2>
          <a href="/Signup" className='  font-mono  flex   items-center justify-center underline text-center text-white  '> create an account</a>
        </div>
      </div>
    </div>
  );
}

