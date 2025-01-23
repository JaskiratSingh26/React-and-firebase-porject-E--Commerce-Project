



// import React, { useContext, useEffect, useState } from 'react';
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useParams } from 'react-router';
// import Mycontext from '../../Context/Mycontext';
// import { doc, getDoc } from 'firebase/firestore';
// import { firedb } from '../../Firebase/FirbaseConfig';
// import Loader from '../loader/Loader';
// import { addtocart } from '../../store/Cartslice';
// import { useDispatch } from 'react-redux';
// import { MdOutlineCurrencyRupee } from "react-icons/md";

// const SingleProduct = () => {
//   let dispatch = useDispatch();
//   let { loading, setloading } = useContext(Mycontext);
//   let id = useParams().id;
//   let [product, setproduct] = useState('');

//   useEffect(() => {
//     async function fetchingdata() {
//       setloading(true);
//       let data = await getDoc(doc(firedb, 'Product', id));
//       setproduct(data.data());
//       setloading(false);
//     }
//     fetchingdata();
//   }, [id, setloading]);

//   return (
//     <div className="min-h-screen flex items-center justify-center  p-4">
//       {loading && (
//         <div className='m-auto'>
//           <Loader />
//         </div>
//       )}
//       {product ? (
//         <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-8">
//           {/* Left Side: Product Image */}
//           <div className="flex-1 w-full transition-transform transform hover:scale-110 duration-300 shadow-2xl rounded-lg overflow-hidden bg-white">
//             <img
//               src={product.Product.url}
//               alt={product.Product.title}
//               className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:rotate-3 duration-300"
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="bg-white rounded-lg shadow-2xl p-6 transition-transform transform hover:scale-105 duration-300 flex-1 w-full lg:w-1/3">
//             <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.Product.title}</h1>
//             <p className="text-lg text-gray-600 mb-4">{product.Product.description}</p>


//             <p className="text-2xl font-semibold text-gray-800 mb-4 
//  ">Price: <span className="text-red-500">
  
//    <div className=' flex items-center' >
//   <MdOutlineCurrencyRupee />{product.Product.price}
  
//  </div>
  
//   </span></p>
//             <Link to={'/Cart'}>
//               <button
//                 onClick={() => dispatch(addtocart(product.Product))}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-110 duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <FaShoppingCart className="h-5 w-5 mr-2" />
//                 Add to Cart
//               </button>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <p className="text-white">Product not found</p>
//       )}
//     </div>
//   );
// };

// export default SingleProduct;












import React, { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from 'react-router';
import Mycontext from '../../Context/Mycontext';
import { doc, getDoc } from 'firebase/firestore';
import { firedb } from '../../Firebase/FirbaseConfig';
import Loader from '../loader/Loader';
import { addtocart } from '../../store/Cartslice';
import { useDispatch } from 'react-redux';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const SingleProduct = () => {
  let dispatch = useDispatch();
  let { loading, setloading } = useContext(Mycontext);
  let id = useParams().id;
  let [product, setproduct] = useState('');

  useEffect(() => {
    async function fetchingdata() {
      setloading(true);
      let data = await getDoc(doc(firedb, 'Product', id));
      setproduct(data.data());
      setloading(false);
    }
    fetchingdata();
  }, [id, setloading]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {loading && (
        <div className='m-auto'>
          <Loader />
        </div>
      )}
      {product ? (
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-8">
          {/* Left Side: Product Image */}
          <div className="flex-1 w-full transition-transform transform hover:scale-110 duration-300 rounded-lg overflow-hidden bg-white md:w-full lg:w-1/2 xl:w-1/2">
            <img
              src={product.Product.url}
              alt={product.Product.title}
              className="w-full h-full object-cover rounded-lg transition-transform transform hover:rotate-3 duration-300"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 w-full md:w-full lg:w-1/2 xl:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.Product.title}</h1>
            <div className="overflow-y-auto max-h-96 md:max-h-48 lg:max-h-64 xl:max-h-80">
              <p className="text-lg text-gray-600 mb-4">{product.Product.description}</p>
            </div>

            <p className="text-2xl font-semibold text-gray-800 mb-4 
 ">Price: <span className="text-red-500">
  
   <div className=' flex items-center' >
  <MdOutlineCurrencyRupee />{product.Product.price}
  
 </div>
  
  </span></p>
            <Link to={'/Cart'}>
              <button
                onClick={() => dispatch(addtocart(product.Product))}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-110 duration-300 shadow-lg hover:shadow-xl"
              >
                <FaShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-white">Product not found</p>
      )}
    </div>
  );
};

export default SingleProduct;