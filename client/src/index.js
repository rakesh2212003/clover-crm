import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
// import Store from './config/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AnimatePresence>
            <Router>
                {/* <Provider store={Store}> */}
                    <App />
                {/* </Provider> */}
            </Router>
        </AnimatePresence>
    </React.StrictMode>
);