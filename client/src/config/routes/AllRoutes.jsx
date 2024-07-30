import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Signup, Login } from '../../pages'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default AllRoutes