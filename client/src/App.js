import React from 'react';

import './App.css';
import { ThemeToggle } from './components'

const App = () => {

    return (
        <div className='relative min-h-screen flex items-center justify-center bg-bgColor text-textColor transition-all'>
            <ThemeToggle />
        </div>
    );
};

export default App;