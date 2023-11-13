import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Component/AdminNavbar';
import Dashboard from '../Component/Dashboard';
import ProfilePage from '../Component/ProfilePage';
import AdminSidebar from '../Component/AdminSidebar';
import CreateBlog from './CreateBlog';
import Business from '../Pages/Business'
import Login from '../Pages/Login'
import Entertainment from '../Pages/Entertainment'
import News from '../Pages/News'
function Admin() {
  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Default selected item
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (based on your authentication logic)
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      // User is authenticated
      setAuthenticated(true);
    } else {
      // User is not authenticated, redirect or handle accordingly
      setAuthenticated(false);
      // For example, redirect to login page
      window.location.href = '/login';
    }
  }, []);

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  // Render the component only if the user is authenticated
  return authenticated ? (
    <div className=' overflow-x-hidden'>
      <div className='relative'>
        <AdminNavbar />
      </div>
      

    <div className='flex  mt-[70px] w-screen '>
      {/* menu section  */}

      <div className='w-1/6'>
        <AdminSidebar onItemClick={handleSidebarItemClick}/>
      </div>
       
        
      {/* blogdashboard */}
      <div className='showcase w-5/6'>
        <h5 className='mt-5 text-xl w-full  bold font-semibold text-gray-400 -mb-4  px-10'>{selectedItem}</h5>
        <div className="">
            <div className=" px-10 py-5 ">
              {/* Render content based on the selected item */}
              {selectedItem === 'Dashboard' && <Dashboard />}
              {selectedItem === 'Add Blog' && <CreateBlog />}
              {selectedItem === 'Profile Settings' && <ProfilePage />}

            </div>
        </div>
      </div>
    </div>
       </div>
  ):(<Login/>)
}

export default Admin;