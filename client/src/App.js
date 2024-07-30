import React from 'react'

import AllRoutes from './config/routes/AllRoutes'
import { MainLoader } from './components'

const App = () => {
    return (
        <>
            <div className='fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full'>
                <MainLoader />
            </div>
            
            <AllRoutes />
        </>
    )
}

export default App