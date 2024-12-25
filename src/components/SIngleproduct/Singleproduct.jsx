// import React, { useContext, useEffect, useState } from 'react';
// // import { useLocation } from 'react-router-dom';
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useParams } from 'react-router';
// import Mycontext from '../../Context/Mycontext';
// import { doc, getDoc } from 'firebase/firestore';
// import { firedb } from '../../Firebase/FirbaseConfig';
// import Loader from '../loader/Loader';
// import Mystate from '../../Context/Mystate';
// import { addtocart } from '../../store/Cartslice'
// import { deletetocart } from '../../store/Cartslice'
// import { useDispatch, useSelector } from 'react-redux';



// const SingleProduct = () => {

//   // const cartItems = useSelector(state => state.cart.items);

//   let dispatch = useDispatch()
//   let { Allproducts, loading, setloading } = useContext(Mycontext)
//   let id = useParams().id
//   let [product, setproduct] = useState('')

//   useEffect(() => {
//     async function fetchingdata() {

//       setloading(true)
//       let data = await getDoc(doc(firedb, 'Product', id))

//       setproduct(data.data())


//       setloading(false)

//     }

//     fetchingdata()

//   }, []);
//   console.log(product, 'single vlaaa file')

//   // // useEffect(() => {
//   // //   localStorage.setItem('cart', JSON.stringify(cartItems))
//   // // }, [cartItems])
//   // console.log(cartItems, 'cartitems')

//   return (
//     <div className=" min-h-screen container mx-auto p-4 flex flex-col md:flex-row items-center">
//       {
//         loading &&

//         <div className=' m-auto'>
//           <Loader />

//         </div>
//       }
//       {product ? (
//         <>
//           {/* Left Side: Product Image */}
//           <div className="flex-1">
//             <img
//               src={product.Product.url}
//               alt={product.Product.title}
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="flex-1 p-4">
//             <h1 className="text-3xl font-bold mb-2">{product.Product.title}</h1>
//             <p className="text-lg text-gray-700 mb-4">{product.Product.description}</p>
//             <p className="text-xl font-semibold mb-4">Price: ${product.Product.price}</p>
//             <Link to={'/Cart'}>

             
//                 <button
//                   onClick={() => dispatch(addtocart(product.Product))}

//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
//                   <FaShoppingCart className="h-5 w-5 mr-2" />
//                   Add to Cart
//                 </button>
              




              

//             </Link>
//           </div>
//         </>
//       ) : (
//         <p>Product not found</p>
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
    <div className="min-h-screen flex items-center justify-center  p-4">
      {loading && (
        <div className='m-auto'>
          <Loader />
        </div>
      )}
      {product ? (
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-8">
          {/* Left Side: Product Image */}
          <div className="flex-1 w-full transition-transform transform hover:scale-110 duration-300 shadow-2xl rounded-lg overflow-hidden bg-white">
            <img
              src={product.Product.url}
              alt={product.Product.title}
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:rotate-3 duration-300"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="bg-white rounded-lg shadow-2xl p-6 transition-transform transform hover:scale-105 duration-300 flex-1 w-full lg:w-1/3">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.Product.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.Product.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">Price: <span className="text-red-500">${product.Product.price}</span></p>
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