import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=' w-[100vw] text-white flex flex-row bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-[65px]  justify-around  items-center max-[475px]:justify-between max-[475px]:px-6 fixed top-0 left-0 mb-10  '>
        <div><Link to='/Homepage'><img className='w-20 h-20 object-cover z-10 cursor-pointer' src="/src/images/logo.png" alt="" /></Link></div>
        <div className='flex gap-10 '>
          <ul className='flex flex-row w-full h-full gap-10 max-[475px]:hidden'>
              <li><Link to='/News'>News</Link></li>
              <li><Link to='/Sports'>Sports</Link></li>
              <li><Link to='/Business'>Business</Link></li>
              <li><Link to='/Entertainment'>Entertainment</Link></li>
            </ul>
            <div className=' min-[475px]:hidden cursor-pointer'>
            <Icon icon="fa:navicon" width="30" height="30" />

            </div>
            </div>
            
        
    </div>
  )
}

export default Navbar