import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

function Signin() {
  return (
    <div className='bg-slate-200 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-slate-100 w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign In"}/>
            <SubHeading label ={"Enter your credentials to access your account and features"}/>
            <InputBox placeholder="example@email.com" label={"Email"}/>
            <InputBox placeholder="*******" label ={"Password"}/>
            <div>
                <Button label={"Sign in"}/>
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Signup"} to={"./Signup"}/>
        </div>
      </div>
     
    </div>
  )
}

export default Signin
