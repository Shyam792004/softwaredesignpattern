import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaWater, FaOilCan, FaBatteryFull } from 'react-icons/fa';
import { MdTireRepair, MdOutlineAir } from 'react-icons/md';
import { GiCarDoor, GiCarWheel } from 'react-icons/gi';

const services = [
  {
    title: 'Car Repair',
    description: 'Professional car repair services for all makes and models.',
    icon: <FaCar size={40} className="text-black" />,
    path: 'car-repair',
  },
  {
    title: 'Water Services',
    description: 'Comprehensive water services for your vehicle.',
    icon: <FaWater size={40} className="text-black" />,
    path: 'water-services',
  },
  {
    title: 'Oil Change',
    description: 'Quick and efficient oil change services.',
    icon: <FaOilCan size={40} className="text-black" />,
    path: 'oil-change',
  },
  {
    title: 'Tire Services',
    description: 'Complete tire services including rotation and replacement.',
    icon: <MdTireRepair size={40} className="text-black" />,
    path: 'tire-services',
  },
  {
    title: 'Engine Services',
    description: 'Complete engine services for all types of engines.',
    icon: <MdTireRepair size={40} className="text-black" />,
    path: 'engine-services',
  },
  {
    title: 'Battery Replacement',
    description: 'Reliable battery replacement services to keep your vehicle running.',
    icon: <FaBatteryFull size={40} className="text-black" />,
    path: 'battery-replacement',
  },
  {
    title: 'Air Conditioning',
    description: 'Air conditioning services to keep your vehicle cool.',
    icon: <MdOutlineAir size={40} className="text-black" />,
    path: 'air-conditioning',
  },
  {
    title: 'Door Repairs',
    description: 'Repair and maintenance services for your car doors.',
    icon: <GiCarDoor size={40} className="text-black" />,
    path: 'door-repairs',
  },
  {
    title: 'Wheel Alignment',
    description: 'Precision wheel alignment services for better handling.',
    icon: <GiCarWheel size={40} className="text-black" />,
    path: 'wheel-alignment',
  },
];

const ServiceList = () => {
  const navigate = useNavigate();

  const handleBookNow = (path) => {
    navigate(`/booking/${path}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-8">
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
              <button
                onClick={() => handleBookNow(service.path)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-12 p-8 bg-theme-background text-theme-text border-t-2 border-primary/50">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default ServiceList;
