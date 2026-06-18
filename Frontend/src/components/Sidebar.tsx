import React from 'react'
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className='flex border border-r-2 border-red-900 h-screen p-5 w-[10vw] flex-col'>
        <Link to='/' className='text-green-900'>HomeScreen</Link>
        <Link to='/wallet' className='text-green-900'>Wallet</Link>
        <Link to='/payment' className='text-green-900'>Payment</Link>
        <Link to='/history' className='text-green-900'>History</Link>
        <Link to='/webhook' className='text-green-900'>WebHook</Link>
    </div>
  )
}

export default Sidebar