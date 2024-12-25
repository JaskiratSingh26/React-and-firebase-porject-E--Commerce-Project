import React, { useContext, useState } from 'react'
// import { ShoppingCart } from 'lucide-react'
import { FaShoppingCart } from "react-icons/fa";
// import Singleproduct from '../SIngleproduct/Singleproduct';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Mystate from '../../Context/Mystate';
import Mycontext from '../../Context/Mycontext';
import { Loader } from 'lucide-react';
export default function Bestsellingproduct() {
  const navigate = useNavigate();
// const products=[ {
//     id: 1,
//     image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
//     title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//     desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//     price: 130,
//     trendingProductName: 'Featured',
//     quantity: 1,
// },
// {
//     id: 2,
//     image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
//     title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//     desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//     price: 120,
//     trendingProductName: 'Featured',
//     quantity: 1,
// },
// {
//     id: 3,
//     image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
//     title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//     desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//     price: 150,
//     trendingProductName: 'Featured',
//     quantity: 1,
// },
// {
//     id: 4,
//     image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
//     title: 'Kaushalam kalash Copper Pot',
//     desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//     price: 120,
//     trendingProductName: 'Featured',
//     quantity: 1,
// },
// {
//     id: 5,
//     image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
//     title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//     desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//     price: 130,
//     trendingProductName: 'Featured',
//     quantity: 1,
// },
// {
//     id: 6,
//     image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
//     title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//     desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//     price: 120,
//     trendingProductName: 'Featured',
//     quantity: 1,
// }
// ]


    const[loading,setloading]=useState(false)
let{ Allproducts}= useContext(Mycontext)
console.log(Allproducts)

return (
  <div>
    <h1 className='text-center text-4xl font-extrabold drop-shadow-2xl  mt-9'>Best Selling Products</h1>
    <div className='mt-5 px-28 py-28 grid sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {Allproducts.slice(0,8).map((product) => (
      
  

        
<div className=" flex items-center justify-center p-4">
<div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
  <div className="relative">
    <img 
    onClick={()=>{
  // console.log(product.Product.ProductID)
      navigate(`/product/${product.Product.ProductID}`)
    }}
      src={product.Product.url}
      alt={product.Product.title}
      className="w-full h-64 hover:h-60 cursor-pointer object-cover"
    />
    <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold rounded-full px-3 py-1">
      {product.Product.category}
    </span>
  </div>
  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{product.Product.title}</h2>
    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
    <div className="flex justify-between items-center">
      {/* <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span> */}
      {/* <Link  to={'Cart'}>
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
  <FaShoppingCart className="h-5 w-5 mr-2" />
  Add to Cart
</button>
</Link> */}
    </div>
  </div>
</div>
</div>
        
      ))}
    </div>
  </div>
);
}
