'use client';

import { useEffect, useState } from 'react';
import packageInfo from '../../../package.json';

const Footer = () => {
    const [userAgent, setUserAgent] = useState('');

    useEffect(() => {
        setUserAgent(navigator.userAgent);
    }, []);

    return (
        <footer className="w-full overflow-hidden py-4 px-8">
            <div className='border'>
                <div className='p-4 w-full flex justify-between items-center'>
                    <span className='text-xs font-bold'>Copyright © 2025 AUTH</span>
                </div>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-[12px]'>
                    {Object.keys(packageInfo.dependencies).map((key, index) => (
                        <li key={index} className='rounded-full bg-gray-50 py-2 px-4'>
                            <b>{key}: </b>
                            <span>{packageInfo.dependencies[key]}</span>
                        </li>
                    ))}
                </ul>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-[12px]'>
                    {Object.keys(packageInfo.devDependencies).map((key, index) => (
                        <li key={index} className='rounded-full bg-gray-50 py-2 px-4'>
                            <b>{key}: </b>
                            <span>{packageInfo.devDependencies[key]}</span>
                        </li>
                    ))}
                </ul>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-[12px]'>
                    <li>
                        <b>UserAgent: </b>
                        <span>{userAgent}</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
