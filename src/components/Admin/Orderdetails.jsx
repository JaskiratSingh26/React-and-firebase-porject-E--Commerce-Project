// import React, { useContext, useState } from 'react'
// import Mycontext from '../../Context/Mycontext'
// import Loader from '../loader/Loader'
// import { firedb } from '../../Firebase/FirbaseConfig'
// import { deleteDoc, doc } from 'firebase/firestore'
// import { useNavigate } from 'react-router'
// import Changingorderstatus from './changingorderstatus'

// function Orderdetails() {
//   let { orderdata, loading } = useContext(Mycontext)

//   console.log('order ddata on admin panel', orderdata)
//   let Navigate=useNavigate()

//   async function deleteingorder(id) {
// try {
  
// const reference=doc(firedb,'orders',id)
// await deleteDoc(reference)

// alert('order deleted successfully')

// } catch (error) {
//   console.log('deleteing order error ',error)
// }

//   }


//     const [isBuyNowOpen, setIsBuyNowOpen] = useState(false); 
  
//   // async function changingorderstatus(id){
//   //   // console.log('changing order status',id)
//   //   try {
//   //     let reference=doc(firedb,'orders',id)
      
      
//   //   } catch (error) {
//   //     console.log('error changing order status',error)
      
//   //   }

//   // }
//   return (

//     <div>

//       <h2 className='  font-extrabold p-4 text-[2vh]'>All Orders</h2>





//       <div className='    overflow-auto '>

//         {/* table */}

//         <table className='  w-full  text-left border  border-black '>
//           <tr className=' ' >
//             <th className='border-r  overflow-auto border-b   border-black border-bzlack'>Sno.</th>

//             <th className='border-r   h-[7vh] border-b   flex  items-center min-w-[12vh] border-black text-sm'>prdouct img</th>
//             <th className='border-r  overflow-auto border-b  border-black'>title</th>
//             <th className='border-r overflow-auto border-b  border-black  '>Category</th>
//             <th className='border-r overflow-auto  border-b  border-black'>Price</th>
//             <th className='border-r  overflow-auto border-b  border-black'>Quannity</th>
//             <th className='border-r overflow-auto  border-b  border-black'>total price </th>
//             <th className='border-r  overflow-auto border-b  border-black'>status </th>
//             <th className='border-r overflow-auto   border-b  border-black'>Name  </th>
//             <th className='border-r  overflow-auto border-b   flex min-w-[12vh] h-[7vh] border-black items-center'>addrees </th>
//             <th className='border-r overflow-auto  border-b  border-black'>pincode  </th>
//             <th className='border-r overflow-auto  border-b  border-black'>ph.number  </th>
//             <th className='border-r  overflow-auto  border-b  border-black'>orderID</th>
//             <th>Action</th>
//           </tr>

//           {!loading && orderdata.length > 0 && orderdata ? (

//             orderdata.map((item, index) => {
//               return (
//                 <>
//                   <tr key={index} className='' >

//                     <td className=' border-b '>{index + 1}</td>
//                     <td>

//                       {item.cartitems.map((cartvalues) => {

//                         return (

//                           <>
//                             <td className='  flex flex-col '>
//                               <img src={cartvalues.url} alt="product" width='40' height='100' className='' />
//                             </td>



//                           </>
//                         )
//                       })}


//                     </td>

//                     <td>
//                       {item.cartitems.map((cartvalues) => {

//                         return (

//                           <>
//                             <td className='  text-sm  flex  h-[4vh]  w-[37vh] '>
//                               <span className=' mt-2'>
//                               {cartvalues.title}

//                               </span>
//                             </td>



//                           </>
//                         )
//                       })}
//                     </td>


//                     <td>
//                       {item.cartitems.map((cartvalues) => {

//                         return (

//                           <>
//                             <td className='  flex  flex-col h-[4vh]  '>
//                               <span className='mt-2'>

//                               {cartvalues.category}
//                               </span>
//                             </td>



//                           </>
//                         )
//                       })}
//                     </td>


//                     <td>
//                       {item.cartitems.map((cartvalues) => {

//                         return (

//                           <>
//                             <td className='   flex  flex-col h-[4vh]  '>
//                               <span className=' mt-2'>

//                               {cartvalues.price}
//                               </span>
//                             </td>



//                           </>
//                         )
//                       })}
//                     </td>
//                     <td>
//                       {item.cartitems.map((cartvalues) => {

//                         return (

//                           <>
//                             <td className='   flex  flex-col h-[4vh]  '>
//                               <span  className=' mt-2'>

//                               {cartvalues.quantity}
//                               </span>
//                             </td>



//                           </>
//                         )
//                       })}
//                     </td>

//                     <td className='  '>{item.totalamount}</td>
//                     <td className='  text-green-300   cursor-pointer ' onClick={()=>{
//                       // changingorderstatus(item.orderId)
//                       // Navigate(`/chanegingstatus/${item.orderId}`)
//                       setIsBuyNowOpen(true)
//                     }} >
//                       <span className='mt-2'>

//                         {
//                           item.status}
//                           </span>
//                         </td>



//                     <td className=' text-sm    flex   items-center  w-[10vh]  mt-2 m-1 '>{item.address.name}</td>
//                     <td className='text-sm m-1 mt-2    '>{item.address.address}</td>
//                     <td className=' '>{item.address.pincode}</td>
//                     <td className='  '>{item.address.mobileNumber}</td>
//                     <td className=' text-sm    flex   items-center  w-[30vh]  mt-2 m-1 '>{item.orderId}</td>


//                     <td onClick={() => {
//                       deleteingorder(item.orderId)
//                     }}
//                       className='   text-green-300 cursor-pointer '>Delete</td>

//                   </tr>

//                 </>
//               )
//             })
//           ) : <Loader />

//           }

//         </table>

        
//         <div className='flex justify-center items-center '>
//     <div className='absolute'>
//         {isBuyNowOpen &&  <Changingorderstatus/>}
//     </div>
// </div>

//       </div>


//     </div>
//   )
// }

// export default Orderdetails






import React, { useContext, useState } from 'react';
import Mycontext from '../../Context/Mycontext';
import Loader from '../loader/Loader';
import { firedb } from '../../Firebase/FirbaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import Changingorderstatus from './changingorderstatus';

function Orderdetails() {
  let { orderdata, loading } = useContext(Mycontext);
  let Navigate = useNavigate();

  async function deleteingorder(id) {
    try {
      const reference = doc(firedb, 'orders', id);
      await deleteDoc(reference);
      alert('Order deleted successfully');
    } catch (error) {
      console.log('Deleting order error ', error);
    }
  }

  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);

  return (
    <div className="p-4">
      <h2 className="font-extrabold text-2xl mb-4">All Orders</h2>
      <div className="overflow-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">Sno.</th>
              <th className="border border-gray-300 p-2">Product Img</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Total Price</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Address</th>
              <th className="border border-gray-300 p-2">Pincode</th>
              <th className="border border-gray-300 p-2">Phone Number</th>
              <th className="border border-gray-300 p-2">Order ID</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {!loading && orderdata.length > 0 ? (
              orderdata.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">
                    {item.cartitems.map((cartvalues) => (
                      <img key={cartvalues.id} src={cartvalues.url} alt="product" width="40" height="100" className="block" />
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.cartitems.map((cartvalues) => (
                      <span key={cartvalues.id} className="block">{cartvalues.title}</span>
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.cartitems.map((cartvalues) => (
                      <span key={cartvalues.id} className="block">{cartvalues.category}</span>
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.cartitems.map((cartvalues) => (
                      <span key={cartvalues.id} className="block">{cartvalues.price}</span>
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.cartitems.map((cartvalues) => (
                      <span key={cartvalues.id} className="block">{cartvalues.quantity}</span>
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2">{item.totalamount}</td>
                  <td className="border border-gray-300 p-2 text-green-500 cursor-pointer" onClick={() => {
                    setIsBuyNowOpen(true);
                  }}>
                    {item.status}
                  </td>
                  <td className="border border-gray-300 p-2">{item.address.name}</td>
                  <td className="border border-gray-300 p-2">{item.address.address}</td>
                  <td/>
                  <td className="border border-gray-300 p-2">{item.address.pincode}</td>
                  <td className="border border-gray-300 p-2">{item.address.mobileNumber}</td>
                  <td className="border border-gray-300 p-2">{item.orderId}</td>
                  <td className="border border-gray-300 p-2 text-red-500 cursor-pointer" onClick={() => {
                    deleteingorder(item.orderId);
                  }}>
                    Delete
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="text-center p-4"><Loader /></td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex justify-center items-center">
          {isBuyNowOpen && <Changingorderstatus />}
        </div>
      </div>
    </div>
  );
}

export default Orderdetails;