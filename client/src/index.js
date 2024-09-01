import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import Store from './config/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AnimatePresence>
            <Provider store={ Store }>
                <Router>
                    <App />
                </Router>
            </Provider>
        </AnimatePresence>
    </React.StrictMode>
);