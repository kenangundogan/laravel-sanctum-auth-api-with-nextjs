'use client';

import Link from 'next/link';

const Header = () => {

    return (
        <header className="fixed top-0 z-50 w-full overflow-hidden p-4 px-8 h-20 flex justify-between items-center border-b bg-white">
            <div className="text-xl font-bold">
                <Link href="/" className='flex items-center gap-2'>
                    <span>AUTH</span>
                </Link>
            </div>
            <div className='flex items-center gap-6'>
                <div className='group'>
                    <div className='relative z-10 overflow-hidden rounded-full w-10 h-10 border-2 cursor-pointer bg-white flex justify-center items-center text-xs font-bold'>KG</div>
                    <div className='group-hover:block hidden w-full max-w-64 fixed top-[4.95rem] right-8 rounded-sm bg-white'>
                        <div className='absolute -top-[39px] right-0 w-10 h-10 bg-white border border-b-white'></div>
                        <div className='border'>
                            <div className='flex items-center gap-2 p-6'>
                                <div className='relative overflow-hidden rounded-full w-10 h-10 flex-none border-2 bg-white flex justify-center items-center text-xs font-bold'>KG</div>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Kenan Gundogan</span>
                                    <span className='text-[11px]'>kenangundogan@example.com</span>
                                </div>
                            </div>
                            <div className='border-b border-gray-100'></div>
                            <div className='p-3'>
                                <ul className='flex flex-col text-sm'>
                                    <li>
                                        <Link href="/dashboard" className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm'>
                                            <span className='border border-black w-3 h-3 rounded-full'></span>
                                            <span className='text-sm'>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login" className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm'>
                                            <span className='border border-black w-3 h-3 rounded-full'></span>
                                            <span className='text-sm'>Login</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/register" className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm'>
                                            <span className='border border-black w-3 h-3 rounded-full'></span>
                                            <span className='text-sm'>Register</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/profile" className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm'>
                                            <span className='border border-black w-3 h-3 rounded-full'></span>
                                            <span className='text-sm'>Profile</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='border-b border-gray-100'></div>
                            <div className='p-6'>
                                <a href="/logout" className='w-full block p-2 border rounded-sm text-center text-sm bg-white hover:bg-gray-50 hover:shadow-lg'>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
