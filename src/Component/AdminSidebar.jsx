import React from 'react'

const AdminSidebar = () => {
  return (
    <>
    <div className='bg-blue-300 w-4/5 h-full'>
        <ul className='flex flex-col justify-start items-start text-lg px-20  text-left fixed'>
          <li className='py-1'>Dashboard</li>
          <li className='py-1'>Add Blog</li>
          <li className='py-1'>Profile Settings</li>

        </ul>
      </div>
    </>
  )
}

export default AdminSidebar