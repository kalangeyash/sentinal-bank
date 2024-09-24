import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const navigate = useNavigate()
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  return (
    <div className='bg-slate-200 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-slate-100 w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign In"}/>
            <SubHeading label ={"Enter your credentials to access your account and features"}/>
            <InputBox onChange={(e)=>{
              setUsername(e.target.value)
            }} placeholder="example@email.com" label={"Email"}/>
            <InputBox  onChange={(e)=>{
              setPassword(e.target.value)
            }} placeholder="*******" label ={"Password"}/>
            <div>
                <Button onClick={async()=>{
                  
                 const response = await  axios.post("https://sentinal-bank.onrender.com/api/v1/user/signin",{
                    username ,
                    password
                  })
                  localStorage.setItem("token", response.data.token)

                  navigate("/dashboard")

                }}label={"Sign in"}/>
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Signup"} to={"/signup"}/>
        </div>
      </div>
     
    </div>
  )
}

export default Signin
