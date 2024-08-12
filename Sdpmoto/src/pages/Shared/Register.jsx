import React, { useState } from 'react';
import Particles from '@/components/magicui/particles';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FaEnvelope, FaKey, FaPhone, FaUser } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8083/api/auth/register', {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (response.status === 201 || response.status === 200) {
        console.log('Form Submitted', formData);
        navigate('/login');
      } else {
        console.log('Unexpected response status:', response.data);
        alert('Unexpected response status: ' + response.status);
      }
    } catch (error) {
      console.error('Error registering user:', error.response || error.message);
      alert('An error occurred while registering. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles className="absolute inset-0 z-0" />

      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <Card className="w-full max-w-md p-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create an account</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaUser className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input 
                  id="username" 
                  name="username" 
                  value={formData.username} 
                  onChange={handleChange} 
                  type="text" 
                  placeholder="Username" 
                  className="flex-grow" 
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaEnvelope className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  type="email" 
                  placeholder="@gmail.com" 
                  className="flex-grow" 
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaKey className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input 
                  id="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  type="password" 
                  placeholder="******" 
                  className="flex-grow" 
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaPhone className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="flex-grow" 
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-black text-white hover:bg-gray-800" onClick={handleSignup}>Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
