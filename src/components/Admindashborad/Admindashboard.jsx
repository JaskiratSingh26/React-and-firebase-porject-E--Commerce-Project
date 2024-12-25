import React, { useContext } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Productdetails from '../Admin/Productdetails';
import Orderdetails from '../Admin/Orderdetails';
import 'react-tabs/style/react-tabs.css';
import Userdatils from '../Admin/Userdetails';
import { User } from 'lucide-react';
import Mycontext from '../../Context/Mycontext';


function Admindashboard() {
    const user = JSON.parse(localStorage.getItem('userData'));
    let {orderdata,Allproducts,allusers}=useContext(Mycontext)

  return (


    <div className='min-h-screen'>
    


    <div>
    {/* upper div */}
    <div className="flex  flex-col justify-between items-center  m-2 py-12 px-10">
       <img  className='bg-transparent object-cover' src=" https://tse4.mm.bing.net/th?id=OIP.XfN_dUTzgeHXLeHD9DK0uwHaHa&pid=Api&P=0&h=220" alt="" />
       <h1 className='font-extrabold text-[2vh]' >Name:{user?.name}</h1>
       <h1 className='font-extrabold text-[2vh]'>Email:{user?.email}</h1>
       <h1 className='font-extrabold text-[2vh]'>Role:Admin</h1>

    </div>
</div>
 
 
 <div>

 <Tabs>

<TabList className=" flex   justify-between items-center  m-2 py-12 px-10">

    <Tab className=' hover:bg-pink-200 bg-pink-100 border  border-black  flex  flex-col justify-center items-center p-2 '> 
        <span><FaShoppingBag  size={40}/></span>
        <span className='font-bold text-[2vh]'>Total Products</span>
        <span    className='font-bold text-[2vh]' > {Allproducts.length}</span>
    </Tab>

    <Tab className=' hover:bg-pink-200 bg-pink-100 border  border-black  flex  flex-col justify-center items-center p-2 '>
        <span><GiHamburgerMenu size={40}/></span>
        <span    className='font-bold text-[2vh]' >Total orders</span>
        <span    className='font-bold text-[2vh]' >{orderdata.length}</span>
        </Tab>



    <Tab className=' hover:bg-pink-200 bg-pink-100 border  border-black  flex  flex-col justify-center items-center p-2 '>
    <span><FaUserGroup size={40}/></span>
        <span    className='font-bold text-[2vh]' >Total users</span>
        <span    className='font-bold text-[2vh]' >{allusers.length}</span>
    </Tab>

</TabList>


<TabPanel>
    

    <div className='p-4'>

       <Productdetails/>
    </div>
    {/* products table */}
</TabPanel>

<TabPanel>
    <div className='p-4'>
        <Orderdetails/>
    </div>
    {/* orders table */}
</TabPanel> 

<TabPanel>
   <Userdatils/>
    {/* users table */}
</TabPanel> 

 </Tabs>
 </div>


    </div>
  )
}

export default Admindashboard
