
import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Fotter from './components/fotter/Fotter'
import Singleproduct from './components/SIngleproduct/Singleproduct'
import Cart from './components/Cart/Cart'
import Aboutpage from './pages/home/Aboutpage'
import Nopage from './pages/nopage/Nopage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './registration/Login'
import Signup from './registration/Signup'
import Userdashboard from './components/userdashborad/Userdashborad'

import Admindashboard from './components/Admindashborad/Admindashboard'

import Addproduct from './components/Admindashborad/Addproduct'
import Mystate from './Context/Mystate'

import { Protectedroutesforadmin } from './Protectedroutes/Protectedroutesforadmin'
import { Protectedroutesforusers } from './Protectedroutes/Protectedroutesforusers'

import Categorypage from './components/category/Categorypage'

import Updateproductdetials from './components/Admin/Updateproductdetials'
import ALLproducts from './components/Allproducts/ALLproducts'
import Bynowpage from './components/bynow/Bynowpage'
import Changingorderstatus from './components/Admin/changingorderstatus'


function App()  {
  return (
   

    
    <Mystate>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/*' element={<Nopage />} />
          <Route path='/Aboutpage' element={<Aboutpage />} />
          <Route path='/product/:id' element={<Singleproduct />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Cart/userdashborad' element={<Userdashboard />} />
          <Route path='/chanegingstatus/:id' element={<Changingorderstatus/>} />

       
       



<Route  path='/category/:categoryname'  element={<Categorypage/>}/>


          <Route path='/Userdashborad' element={

            <Protectedroutesforusers>

              <Userdashboard />
            </Protectedroutesforusers>


          } />
          <Route path='/Admindashboard' element={
            <Protectedroutesforadmin>
              <Admindashboard />
            </Protectedroutesforadmin>

          } />
          <Route path='/Addproduct' element={

            <Protectedroutesforadmin>

              <Addproduct />
            </Protectedroutesforadmin>





          } />



          <Route path='/Updateproductdetials/:id' element={
            <Updateproductdetials />
          } />


          <Route path='/ALLproducts' element={<ALLproducts />} />

        </Routes>
        <Fotter />
      </BrowserRouter>
    </Mystate>
  
  )
}

export default App
//  singleproduct/:id