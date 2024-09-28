import React from 'react'
import { motion } from 'framer-motion'

import { click } from '../animations'

const Button = ({name}) => {
    return (
        <motion.button
            {...click}
            className='w-full h-10 text-textColor bg-primaryColor font-semibold rounded-lg'
        >
            {name}
        </motion.button>
    )
}

export default Button