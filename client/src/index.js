import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import store from './config/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AnimatePresence>
            <Router>
                <Provider store={ store }>
                    <App />
                </Provider>
            </Router>
        </AnimatePresence>
    </React.StrictMode>
);