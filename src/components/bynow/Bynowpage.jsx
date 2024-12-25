import { Button, Input } from '@material-tailwind/react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { firedb } from '../../Firebase/FirbaseConfig'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid';

function Bynowpage({ setIsBuyNowOpen, total }) {
    const cartitems = JSON.parse(localStorage.getItem('cart'))
    const user = JSON.parse(localStorage.getItem('userData'))
    console.log('users', user, 'items', cartitems)


    let Navigate = useNavigate()
    let [address, setaddress] = useState({
        name: '',
        address: '',
        pincode: '',
        mobileNumber: ''

    })



    async function clickOnBuyitems() {
        const orderId = uuidv4();
        let orderinfo = ({
            orderId,
            cartitems,
            address,
            email: user.email,
            name: user.name,
            totalamount: total,
            time: {
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),


            },

            status: 'confirmed',
        })


        try {
            // const orderdetails = collection(firedb, 'orders', orderId)
            // await addDoc(orderdetails, orderinfo)
            const orderRef = doc(firedb, 'orders', orderId)
            await setDoc(orderRef, orderinfo);
            // await setDoc(doc(firedb,'orders',orderId), orderinfo)
            setaddress({
                name: '',
                address: '',
                pincode: '',
                mobileNumber: ''
            })
            alert('Order placed successfully')
        } catch (error) {

            console.log('form buy now page ', error)
        }
        console.log(orderinfo)

        console.log(orderId,'ordr id')
    }

    return (
        <div>
            <div className=" flex  justify-center bg-gray-50">
                <div className="w-full max-w-md p-6 bg-pink-50/80 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            value={address.name}
                            onChange={(e) => {
                                setaddress({ ...address, name: e.target.value })
                            }}
                            className="w-full px-4 py-2 border border-pink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <input
                            type="text"
                            name="address"
                            required
                            placeholder="Enter your address"
                            value={address.address}
                            onChange={(e) => {
                                setaddress({ ...address, address: e.target.value })
                            }}
                            className="w-full px-4 py-2 border border-pink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <input
                            type="text"
                            name="pincode"
                            required
                            placeholder="Enter your pincode"
                            value={address.pincode}
                            onChange={(e) => {
                                setaddress({ ...address, pincode: e.target.value })
                            }}
                            className="w-full px-4 py-2 border border-pink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <input
                            type="tel"

                            required
                            name="mobileNumber"
                            placeholder="Enter your mobile number"
                            value={address.mobileNumber}
                            onChange={(e) => {
                                setaddress({ ...address, mobileNumber: e.target.value })
                            }}
                            className="w-full px-4 py-2 border border-pink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                            onClick={(e) => {
                                e.preventDefault()
                                clickOnBuyitems()

                                Navigate('/Cart/userdashborad')


                            }}
                        >
                            BUY NOW
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Bynowpage
