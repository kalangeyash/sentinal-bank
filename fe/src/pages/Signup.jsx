import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const[firstName,setFirstName] = useState("")
  const[lastName,setLastName] = useState("")
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate();
  return (  
    <div className='bg-slate-200 h-screen flex justify-center'>
    {/* f-{firstName}
    l-{lastName}
    u-{username}
    pas ={password} */}
        <div className='flex flex-col justify-center'>
             <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4 '>
                <div className='shadow-sm pb-1'>
                  <Heading label={"Signup"}/>
                </div>
                <div className="shadow-sm pt-1">
                  <SubHeading label = {"Enter your information to get started"}/>

                </div>
                

                <InputBox onChange={e =>{
                  setFirstName(e.target.value)
                }}placeholder="FName" label={"First Name"}/>
                <InputBox onChange={e =>{
                  setLastName(e.target.value)
                }} placeholder="LName" label ={"Last Name"}/>
                <InputBox onChange={e=>{
                  setUsername(e.target.value)
                }}placeholder="example@email.com" label={"Email"}/>
                  <InputBox onChange={e=>{
                    setPassword(e.target.value)
                  }}placeholder="******" label={"Password"}/>
            
                <div className='pt-4'>
                    <Button onClick={async()=>{
                     const response =  await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username,
                        firstName,
                        lastName,
                        password
                      })
                      localStorage.setItem("token",response.data.token)
                      navigate("/dashboard")
                    }} label={"Sign up"}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}/>
            </div>

        </div>
      
    </div>
  )
}

export default Signup
