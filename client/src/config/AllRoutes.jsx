import React from 'react'
import { Routes, Route } from 'react-router-dom'

const AllRoutes = () => {
    return (
        <Routes>
            <Route to='/' element={<A/>} />
            <Route to='/' element={<A/>} />
            <Route to='/' element={<A/>} />
            <Route to='/' element={<A/>} />
        </Routes>
    )
}

export default AllRoutes