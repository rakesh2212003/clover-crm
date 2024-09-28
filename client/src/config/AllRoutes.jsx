import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Admin, Signup, Login, Dashboard } from '../pages'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/admin/login' element={<Admin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default AllRoutes