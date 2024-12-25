import React from 'react'
import Slider from "react-slick";

import { useNavigate } from 'react-router';

function Category() {
    let navigate=useNavigate()
    const categories = [
        {
            image:'https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?w=2000',
            name:'Fashion',
            link:''
        },
        {
            image:'https://img.freepik.com/premium-vector/tshirt-logo-clothing-logo-apparel-store-icon-fashion-logo-tshirt-icon-design-template_657888-4.jpg?w=2000',
            name:'Shirt',
            link:''
        },
        {
            image:'https://tse3.mm.bing.net/th?id=OIP.5aHNrDnDS-PhxPZHjIccKwHaJ4&pid=Api&P=0&h=220',
            name:'Jacket',
            link:''
        },
        {
            image:'https://cdn.dribbble.com/users/7021390/screenshots/15134064/gig_2_4x.jpg',
            name:'Mobile',
            link:''
        },
        {
            image:'https://tse3.mm.bing.net/th?id=OIP.TcLphHGJu_oa6t-VJ3sSwwHaHa&pid=Api&P=0&h=220',
            name:'Laptop',
            link:''
        },
        {
            image:'https://img.freepik.com/premium-vector/shoes-logo-vector-running-logo-vector-template_304830-474.jpg?w=2000',
            name:'Shoes',
            link:''
        }
    ]
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,

    //     pauseOnHover: true
    // };


    // const items = categories.map(category => (
    //     <div  className='flex   flex-col  m-4 sm:w-[18vh] sm:m-1 sm:p-3 w-[15vh] items-center p-4 '>
    //     <img    src={category.image} alt={category.name} className=' h-24  w-full  shadow-black shadow-lg rounded-lg' />
    //     <h2 className='text-white text-xl m-2'>{category.name}</h2>
    // </div>
    



    // ));
  return (


    <div className='m-7  p-2' >  
       

       <div className=' flex  overflow-x-auto justify-evenly  '> 

         {categories.map((category, index) => (
             <div key={index} className='flex   flex-col  m-4 sm:w-[12vh] sm:m-1 sm:p-3 w-[18vh] items-center p-4   max-sm:w-[30vh]  ' onClick={(e)=>{
                navigate(`/category/${category.name}`)
             }} >
                 <img    src={category.image} alt={category.name} className=' max-sm:h-[9vh]   h-24 hover:h-28 cursor-pointer  w-full object-right shadow-black shadow-lg rounded-full ' />
                 <h2 className='  text-xl m-2'>{category.name}</h2>
             </div>
         ))}





 
       </div>

      
    </div>
  )
}

export default Category
