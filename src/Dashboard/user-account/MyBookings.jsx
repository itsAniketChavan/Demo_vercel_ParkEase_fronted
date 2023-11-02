// import React from 'react';
// 
// const MyBookings = () => {
//   const bookings = [
//     { ownerName: 'Multiplex Parkings', areaName: 'Kolhapur', totalHours: '2hr', status: 'Active' },
//     // Add more booking data as needed
//   ];
// 
//   return (
//     <div className="  py-5">
//       <h1 className="text-primaryColor">Your Bookings</h1>
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Owner Name</th>
//             <th className="px-4 py-2">Area Name</th>
//             <th className="px-4 py-2">Total Hours</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2">{booking.ownerName}</td>
//               <td className="border px-4 py-2">{booking.areaName}</td>
//               <td className="border px-4 py-2">{booking.totalHours}</td>
//               <td className={`border px-4 py-2 ${booking.status === 'Active' ? 'text-primaryColor' : ''}`}>{booking.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyBookings;

import React from 'react'

const MyBookings = () => {
  return (
    <div className='px-10 py-5'>
      <h1 className='text-primaryColor'>You did not Book Any Slot Yet..</h1>
    </div>
  )
}

export default MyBookings
