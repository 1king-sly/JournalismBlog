import React, {  useState } from 'react';
import AdminNavbar from '../Component/AdminPanel/AdminNavbar';
import Dashboard from '../Component/AdminPanel/Dashboard';
import SidePanel from '../Component/SidePanel';
import AdminSidebar from '../Component/AdminPanel/AdminSidebar';
import CreateBlog from './CreateBlog';
import Business from '../Pages/Business'
import Sports from '../Pages/Sports'
import Entertainment from '../Pages/Entertainment'
import News from '../Pages/News'
import ProfilePage from '../Component/AdminPanel/ProfilePage'
import AdminNews from '../Component/AdminPanel/AdminNews';
import AdminBusiness from '../Component/AdminPanel/AdminBusiness';
import AdminEntertainment from '../Component/AdminPanel/AdminEntertainment';
import AdminSports from '../Component/AdminPanel/AdminSports';



function Admin() {

  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Default selected item

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className=' overflow-x-hidden'>
      <div className='relative'>
        <AdminNavbar/>
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
              {selectedItem === 'News' && <AdminNews />}
              {selectedItem === 'Sports' && <AdminSports />}
              {selectedItem === 'Business' && <AdminBusiness />}
              {selectedItem === 'Entertainment' && <AdminEntertainment />}

            </div>
        </div>

      </div>
    </div>
       </div>
  )
}


export default Admin;