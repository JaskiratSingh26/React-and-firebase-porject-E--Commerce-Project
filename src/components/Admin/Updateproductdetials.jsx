import React, { useContext, useState } from 'react'
// import { useContext } from 'react'
// import Mycontext from '../../Context/Mycontext'
// import Loader from '../loader/Loader'
import { firedb } from '../../Firebase/FirbaseConfig'

import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore'
import Mycontext from '../../Context/Mycontext'
import Loader from '../loader/Loader'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router'
import { useEffect } from 'react'
function  Updateproductdetials() {

    // let context=useContext(Mycontext)
    // let {data} =useContext(Mycontext)
    // let {data} =context
    
    let {loading,setloading}=useContext(Mycontext)

    console.log('data',useParams())
    // console.log('data id',useParams().id)
    let data=useParams().id

   async function fetchingperviousdatausingparams(){
      
    try {
      //  let use=useParams()
      setloading(true)
       let docRef = doc(firedb, 'Product', data);
       let docSnap = await getDoc(docRef);
       if (docSnap.exists()) {
         console.log('Document data:', docSnap.data().Product);
         setproduct({...docSnap.data().Product })
       } else {
         // doc.data() will be undefined in this case
         console.log('No such document!');
       }

  setloading(false)
     } 
      
    
    catch (error) {
      setloading(false)
      console.log('while fetching old data using params ',error)
    }

   }


   useEffect(() => {
    
   fetchingperviousdatausingparams()
   }, []);

    const Navigate = useNavigate();
 

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


async function updateperviousdata(){
console.log(Product)
try
{
  const reference = doc(firedb, 'Product', data)
  await deleteDoc(reference)


  console.log('finding this id ',data)
  await setDoc(doc(firedb,'Product',Product.ProductID),{Product});
  alert('Product updated successfully')
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
  // await setDoc(doc(firedb,'Product',Product.ProductID),{Product})
}
catch(err){
  console.log(err,'from updateperviousdata')
}
}


  return (
    <div className='min-h-screen bg-[url(https://wallpaperaccess.com/full/670210.jpg)] bg-no-repeat   bg-cover bg-center '>
      
{
  loading && <Loader /> 
}

<div  className=' h-screen  flex items-center justify-center'>



      <div className='  m-7   border-2    w-fit    p-2  h-[50vh] bg-transparent  items-center   justify-center flex flex-col  '>
{/* main */}


<h1 className='text-[3vh]  font-extrabold' > Update Product</h1>
<input  required   className='border-2     text-white  bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg' type="text" name="title" id=""  placeholder='Product ID' value={Product.ProductID} 
 
 onChange={(e) => {
   setproduct({...Product, ProductID: e.target.value })
 }}
 />

<input  required   className='border-2         bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg' type="text" name="title" id=""  placeholder='Product Title' value={Product.title} 
 
onChange={(e) => {
  setproduct({...Product, title: e.target.value })
}}
/>
<input    className='border-2        bg-transparent  w-[40vh] border-white p-1 m-2 rounded-lg' type="text" name="price" id=""  placeholder='Product Price'   value={Product.price} 
 onChange={(e)=>{
  setproduct({...Product, price: e.target.value })
 }}

/>

<input  required   className='border-2         bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg'  type="url" name="url" id=""   placeholder=' Product Image Url'
value={Product.url} 
onChange={(e)=>{
 setproduct({...Product, url: e.target.value })
}}


/>

<select  required className='border-2        bg-transparent w-[40vh] border-white p-1 m-2 rounded-lg' name="category" 

value={Product.category} 
 onChange={(e)=>{
  setproduct({...Product, category: e.target.value })
 }}
>
                        <option  className='' value="" disabled selected>Select category</option>
                        {options.map((option, index) => (
                            <option  className=''    key={index} value={option.name}>{option.name}</option>
                        ))}
                    </select>

<input  required   className='border-2         bg-transparent w-[40vh] h-96 border-white p-1 m-2 rounded-lg'  type="text" name="description" id=""  placeholder='Product description' 

value={Product.description} 
 onChange={(e)=>{
  setproduct({...Product, description: e.target.value })
 }}

/>
   

   <button  className='border-  w-[30vh]  bg-slate-200 hover:bg-slate-500 hover:ease-out border-white p-1 m-2  rounded-2xl' onClick={(e)=>{
    // additems()
  updateperviousdata()
}} > Update</button>
      </div>

</div>
    </div>
  )
}

export default Updateproductdetials
