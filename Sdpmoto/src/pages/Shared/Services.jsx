import React from 'react';
import { InputDemo } from '@/components/demo/InputDemo';
import Particles from '@/components/magicui/particles';
import { FaCar, FaWater, FaOilCan } from 'react-icons/fa'; // Use available icons
import { MdTireRepair } from 'react-icons/md'; // Example alternative icon for tire services

const services = [
  {
    title: 'Car Repair',
    description: 'Professional car repair services for all makes and models.',
    icon: <FaCar size={40} className="text-black" />, // Updated to black
  },
  {
    title: 'Water Services',
    description: 'Comprehensive water services for your vehicle.',
    icon: <FaWater size={40} className="text-black" />, // Updated to black
  },
  {
    title: 'Oil Change',
    description: 'Quick and efficient oil change services.',
    icon: <FaOilCan size={40} className="text-black" />, // Updated to black
  },
  {
    title: 'Tire Services',
    description: 'Complete tire services including rotation and replacement.',
    icon: <MdTireRepair size={40} className="text-black" />, // Updated to black
  },
  {
    title: 'Engine Services',
    description: 'Complete tire services including rotation and replacement.',
    icon: <MdTireRepair size={40} className="text-black" />, // Updated to black
  },
];

const Services = () => (
  <div className="relative w-full h-screen overflow-hidden">
    <Particles className="absolute inset-0 z-0" />

    <div className="relative z-10 p-8">
      <h1 className="text-4xl mb-12 text-black dark:text-white">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 w-full max-w-md flex flex-col items-center"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">{service.title}</h2>
            <p className="text-black dark:text-gray-300 text-center mb-4">{service.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Book Now
            </button>
          </div>
        ))}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
          <InputDemo />
        </div>
      </div>
    </div>
  </div>
);

export default Services;
