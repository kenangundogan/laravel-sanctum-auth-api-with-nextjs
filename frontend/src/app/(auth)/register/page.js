'use client';

import { useState } from 'react';
import Link from 'next/link';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { name, email, password, password_confirmation });
    };

    return (
        <div className='w-full min-h-screen p-4 sm:p-10 flex flex-wrap'>
            <div className='w-full p-8 flex justify-center items-center bg-grasy-50'>
                <div className="w-full max-w-sm">
                    <div className='mb-4'>
                        <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
                        <p className='text-sm'>Create an account to continue</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Name'
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email'
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='Password'
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password_confirmation' className='block text-sm font-medium text-gray-700'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                id='password_confirmation'
                                name='password_confirmation'
                                placeholder='Confirm Password'
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                                value={password_confirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <button
                                type='submit'
                                className='w-full bg-blue-700 text-white py-2 px-4 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-xs">
                        Zaten bir hesabınız var mı?{' '}
                        <Link href="/login" className="text-blue-700 hover:underline">
                            Giriş Yap
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
