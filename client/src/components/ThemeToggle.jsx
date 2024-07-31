import React, { useEffect, useState } from 'react'

import { light_mode, dark_mode } from '../assets/icons'

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className='absolute w-12 h-10 bottom-3 right-0 flex justify-end items-center'>
            <div className='absolute left-0 w-10 h-full flex justify-center items-center bg-bgIcon rounded-full border border-borderColor cursor-pointer'
                onClick={() => setDarkMode(!darkMode)}
            >
                <img src={darkMode ? light_mode : dark_mode} alt="" className='w-[50%]'/>
            </div>
            <div className='w-[80%] h-[60%] bg-bgIcon'></div>
        </div>
    )
}

export default ThemeToggle