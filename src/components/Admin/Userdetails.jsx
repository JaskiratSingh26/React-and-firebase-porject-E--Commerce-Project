// import React, { useContext } from 'react'
// import Mycontext from '../../Context/Mycontext'
// import Loader from '../loader/Loader'

// function Userdatils() {
//   let { allusers, loading } = useContext(Mycontext)
//   console.log(allusers, 'users')
//   return (
//     <div>

//       <h2 className='font-extrabold text-[2vh] p-4  '>All Users</h2>





//       <div className='w-ful overflow-auto'>

//         {/* table */}

//         <table className='w-full text-left border  border-black '>
//           <tr>
//             <th className='border-r border-black'>Sno.</th>
//             <th className='border-r border-black'> Name</th>
//             <th className='border-r border-black'>Email</th>
//             <th className='border-r border-black'>Role </th>
//             <th className='border-r border-black'>userId </th>

//           </tr>
//           {loading && <Loader />}

//           {
//             allusers.map((user, index) => (
//               <tr key={index}>
//                 <td className='border-r border-t border-b  border-black'>{index + 1}</td>
//                 <td className='border-r   border-t border-b  border-black'>{user.name}</td>
//                 <td className='border-r   border-t border-b   border-black'>{user.email}


//                 </td>
                   
//                 <td className={`border-r border-t border-b border-black ${user.role === 'admin' ? 'text-green-500' : 'text-black'}`}>
//                   {user.role}
//                 </td>



//                 <td className='border-r   border-t border-b   border-black'>{user.uid}</td>

//               </tr>
//             ))
//           }
        

//         </table>


//       </div>


//     </div>
//   )
// }

// export default Userdatils




import React, { useContext } from 'react';
import Mycontext from '../../Context/Mycontext';
import Loader from '../loader/Loader';

function Userdatils() {
  let { allusers, loading } = useContext(Mycontext);
  console.log(allusers, 'users');

  // Inline CSS styles
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    tableContainer: {
      overflowX: 'auto',
    },
    userTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
    },
    th: {
      padding: '12px',
      border: '1px solid #ddd',
      textAlign: 'left',
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    td: {
      padding: '12px',
      border: '1px solid #ddd',
      textAlign: 'left',
    },
    userRow: {
      cursor: 'pointer',
    },
    adminRole: {
      color: '#4CAF50', // Green for admin
    },
    userRole: {
      color: '#333', // Default color for users
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>All Users</h2>

      <div style={styles.tableContainer}>
        <table style={styles.userTable}>
          <thead>
            <tr>
              <th style={styles.th}>Sno.</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>User  ID</th>
            </tr>
          </thead>
          <tbody>
            {loading && <Loader />}
            {
              allusers.map((user, index) => (
                <tr key={index} style={styles.userRow} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={{ ...styles.td, ...(user.role === 'admin' ? styles.adminRole : styles.userRole) }}>
                    {user.role}
                  </td>
                  <td style={styles.td}>{user.uid}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Userdatils;