import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

function Dashboard() {
  return (
    <div>
    <div>
      <Appbar/>
    </div>
      <div className='m-8'>
        <Balance value={1000}/>
        <Users/>
      </div>
    </div>
  )
}

export default Dashboard
