import React from 'react'

import { Input, Button } from '../components'
import { adminLoginBg, Logo } from '../assets/img'
import { adminIcon, email, password,rightArrow } from '../assets/icons'

const Admin = () => {
    return (
        <div className='relative w-screen h-screen flex justify-center items-center'>

            {/* <div className='absolute left-0 top-0 -z-50 w-full h-full flex flex-col justify-center items-center'>
                <div className='w-full h-1/2 bg-primaryColor'></div>
                <div className='w-full h-1/2 bg-secondaryColor'></div>
            </div> */}

            <div className='w-full h-full flex flex-col justify-center items-center gap-4 backdrop-blur-md'>
                <div className='flex justify-center items-center'>
                    <img src={Logo} alt="" className='w-16' />
                    <img src={rightArrow} alt="" className='w-16' />
                    <img src={adminIcon} alt="" className='w-16' />
                </div>
                <h1 className='text-2xl font-semibold'>Sign In</h1>

                <form className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <Input
                            type={"email"}
                            icon={email}
                            placeholder={"Email"}
                        />
                        <Input
                            type={"password"}
                            icon={password}
                            placeholder={"Password"}
                        />
                    </div>

                    <Button name={"Login"} />

                </form>
            </div>
        </div>
    )
}

export default Admin