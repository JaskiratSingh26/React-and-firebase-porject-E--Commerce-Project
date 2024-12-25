import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { useParams } from 'react-router'
import { firedb } from '../../Firebase/FirbaseConfig'
import { useNavigate } from 'react-router'

function Changingorderstatus() {
    let navigate = useNavigate()
    let id = useParams().id
    console.log('user order status  id ', id)
    const [currentStatus, setCurrentStatus] = useState('');
    const [newstatus, setsewstatus] = useState('');


    useEffect(() => {
        async function fetchingorderstatus(id) {
            try {
                let docRef = doc(firedb, 'orders', id);
                let docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCurrentStatus(docSnap.data().status);
                    console.log(currentStatus,'phle vla ') // Assuming 'status' is the field name
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.log('Error fetching order status', error);
            }
        }
        fetchingorderstatus(id);
    }, [id]);

    async function handechangestauts() {
        try {

            let docRef = doc(firedb, 'orders', id);


            await updateDoc(docRef, {
                status: newstatus
            })
            console.log(newstatus)
            setCurrentStatus(newstatus);
            alert('status updated')
        } catch (error) {
            console.log('error fetching order status', error)
        }
    }

    return (
        <div className='min-h-screen'>

            <h1>Changing Order Status</h1>


            <div className='flex  flex-col bg-slate-600 m-auto items-center justify-center' >

                <h1>order status </h1>

                <select required name="" id="" value={newstatus}
                onChange={(e) => setsewstatus(e.target.value)}  >

                    <option value="" disabled>{currentStatus}</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="In process">In process</option>
                    <option value="Delivered">Delivered</option>


                </select>




                <button onClick={() => {
                    handechangestauts()
                        navigate('/Admindashboard')
                }} > Change Status</button>
            </div>


        </div>
    )
}

export default Changingorderstatus
