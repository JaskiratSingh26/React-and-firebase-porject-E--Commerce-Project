import React, { useContext, useState } from 'react'
// import { useContext } from 'react'
// import Mycontext from '../../Context/Mycontext'
// import Loader from '../loader/Loader'
import { firedb } from '../../Firebase/FirbaseConfig'

import { doc, setDoc } from 'firebase/firestore'
import Mycontext from '../../Context/Mycontext'
import Loader from '../loader/Loader'
import { useNavigate } from 'react-router-dom';
function Addproduct() {

    // let context=useContext(Mycontext)
    // let {data} =useContext(Mycontext)
    // let {data} =context
    const Navigate = useNavigate();
    let {loading,setloading}=useContext(Mycontext)

    const options=[
      {name:'fashion'},
      {name:'shirt' },
      {name:'jacket' },
      {name:'mobile' },
      {name:'laptop' },
      {name:'shoes' },
    ]


 const [Product,setproduct]=useState({
   ProductID:'',
  title:'',
   price:'',
   url:'',
   category:'',
   description:'',
   quantity:'1',
 })

  async function additems(){

  if(Product.title== ''||Product.price == ''||Product.url==''|| Product.category== ''||Product.description==''){
    alert('all fields are required')
    return

  };

  setloading(true)
  try {

    await setDoc(doc(firedb,'Product',Product.ProductID),{Product})
     alert('Product added successfully')
     console.log('adedd product',Product)
     Navigate('/Admindashboard')
     setproduct({
      ProductID:'',
       title:'',
       price:'',
       url:'',
       category:'',
       description:'',
       quantity:'1',
     }) 
      
  } 
  
  catch (error) {
   console.log(error) 
   alert('product  cannot be added due to  some error')
   setloading(false)
  }

  setloading(false)

console.log(Product)

 }

  return (
    <div className='min-h-screen bg-[url(https://wallpaperboat.com/wp-content/uploads/2020/08/08/52220/dark-theme-02.jpg)] bg-no-repeat   bg-cover bg-center '>
      
{
  loading && <Loader /> 
}

<div  className=' h-screen  flex items-center justify-center'>



      <div className='  m-7   border-2    w-fit    p-2  h-[50vh] bg-transparent  items-center   justify-center flex flex-col  '>
{/* main */}


<h1 className='text-[3vh]  text-white font-extrabold' > Add Product</h1>

<input  required   className='border-2     text-white  bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg' type="text" name="title" id=""  placeholder='Product Id' value={Product.ProductID} 
 
 onChange={(e) => {
   setproduct({...Product, ProductID: e.target.value })
 }}
 />

<input  required   className='border-2     text-white  bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg' type="text" name="title" id=""  placeholder='Product Title' value={Product.title} 
 
onChange={(e) => {
  setproduct({...Product, title: e.target.value })
}}
/>
<input    className='border-2    text-white  bg-transparent  w-[40vh] border-white p-1 m-2 rounded-lg' type="text" name="price" id=""  placeholder='Product Price'   value={Product.price} 
 onChange={(e)=>{
  setproduct({...Product, price: e.target.value })
 }}

/>

<input  required   className='border-2     text-white  bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg'  type="url" name="url" id=""   placeholder=' Product Image Url'
value={Product.url} 
onChange={(e)=>{
 setproduct({...Product, url: e.target.value })
}}


/>

<select  required className='border-2  text-white    bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg' name="category" 

value={Product.category} 
 onChange={(e)=>{
  setproduct({...Product, category: e.target.value })
 }}
>
                        <option  className='bg-black' value="" disabled selected>Select category</option>
                        {options.map((option, index) => (
                            <option  className='bg-black'    key={index} value={option.name}>{option.name}</option>
                        ))}
                    </select>

<input  required   className='border-2      text-white bg-transparent w-[40vh] h-96 border-white p-1 m-2 rounded-lg'  type="text" name="description" id=""  placeholder='Product description' 

value={Product.description} 
 onChange={(e)=>{
  setproduct({...Product, description: e.target.value })
 }}

/>
   

   <button  className='border-  w-[30vh] bg-white hover:bg-slate-500 hover:ease-out border-white p-1 m-2  rounded-2xl' onClick={(e)=>{
    additems()
   }} > Add Product</button>
      </div>

</div>
    </div>
  )
}

export default Addproduct
