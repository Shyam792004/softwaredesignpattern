import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const carModels = [
  'Toyota Camry',
  'Honda Accord',
  'Ford Mustang',
  'Chevrolet Camaro',
  'BMW 3 Series',
  'Audi A4',
  'Mercedes-Benz C-Class',
  // Add more car models as needed
];

const Booking = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: new Date(),
    carModel: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleViewDetails = () => {
    const laborCharge = 50;
    const toolCharge = 20;
    const totalAmount = laborCharge + toolCharge;

    navigate('/booking-details', {
      state: {
        ...formData,
        laborCharge,
        toolCharge,
        totalAmount,
      },
    });
  };

  const renderForm = () => {
    return (
      <>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Select Date:
            <Calendar
              onChange={handleDateChange}
              value={formData.date}
              className="mt-2 border rounded shadow-sm"
            />
          </label>
          <label className="block text-lg font-semibold mb-2">
            Car Model:
            <select name="carModel" value={formData.carModel} onChange={handleChange} className="block w-full mt-2 p-3 border rounded shadow-sm">
              <option value="">Select</option>
              {carModels.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </label>
          <label className="block text-lg font-semibold mb-2">
            Issue Type:
            <select name="question1" value={formData.question1} onChange={handleChange} className="block w-full mt-2 p-3 border rounded shadow-sm">
              <option value="">Select</option>
              <option value="engine">Engine</option>
              <option value="transmission">Transmission</option>
              <option value="brakes">Brakes</option>
            </select>
          </label>
          <label className="block text-lg font-semibold mb-2">
            Preferred Time:
            <select name="question3" value={formData.question3} onChange={handleChange} className="block w-full mt-2 p-3 border rounded shadow-sm">
              <option value="">Select</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </label>
          <label className="block text-lg font-semibold mb-2">
            Additional Notes:
            <select name="question4" value={formData.question4} onChange={handleChange} className="block w-full mt-2 p-3 border rounded shadow-sm">
              <option value="">Select</option>
              <option value="urgent">Urgent</option>
              <option value="non-urgent">Non-Urgent</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          onClick={handleViewDetails}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          View Details
        </button>
      </>
    );
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold mb-12 text-black dark:text-white">
        Booking for {service.replace('-', ' ')}
      </h1>
      <form className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg space-y-6">
        {renderForm()}
      </form>
    </div>
  );
};

export default Booking;
