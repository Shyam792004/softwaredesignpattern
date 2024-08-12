import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Particles from '@/components/magicui/particles';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
    
        try {
            const response = await axios.post('http://127.0.0.1:8083/api/auth/login', {
                email,password
            });
    
            if (response.status === 200)
             {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
    
                // Show success message in a popup and navigate to the appropriate page
                window.alert('Login successful! Click OK to continue.');
    
                // Navigate based on user role immediately after the alert
                if (user.role === 'ADMIN') {
                    navigate('/admin/users');
                } else {
                    navigate('/');
                }
            } 
            else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error during login:', error.response || error.message);
            setError('An error occurred while logging in. Please try again.');
        }
    };
    

       

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Particles className="absolute inset-0 z-0" />
            <div className="relative z-10 flex justify-center items-center w-full h-full">
                <Card className="w-full max-w-md p-8">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <div className="flex justify-around mt-4">
                            <Button 
                                className={`w-1/2 ${!isAdmin ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200'}`} 
                                onClick={() => setIsAdmin(false)}
                            >
                                User Login
                            </Button>
                            <Button 
                                className={`w-1/2 ${isAdmin ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200'}`} 
                                onClick={() => setIsAdmin(true)}
                            >
                                Admin Login
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                <FaUser className="mr-2 text-gray-500 dark:text-gray-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="@gmail.com"
                                    className="flex-grow"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                <FaLock className="mr-2 text-gray-500 dark:text-gray-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Your password"
                                    className="flex-grow"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && <p className="text-red-600 text-center">{error}</p>}
                        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-black text-white hover:bg-gray-800" onClick={handleLogin}>
                            Login
                        </Button>
                    </CardFooter>
                    {!isAdmin && (
                        <div className="mt-6 text-center">
                            <div className="flex items-center justify-center mb-4 text-gray-500 dark:text-gray-400">
                                <span className="border-t border-gray-300 dark:border-gray-700 w-1/3"></span>
                                <span className="mx-4">or</span>
                                <span className="border-t border-gray-300 dark:border-gray-700 w-1/3"></span>
                            </div>
                            <h1 className="text-gray-900 dark:text-white mb-4">
                                New to Moto-GenZ?
                                <Button
                                    className="ml-2 bg-black text-white hover:bg-gray-800"
                                    onClick={() => navigate('/register')}
                                >
                                    Sign-up now
                                </Button>
                            </h1>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default Login;
