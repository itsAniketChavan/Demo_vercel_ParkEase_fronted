import {useState} from "react";
import { toast } from "react-toastify";

const SidePanel = () => {
  const handleBookAppointment = () => {
    // Simulate booking
    // You can perform actual booking logic here

    // Display a toast message
    toast.success("Your slot is booked", {
      position: "top-center", // You can customize the position
      autoClose: 2000, // The message will auto-close after 3 seconds
    });
  };
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] text-headingColor font-bold">
          500Rs
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots
        </p>

        <ul className="mt-3">
        <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Vehicle Type :
            </p>

            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Four wheeler
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              sunday
            </p>

            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 AM - 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Tuesday
            </p>

            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 AM - 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-bold">
              Status : 
            </p>

            <p className="text-[15px] leading-6 text-signalColor font-semibold">
              Available
            </p>
          </li>
        </ul>
      </div>

        {/* <button className="btn px-2 w-full rounded-md">Book Appoitment</button> */}
        <button
        className="btn px-2 w-full rounded-md"
        onClick={handleBookAppointment}
      >
        Book Appointment
      </button>

      
    </div>
  );
};

export default SidePanel;
