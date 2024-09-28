import { div } from 'framer-motion/client';
import React, { useState } from 'react'

const Input = ({ label, id, type, name, placeholder, icon }) => {

    const [isFocus, setIsFocus] = useState(false);

    return (

        <div className={`w-full h-11 px-2 border-1.5 flex justify-start items-center rounded-lg transition-all ${isFocus ? 'border-black' : 'border-borderColor'}`}>
            {icon ? (
                <div className='flex flex-1 gap-2'>
                    <img
                        src={icon}
                        alt='input icon'
                    />
                    <input
                        id={id}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        className='w-full bg-transparent text-sm flex-1 placeholder:font-semibold placeholder:text-gray-500'
                    />
                </div>
            ) : (
                <div>ABCD</div>
            )}

            {/* <label
                htmlFor={id}
                className={`absolute text-sm bg-transparent pointer-events-none transition-all ${isFocus ? '-translate-y-6' : 'translate-y-0'}`}
            >
                {label}
            </label>

            <img
                src={icon}
                alt="input icon"
                className='absolute'
            />

            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                className='w-full bg-transparent text-sm'
            /> */}

            {/* <span></span> */}
        </div>
    )
}

export default Input