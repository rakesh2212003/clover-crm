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
        <div className='absolute bottom-5 right-5'>
            <div className='w-10 h-10 flex justify-center items-center bg-bgIcon rounded-full cursor-pointer'>
                <img
                    src={darkMode ? light_mode : dark_mode }
                    alt="DarkMoode"
                    onClick={() => setDarkMode(!darkMode)}
                    className='w-6 grayscale transition-all'
                />
            </div>
        </div>
    )
}

export default ThemeToggle