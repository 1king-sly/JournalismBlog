import React from 'react'
import Navbar from '../Component/Navbar';
import Dashboard from '../Component/Dashboard';
import SidePanel from '../Component/SidePanel';
import AdminSidebar from '../Component/AdminSidebar';
 
function Admin() {
  return (
    <div>


    <div className='grid grid-cols-4 mt-[]'>
      {/* menu section  */}
      <AdminSidebar/>
      
    {/* blogdashboard */}
     <div className='col-span-3 '>
     <h5 className='mt-2 text-xl w-full  bold font-semibold text-gray-400 -mb-4'>Dashboard</h5>

    <div className="px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24   lg:px-8 lg:py-10">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full ">
     {/* image section  */}
     <Dashboard/>
     
      {/* side panel  */}
  
      </div>
    </div>
    
    
   
    </div>
    </div>

    </div>
  )
}


export default Admin;