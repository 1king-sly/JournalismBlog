import React from 'react'

const AdminSidebar = ({ onItemClick }) => {
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  return (
    <>
    <div className='bg-blue-300 w-full h-full'>
        <ul className='flex flex-col justify-start items-start text-lg px-20  text-left fixed'>
          <li className='py-1 cursor-pointer ' onClick={() => handleItemClick('Dashboard')}>Dashboard</li>
          <li className='py-1 cursor-pointer' onClick={() => handleItemClick('Add Blog')}>Add Blog</li>
          <li className='py-1 cursor-pointer'  onClick={() => handleItemClick('Profile Settings')}>Profile Settings</li>

        </ul>
      </div>
    </>
  )
}

export default AdminSidebar