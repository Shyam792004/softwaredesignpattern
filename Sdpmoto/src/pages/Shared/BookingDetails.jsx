import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    date,
    carModel,
    question1,
    question3,
    question4,
    laborCharge,
    toolCharge,
    totalAmount
  } = location.state || {}; 

  const handleConfirmBooking = () => {
    alert('Booking confirmed!');
    navigate('/'); 
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl mb-12 text-black dark:text-white">Booking Details</h1>
      <div className="space-y-6">
        <p><strong>Date:</strong> {new Date(date).toDateString()}</p>
        <p><strong>Car Model:</strong> {carModel}</p>
        <p><strong>Issue Type:</strong> {question1}</p>
        <p><strong>Preferred Time:</strong> {question3}</p>
        <p><strong>Additional Notes:</strong> {question4}</p>
        <p><strong>Labor Charge:</strong> ${laborCharge}</p>
        <p><strong>Tool Charge:</strong> ${toolCharge}</p>
        <p><strong>Total Amount:</strong> ${totalAmount}</p>
      </div>
      <button
        type="button"
        onClick={handleConfirmBooking}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 mt-6"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingDetails;
