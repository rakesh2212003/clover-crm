import React, { useState } from 'react'

import { Input } from '../components'

const Signup = () => {

    const [signupData, setSignupData] = useState({
        first_name: '',
        last_name: '',
        company_name: '',
        email: '',
        password: '',
        industry: '',
    })

    return (
        <div className='w-[500px] p-8 h-auto flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-between items-center gap-4'>
                <div className='w-full flex justify-center items-center gap-4'>
                    <Input
                        label={"First Name"}
                        id={"first_name"}
                        type={"text"}
                        name={"UserFirstName"}
                        stateValue={signupData.first_name}
                        stateFunction={setSignupData}
                    />
                    <Input
                        label={"Last Name"}
                        id={"last_name"}
                        type={"text"}
                        name={"UserLastName"}
                        stateValue={signupData.last_name}
                        stateFunction={setSignupData}
                    />
                </div>
                <Input
                    label={"Company Name"}
                    id={"company_name"}
                    type={"text"}
                    name={"UserCompanyName"}
                    stateValue={signupData.company_name}
                    stateFunction={setSignupData}
                />
                <Input
                    label={"Industry"}
                    id={"industry"}
                    type={"text"}
                    name={"UserCompanyIndustry"}
                    stateValue={signupData.industry}
                    stateFunction={setSignupData}
                />
                <Input
                    label={"Email"}
                    id={"email"}
                    type={"email"}
                    name={"UserEmail"}
                    stateValue={signupData.email}
                    stateFunction={setSignupData}
                />
                <div className='w-full flex justify-center items-center gap-4'>
                    <Input
                        label={"Password"}
                        id={"password"}
                        type={"password"}
                        name={"UserPassword"}
                        stateValue={signupData.password}
                        stateFunction={setSignupData}
                    />
                    <Input
                        label={"Confirm Password"}
                        id={"c_password"}
                        type={"password"}
                        name={"UserConfirmPassword"}
                        stateValue={signupData.c_password}
                        stateFunction={setSignupData}
                    />
                </div>
            </div>
        </div>
    )
}

export default Signup