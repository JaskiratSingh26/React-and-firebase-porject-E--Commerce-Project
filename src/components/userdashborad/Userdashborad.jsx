




// import React, { useContext } from 'react';
// import Mycontext from '../../Context/Mycontext';
// import Loader from '../loader/Loader';

// function UserDashboard() {
//   const user = JSON.parse(localStorage.getItem('userData'));
//   const { loading, orderdata } = useContext(Mycontext);
//   console.log('order data user', orderdata);

//   return (
//     <div className='min-h-screen   max-sm:bg-red-300'>
//       <div className="shadow-lg rounded-lg p-6 mb-5">
//         <div className="flex items-center">
//           <img className='rounded-full w-32 h-32 shadow-md mr-4' src="https://tse4.mm.bing.net/th?id=OIP.XfN_dUTzgeHXLeHD9DK0uwHaHa&pid=Api&P=0&h=220" alt="" />
//           <div>
//             <h1 className='font-extrabold text-2xl'>Name: {user?.name}</h1>
//             <h1 className='font-extrabold text-lg 0'>Email: {user?.email}</h1>
//             <h1 className='font-extrabold text-lg 0'> Role :{user?.role}</h1>
//             <h1 className='font-extrabold text-lg 0'> uid : {user?.uid}</h1>
//           </div>
//         </div>
//       </div>

//       <h1 className='text-3xl font-extrabold text-white text-left mb-4'>Order Details</h1>

//       {loading && <Loader />}

//       {!loading && orderdata && orderdata.length > 0 ? (
//         orderdata.map((item, index) => (
//           <div key={index} className='mb-4'>
//             <div className='border m-2 border-black bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105'>
//               <div className='flex'>
//                 <div className='bg-pink-100 w-1/3 p-4 rounded-lg shadow-md'>
//                   <h1 className='font-bold text-xl'>Order ID</h1>
//                   <h2>{item.orderId}</h2>
//                   <h1 className='font-bold text-xl'>Address</h1>
//                   <h2>{item.address.address}</h2>
//                   <h1 className='font-bold text-xl'>Date</h1>
//                   <h2>{item.time.day}/{item.time.month}/{item.time.year}</h2>
//                   <h1 className='font-bold text-xl'>Total Amount</h1>
//                   <h2>₹{item.totalamount}</h2>
//                   <h1 className='font-bold text-xl'>Order Status</h1>
//                   <h2>{item.status}</h2>
//                 </div>
//                 <div className='p-5 font-semibold text-lg w-2/3'>
//                   <h1 className='text-2xl font-bold'>Order Items</h1>
//                   {item.cartitems.map((items, index) => (
//                     <div key={index} className='mt-4 flex items-center'>
//                       <img src={items.url} alt="" className='rounded-xl w-20 h-20 shadow-md' />
//                       <div className='ml-4'>
//                         <h1 className='font-semibold text-xl'>{items.title}</h1>
//                         <h2>Category: {items.category}</h2>
//                         <div className='flex justify-between w-full'>
//                           <h2>Quantity: {items.quantity}</h2>
//                           <h2>Subtotal: ₹{items.quantity * items.price}</h2>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }

// export default UserDashboard;


import React, { useContext } from 'react';
import Mycontext from '../../Context/Mycontext';
import Loader from '../loader/Loader';

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem('userData'));
  const { loading, orderdata } = useContext(Mycontext);
  console.log('order data user', orderdata);

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 '>
      <div className="shadow-lg rounded-lg   p-4 mb-5 max-sm:p-2">
        <div className="flex  mt-5 items-center flex-col max-sm:flex-row">
          <img className='rounded-full w-24 h-24 shadow-md mr-4 max-sm:mr-0' src="https://tse4.mm.bing.net/th?id=OIP.XfN_dUTzgeHXLeHD9DK0uwHaHa&pid=Api&P=0&h=220" alt="" />
          <div className='text-center max-sm:text-left'>
            <h1 className='font-extrabold text-xl max-sm:text-lg'>Name: {user?.name}</h1>
            <h1 className='font-extrabold text-base max-sm:text-sm'>Email: {user?.email}</h1>
            <h1 className='font-extrabold text-base max-sm:text-sm'>Role: {user?.role}</h1>
            <h1 className='font-extrabold text-base max-sm:text-sm'>UID: {user?.uid}</h1>
          </div>
        </div>
      </div>

      <h1 className='text-2xl font-extrabold text-white text-left mb-4 max-sm:text-xl'>Order Details</h1>

      {loading && <Loader />}

      {!loading && orderdata && orderdata.length > 0 ? (
        orderdata.map((item, index) => (
          <div key={index} className='mb-4'>
            <div className='border  border-black bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105'>
              <div className='flex flex-col max-sm:flex-row'>
                <div className='bg-pink-100 w-full max-sm:w-1/3 p-2 rounded-lg shadow-md'>
                  <h1 className='font-bold text-lg max-sm:text-base'>Order ID</h1>
                  <h2 className='text-sm'>{item.orderId}</h2>
                  <h1 className='font-bold text-lg max-sm:text-base'>Address</h1>
                  <h2 className='text-sm'>{item.address.address}</h2>
                  <h1 className='font-bold text-lg max-sm:text-base'>Date</h1>
                  <h2 className='text-sm'>{item.time.day}/{item.time.month}/{item.time.year}</h2>
                  <h1 className='font-bold text-lg max-sm:text-base'>Total Amount</h1>
                  <h2 className='text-sm'>₹{item.totalamount}</h2>
                  <h1 className='font-bold text-lg max-sm:text-base'>Order Status</h1>
                  <h2 className='text-sm'>{item.status}</h2>
                </div>
                <div className='p-5 font-semibold text-lg w-full max-sm:w-2/3'>
                  <h1 className='text-xl font-bold max-sm:text-lg'>Order Items</h1>
                  {item.cartitems.map((items, index) => (
                    <div key={index} className='mt-4 flex items-center'>
                      <img src={items.url} alt="" className='rounded-xl w-16 h-16 shadow-md' />
                      <div className='ml-4'>
                        <h1 className='font-semibold text-lg max-sm:text-base'>{items.title}</h1>
                        <h2 className='text-sm'>Category: {items.category}</h2>
                        <div className='flex justify-between w-full'>
                          <h2 className='text-sm'>Quantity: {items.quantity}</h2>
                          <h2 className='text-sm'>Subtotal: ₹{items.quantity * items.price}</h2>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default UserDashboard;