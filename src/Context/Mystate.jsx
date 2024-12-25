import React, { useState, useEffect } from 'react'
import Mycontext from './Mycontext'
import { collection, getDocs } from 'firebase/firestore'
import { firedb } from '../Firebase/FirbaseConfig'
function Mystate({ children }) {
  // const name='hnji '
  // let data='kase h '
  const [loading, setloading] = useState(false)
  const [Allproducts, setAllproducts] = useState([])


  const [orderdata, setorderdata] = useState([])
  let [allusers, setusers] = useState([])





  useEffect(() => {
    async function Gettingproducts() {
      try {
        setloading(true)

        let dummyarrayforproducts = []
        const productsCollection = collection(firedb, 'Product')
        const productsSnapshot = await getDocs(productsCollection)
        productsSnapshot.forEach((doc) => {
          dummyarrayforproducts.push({ ...doc.data() })
        });

        setAllproducts(dummyarrayforproducts)
        setloading(false)
      }
      catch (error) {
        console.log(error)
        setloading(false)
      }


    }





    async function getorderdetails(){
      setloading(true)
      let dumparray=[]
      try{

        let ordercollection = collection(firedb, 'orders');
        let orderSnapshot=await getDocs(ordercollection)
        orderSnapshot.forEach((doc) => {
          dumparray.push({...doc.data()})
        });
        setorderdata(dumparray)

        setloading(false) 
      }
      catch(error){
        console.log(error)
        setloading(false)
      }
    }
  //   async function getorderdetails() {
  //     setloading(true); // Set loading state to true
  //     let dummyArray = []; // Array to hold order data
  
  //     try {
  //         let orderCollection = collection(firedb, 'orders');
  //         let orderSnapshot = await getDocs(orderCollection);
          
  //         // Check if the snapshot is empty
  //         if (orderSnapshot.empty) {
  //             console.log('No orders found in the collection.');
  //         } else {
  //             // Loop through each document and push data to the array
  //             orderSnapshot.forEach((doc) => {
  //                 dummyArray.push({ id: doc.id, ...doc.data() }); // Include document ID
  //             });
  //             console.log('Retrieved Orders:', dummyArray); // Log the retrieved orders
  //             setorderdata(dummyArray); // Set the state with all orders
  //         }
  //     } catch (error) {
  //         console.error('Error fetching orders: ', error);
  //     } finally {
  //         setloading(false); // Set loading state to false
  //     }
  // }
 

    async function users() {
      let dumparray = []
      setloading(true)
      let usercollection = collection(firedb, 'users')
      let userSnapshot = await getDocs(usercollection)
      userSnapshot.forEach((doc) => {
        dumparray.push({ ...doc.data() })
      });
      setusers(dumparray)
      setloading(false)

    }
    users()
    Gettingproducts()
    getorderdetails()
    
   
    // console.log('order', orderdata)
  }, []);


  // console.log('data sending to files ',Allproducts)

  return (
    <Mycontext.Provider value={{
      loading, setloading,
      Allproducts, setAllproducts,
      orderdata, setorderdata,
      allusers,

    }}>
      {children}
    </Mycontext.Provider>
  )
}

export default Mystate
