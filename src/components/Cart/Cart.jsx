import Mycontext from '../../Context/Mycontext';


import React, { useContext, useEffect } from 'react';

import  { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';
import { removetocart } from '../../store/Cartslice';
import { useDispatch } from 'react-redux';
import { incrementtocart } from '../../store/Cartslice';
import { decrementtocart } from '../../store/Cartslice';
import Bynowpage from '../bynow/Bynowpage';

import { useNavigate } from 'react-router';
const Cart = () => {
  let Navigate=useNavigate()

  const dispatch = useDispatch();
    const cartitems = useSelector(state => state.cart.items);
     useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartitems))
  }, [cartitems])

  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false); 



  const subtotal = cartitems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  if (cartitems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven't added any items yet.</p>
          <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" 
            onClick={()=>{
              Navigate('/')
            }}/>

            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50   sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mt-4 text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                {cartitems.map((item) => (
                  <div key={item.id} className="flex py-6 border-b last:border-0">
                    <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={item.url}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg max-sm:text-base font-medium text-gray-900">{item.title}</h3>
                          <p className="mt-1 text-sm max-sm:text-base  text-gray-500">Color: {item.color}</p>
                          <p className="mt-1 text-sm max-sm:text-base text-gray-500">Size: {item.size}</p>
                        </div>
                        <p className="text-lg max-sm:text-base font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex max-sm:text-base items-center border rounded-md">
                          <button
                           
                           onClick={()=>{
                            dispatch(decrementtocart(item))
                           }}
                            className=" max-sm:text-base text-gray-600 hover:text-gray-800 disabled:opacity-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 text-gray-900">{item.quantity}</span>
                          <button
                            // onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            onClick={()=>{
                              dispatch(incrementtocart(item))
                            }}
                            className="px-2 py-1 text-gray-600 hover:text-gray-800"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                        //   onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 flex items-center"
                         onClick={()=>{
                          dispatch(removetocart(item))
                         }}

                          
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </button>
            </div>
          </div>


          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">{subtotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">{shipping}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">{tax}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">{total}</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={()=>{
                
                setIsBuyNowOpen(true)
              }} >
                Proceed to Checkout
              </button>
              

              <div className="mt-4 text-sm text-gray-500">
                <p>Free shipping on orders over $100</p>
                <p className="mt-1">Tax calculated at checkout</p>
                <p className="mt-1">Cash on delivery </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='absolute top-[30vh]  ml-[30vh]' >
        {
           
             isBuyNowOpen && (
             <Bynowpage 
              />)
        }
      </div> */}

<div className='flex justify-center items-center '>
    <div className='absolute'>
        {isBuyNowOpen && <Bynowpage  total={total} />}
    </div>
</div>
     
    </div>
  );
};

export default Cart;





// import React from 'react'
// import { useSelector } from 'react-redux';

// function Cart() {

  
//   const cartItems = useSelector(state => state.cart.items);
//   console.log(cartItems,'items');
//   return (
//     <div>
// cartitems
//     </div>
//   )
// }

// export default Cart
