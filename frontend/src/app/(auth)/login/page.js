'use client';

import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { email, password });
    };
    return (
        <div className='w-full min-h-screen p-4 sm:p-10 flex flex-wrap'>
            <div className='w-full p-8 flex justify-center items-center bg-grasy-50'>
                <div className="w-full max-w-xs">
                    <div className='mb-4'>
                        <h1 className="text-2xl font-bold mb-2">Sign In</h1>
                        <p className='text-sm'>Sign in to your account to continue</p>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                            <button
                                type='submit'
                                className='w-full bg-blue-700 text-white py-2 px-4 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-xs">
                        Hesabınız yok mu?{' '}
                        <Link href="/register" className="text-blue-700 hover:underline">
                            Kayıt Ol
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
