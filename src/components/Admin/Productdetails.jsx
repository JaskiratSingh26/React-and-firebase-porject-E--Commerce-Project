// import React, { useContext } from 'react'
// import { Link } from 'react-router'
// import Mycontext from '../../Context/Mycontext'
// import { deleteDoc, doc } from 'firebase/firestore'
// import { firedb } from '../../Firebase/FirbaseConfig'
// import { useNavigate } from 'react-router'
// function Productdetails() {
//  let{ Allproducts}= useContext(Mycontext)
//  console.log('yeysyeeyye',Allproducts)
// let navigate=useNavigate()

//  async function deletproduct(id){

//   try {

//     const reference = doc(firedb, 'Product', id)
//     await deleteDoc(reference)
//     alert('Product deleted successfully')
  


    
//   } catch (error) {
//     console.log('while deleting data', error)
//   }
//  }
//   return (
//     <div>

//         <div className=' flex justify-between items-center'>
//          <h2 className='font-extrabold text-[2vh] p-4  '>All Products</h2> 
//          <Link  to={'/Addproduct'}>
//          <button  className='p-2 bg-pink-300 border border-black m-9  hover:bg-pink-100'>Add products</button>
//          </Link>
            
//         </div>
      


// <div className='w-full'>

// {/* table */}

// <table className='w-full text-left border  border-black '>
//     <tr>
//         <th    className='border-r border-black'>Sno.</th>
//         <th    className='border-r border-black'> Image</th>
//         <th    className='border-r border-black'>Product id</th>
//         <th    className='border-r border-black'>Title</th>
//         <th    className='border-r border-black'>Price</th>
//         <th    className='border-r border-b border-black'>Category</th>
//         <th    className='border-r border-b border-black'>Action</th>
//         <th    className='border-r  border-b border-black'>Action</th>
        
//     </tr>
//     {
//       Allproducts.map((product,index)=>{
//         console.log('Product inside maping:', product.Product);
//         return(
//         <tr key={index}>
//  <td   className='border-r border-t border-b  border-black'>{index+1}</td>
//         <td     className='border-r border-t border-b  border-black'>
//           <img src={product.Product.url} alt="product" width='100' height='100' />
//         </td>
//         {/* <td     className='  border-r border-t border-b   border-black'>{product.title}</td> */}
//         <td className='border-r border-t border-b border-black'>{product.Product.ProductID}</td>
//         <td className='border-r border-t border-b border-black'>{product.Product.title}</td>
//         <td     className='border-r border-t border-b   border-black'>{product.Product.price}</td>
//         <td     className='border-r border-t border-b   border-black'>{product.Product.category}</td>
//         <td     className='border-r border-t border-b   border-black'>
//     <Link to={`/Updateproductdetials/${product.Product.ProductID}`}>
//         <span className='underline p-2 text-pink-800 hover:text-black  text-[2vh]'>Edit</span>
//         </Link>

//         </td>
//         <td     className='border-r border-t border-b   border-black'>

//         <span className='underline p-2 text-pink-800  hover:text-black cursor-pointer text-[2vh]'  onClick={(e)=>{
//         deletproduct(product.Product.ProductID)

//         }} >Delete</span>
//         </td>
    

//         </tr>
//         )
        
// })
//     }
  
// </table>


// </div>


//     </div>
//   )
// }

// export default Productdetails



import React, { useContext } from 'react';
import { Link } from 'react-router';
import Mycontext from '../../Context/Mycontext';
import { deleteDoc, doc } from 'firebase/firestore';
import { firedb } from '../../Firebase/FirbaseConfig';
import { useNavigate } from 'react-router';

function Productdetails() {
  let { Allproducts } = useContext(Mycontext);
  let navigate = useNavigate();

  async function deletproduct(id) {
    try {
      const reference = doc(firedb, 'Product', id);
      await deleteDoc(reference);
      alert('Product deleted successfully');
    } catch (error) {
      console.log('while deleting data', error);
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">All Products</h2>
        <Link to={'/Addproduct'}>
          <button className="p-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-400 transition duration-300">
            Add Product
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sno.</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Product ID</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Edit</th>
              <th className="py-3 px-6 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {Allproducts.map((product, index) => {
              return (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
                  <td className="py-3 px-6 text-left">{index + 1}</td>
                  <td className="py-3 px-6 text-left">
                    <img src={product.Product.url} alt="product" className="w-24 h-24 object-cover rounded" />
                  </td>
                  <td className="py-3 px-6 text-left">{product.Product.ProductID}</td>
                  <td className="py-3 px-6 text-left">{product.Product.title}</td>
                  <td className="py-3 px-6 text-left">${product.Product.price}</td>
                  <td className="py-3 px-6 text-left">{product.Product.category}</td>
                  <td className="py-3 px-6 text-left">
                    <Link to={`/Updateproductdetials/${product.Product.ProductID}`}>
                      <span className="text-blue-500 hover:text-blue-700 underline cursor-pointer">Edit</span>
                    </Link>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className="text-red-500 hover:text-red-700 underline cursor-pointer"
                      onClick={() => {
                        deletproduct(product.Product.ProductID);
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productdetails;