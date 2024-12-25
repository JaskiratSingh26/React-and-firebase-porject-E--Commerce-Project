// import React, { useEffect, useState } from 'react'
// import { useContext } from 'react'
// import { useParams } from 'react-router'
// import { useNavigate } from 'react-router'
// import Mycontext from '../../Context/Mycontext'

// function Categorypage() {
//   let Navigate = useNavigate()
//   let { categoryname } = useParams()
//   let { Allproducts } = useContext(Mycontext)


//   let [filterproduct, setfilterproduct] = useState([])


//   // useEffect(() => {


//   //     const filteredProducts = Allproducts.filter(product =>
//   //         product.Product.category.toLowerCase().includes(categoryname.toLowerCase())
//   //     );
//   //     setfilterproduct(filteredProducts);
//   //     console.log('filteredproduct', filterproduct)
//   // }, [categoryname])
//   useEffect(() => {
//     const filteredProducts = Allproducts.filter(product =>
//       product.Product.category.toLowerCase().includes(categoryname.toLowerCase())
//     );
//     setfilterproduct(filteredProducts);
//     console.log('filteredProducts', filteredProducts); // Log the filtered products directly
//   }, [categoryname, Allproducts]); // Also add Allproducts as a dependency



//   return (
//     <div className='  min-h-screen'>
//       <div>
//         <h2 className='text-center m-3 p-4 text-[3vh] font-extrabold'>Welcome to {categoryname} category</h2>
//         <div className='grid max-sm:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
//           {filterproduct.length > 0 ? (
//             filterproduct.map((item, index) => (
//               <div key={index}>
//                 {/* <h3>{item.Product.title}</h3>
//                                 <p>{item.Product.description}</p>
//                                 <p>Price: {item.Product.price}</p> */}


//                 <div className="   py-8 px-8  p-4">
//                   <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="relative">
//                       <img
//                         onClick={() => {
//                           // console.log(product.Product.ProductID)
//                           Navigate(`/product/${item.Product.ProductID}`)
//                         }}
//                         src={item.Product.url}
//                         alt={item.Product.title}
//                         className="w-full h-64 hover:h-60 cursor-pointer object-cover"
//                       />
//                       <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold rounded-full px-3 py-1">
//                         {item.Product.category}
//                       </span>
//                     </div>
//                     <div className="p-4">
//                       <h2 className="text-xl font-bold text-gray-800 mb-2">{item.Product.title.slice(0, 14)}......</h2>
//                       <p className="text-gray-600 text-sm mb-4">{item.description}</p>
//                       <div className="flex justify-between items-center">
//                         {/* <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span> */}
//                         {/* <Link  to={'Cart'}>
// <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
//   <FaShoppingCart className="h-5 w-5 mr-2" />
//   Add to Cart
// </button>
// </Link> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             ))
//           ) : (
//             <p className='text-center'>No products found in {categoryname} category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Categorypage








import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import Mycontext from '../../Context/Mycontext';
import Loader from '../loader/Loader';

const Categorypage = () => {
  let Navigate = useNavigate();
  let { categoryname } = useParams();
  let { Allproducts, loading, setloading } = useContext(Mycontext);
  let [filterproduct, setfilterproduct] = useState([]);

  useEffect(() => {
    setloading(true);
    const filteredProducts = Allproducts.filter(product =>
      product.Product.category.toLowerCase().includes(categoryname.toLowerCase())
    );
    setfilterproduct(filteredProducts);
    setloading(false);
  }, [categoryname, Allproducts, setloading]);

  return (
    <div className="min-h-screen p-4">
      {loading && (
        <div className='m-auto'>
          <Loader />
        </div>
      )}
      <h2 className='text-center m-3 p-4 text-4xl font-extrabold '>
        Welcome to {categoryname} category
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filterproduct.length > 0 ? (
          filterproduct.map((item, index) => (
            <div key={index} className="flex flex-col transition-transform transform hover:scale-105 duration-300">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <img
                  onClick={() => Navigate(`/product/${item.Product.ProductID}`)}
                  src={item.Product.url}
                  alt={item.Product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{item.Product.title.slice(0,36)}.........</h2>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${item.Product.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition-transform transform hover:scale-110 duration-300 shadow-lg hover:shadow-xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-lg text-white'>No products found in {categoryname} category.</p>
        )}
      </div>
    </div>
  );
};

export default Categorypage;