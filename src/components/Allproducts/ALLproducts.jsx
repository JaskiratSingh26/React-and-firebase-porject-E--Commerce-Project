// import React, { useContext } from 'react'
// import Mycontext from '../../Context/Mycontext'
// import { Link } from 'react-alice-carousel'
// import { Loader } from 'lucide-react'
// import { useNavigate } from 'react-router'

// function ALLproducts() {
// let Navigate=useNavigate()
//     let {Allproducts,loading}=useContext(Mycontext)

//   return (
//     <div  className='min-h-screen   p-2 m-3'> 

// <div>
//     <h1 className='text-center text-4xl font-extrabold drop-shadow-2xl'>OUR Products</h1>
//     <div className='mt-5 px-28 py-28 grid sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
//     {Allproducts.map((product) => (
      
  

        
//       <div className=" flex items-center justify-center p-4">
//       <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="relative">
//           <img 
//           onClick={()=>{
//         // console.log(product.Product.ProductID)
//             Navigate(`/product/${product.Product.ProductID}`)
//           }}
//             src={product.Product.url}
//             alt={product.Product.title}
//             className="w-full h-64 hover:h-60 cursor-pointer object-contain"
//           />
//           <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold rounded-full px-3 py-1">
//             {product.Product.category}
//           </span>
//         </div>
//         <div className="p-4">
//           <h2 className="text-xl font-bold text-gray-800 mb-2">{product.Product.title}</h2>
//           <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//           <div className="flex justify-between items-center">
//             {/* <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span> */}
//             {/* <Link  to={'Cart'}>
//       <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
//         <FaShoppingCart className="h-5 w-5 mr-2" />
//         Add to Cart
//       </button>
//       </Link> */}
//           </div>
//         </div>
//       </div>
//       </div>
              
//             ))}
//     </div>
//   </div>
    



      
//     </div>
//   )
// }

// export default ALLproducts



import React, { useContext } from 'react';
import Mycontext from '../../Context/Mycontext';
import { useNavigate } from 'react-router';

function ALLproducts() {
    let Navigate = useNavigate();
    let { Allproducts, loading } = useContext(Mycontext);

    return (
<div className='grid  max-sm:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {Allproducts.map((product) => (
        <div className="flex items-center justify-center p-2 transition-transform transform hover:scale-105">
            <div className="w-full max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
                <div className="relative">
                    <img
                        onClick={() => {
                            Navigate(`/product/${product.Product.ProductID}`);
                        }}
                        src={product.Product.url}
                        alt={product.Product.title}
                        className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 ease-in-out"
                    />
                    <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold rounded-full px-3 py-1">
                        {product.Product.category}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out hover:bg-opacity-100">
                        <h2 className="text-lg font-bold text-white mb-1">{product.Product.title}</h2>
                        <p className="text-gray-300 text-xs">{product.description}</p>
                        <button className="mt-2 bg-black hover:bg-gray-800 text-white font-bold py-1 px-3 rounded transition-colors duration-300">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
    );
}

export default ALLproducts;