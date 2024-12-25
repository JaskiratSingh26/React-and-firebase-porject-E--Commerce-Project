// import React from 'react'
// import AliceCarousel from 'react-alice-carousel';
// // import 'react-alice-carousel/lib/alice-carousel.css';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { useNavigate } from 'react-router';
// export default function Slider () {
//  let navigate=useNavigate()

   
//     const items = [
//        <div  onClick={(e)=>{
//         navigate(`/category/Fashion`)
//        }} className="item" data-value="1"><img className='w-full sm:h-[40vh] p-2  object-fill' src="https://i.pinimg.com/originals/19/5c/70/195c705a0432afc871d2e6c4c5dbbe7b.jpg" alt="" /></div>,
//         <div className="item " data-value="2"><img  className=' w-full  sm:h-[40vh] object-fill mt-1 ml-1 mr-1 mb-1 ' src="https://marketplace.canva.com/EAFYElY5EE4/1/0/800w/canva-brown-and-white-modern-fashion-banner-landscape-2uXtgbkdkec.jpg" alt="" srcset="" /></div>,
//         <div className="item " data-value="2" onClick={()=>{
//           navigate(`/category/shoes`)
//         }} ><img  className=' w-full  sm:h-[40vh] object-fill mt-1 ml-1 mr-1 mb-1 ' src="https://i.pinimg.com/736x/3c/85/e1/3c85e1e4dcde636ad4926be0d97520e8.jpg" alt="" srcset="" /></div>,
//         <div className="item " data-value="2"><img  className=' w-full  sm:h-[40vh] object-fill mt-1 ml-1 mr-1 mb-1 ' src='https://i.pinimg.com/736x/83/d1/c9/83d1c9342a6cfa1efd72b8aea43af865.jpg' alt="" srcset="" /></div>,
//     ];
//   return (
//     <div className=' mt-[6vh] '>

// <AliceCarousel
//         mouseTracking
//         items={items}
//          autoPlay
//         autoPlayStrategy="none"
//         autoPlayInterval={1000}
      
//         animationType="fadeout"
//         infinite
        
//         disableDotsControls
//         disableButtonsControls
        
       
//     />

//     </div>
//   )
// }



import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
    let navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const items = [
        <div 
            onClick={() => navigate(`/category/Fashion`)} 
           
            onMouseEnter={() => setHoveredIndex(0)} 
            onMouseLeave={() => setHoveredIndex(null)} 
            data-value="1"
        >
            <img className='mt-9    h-[45vh] w-full  bg-black '
                style={{ transform: hoveredIndex === 0 ? 'scale(1.05)' : 'scale(1)  '     }} 
                src="https://i.pinimg.com/originals/19/5c/70/195c705a0432afc871d2e6c4c5dbbe7b.jpg" 
                alt="Fashion" 
            />
        </div>,
        <div 
            onClick={() => navigate(`/category/Accessories`)} 
           
            onMouseEnter={() => setHoveredIndex(1)} 
            onMouseLeave={() => setHoveredIndex(null)} 
            data-value="2"
        >
            <img   className='mt-9    h-[45vh] w-full   bg-black '
                style={{ transform: hoveredIndex === 1 ? 'scale(1.05)' : 'scale(1)' }} 
                src="https://marketplace.canva.com/EAFYElY5EE4/1/0/800w/canva-brown-and-white-modern-fashion-banner-landscape-2uXtgbkdkec.jpg" 
                alt="Accessories" 
            />
        </div>,
        <div 
            onClick={() => navigate(`/category/Shoes`)} 
          
            onMouseEnter={() => setHoveredIndex(2)} 
            onMouseLeave={() => setHoveredIndex(null)} 
            data-value="3"
        >
            <img   className='mt-9    h-[45vh] w-full  bg-black'
                style={{ transform: hoveredIndex === 2 ? 'scale(1.05)' : 'scale(1)' }} 
                src="https://i.pinimg.com/736x/3c/85/e1/3c85e1e4dcde636ad4926be0d97520e8.jpg" 
                alt="Shoes" 
            />
        </div>,
        <div 
            onClick={() => navigate(`/category/Clothing`)} 
            
            onMouseEnter={() => setHoveredIndex(3)} 
            onMouseLeave={() => setHoveredIndex(null)} 
            data-value="4"
        >
            <img  className='  w-full  h-[45vh] bg-black'
                style={{  transform: hoveredIndex === 3 ? 'scale(1.05)' : 'scale(1)' }} 
                src='https://i.pinimg.com/736x/83/d1/c9/83d1c9342a6cfa1efd72b8aea43af865.jpg' 
                alt="Clothing" 
            />
        </div>,
    ];

    return (
        <div   className=''>
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={3000}
                animationType="fadeout"
                infinite
                disableDotsControls
                disableButtonsControls
            />
        </div>
    );
}

// const styles = {
//     container: {
//         marginTop: '6vh',
//     },
//     item: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         cursor: 'pointer',
//     },
//     image: {
//         width: '100%',
//        // Set a maximum height for large screens
//         height: 'auto', // Maintain aspect ratio
//         objectFit: 'cover', // Ensures the image covers the area without distortion
//         borderRadius: '10px', // Rounded corners
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Shadow for depth
//         transition: 'transform 0.3s', // Smooth transition for hover effect
//     },
// };

// Media queries can be added in a separate CSS file or using a library like styled-components or emotion if needed.