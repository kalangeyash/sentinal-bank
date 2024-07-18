import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

function Signup() {
  return (  
    <div className='bg-slate-200 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
             <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label={"Signup"}/>
                
                <SubHeading label = {"Enter your information to get started"}/>
                

                <InputBox placeholder="Ash" label={"First Name"}/>
                <InputBox placeholder="Kato" label ={"Last Name"}/>
                <InputBox placeholder="example@email.com" label={"Email"}/>
                <InputBox placeholder="******" label={"Password"}/>
            
                <div className='pt-4'>
                    <Button label={"Sign up"}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}/>
            </div>

        </div>
      
    </div>
  )
}

export default Signup
