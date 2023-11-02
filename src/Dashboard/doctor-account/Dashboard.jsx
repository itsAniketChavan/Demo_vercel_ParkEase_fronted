// import React from 'react'
// 
// const Dashboard = () => {
//   return (
//     <div className="px-1 py-20 pl-20">
//         <h1 className="text-2xl text-primaryColor">Admin Dashboard - Bookings</h1>
//         <h1 className='py-5'>Not Any Slots are Booked...</h1>
//     </div>
//   )
// }
// 
// export default Dashboard

import React from 'react';

const MyBookings = () => {
  const bookings = [
    { ownerName: 'John Sen', VehicleType: 'Four Wheeler', totalHours: '2hr', status: 'Active', paymentStatus : 'Done'},
    // Add more booking data as needed
  ];

  return (
    <div className="px-1 py-20 pl-20">
      <h1 className="text-2xl text-primaryColor">Admin Dashboard - Bookings</h1>
      <table className="table-auto " >
        <thead>
          <tr>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Vehicle Type</th>
            <th className="px-4 py-2">Total Hours</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{booking.ownerName}</td>
              <td className="border px-4 py-2">{booking.VehicleType}</td>
              <td className="border px-4 py-2">{booking.totalHours}</td>
              <td className="border px-4 py-2">{booking.status}</td>
              
              <td className="border px-4 py-2 text-signalColor">{booking.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;

