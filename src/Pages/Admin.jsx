import React from 'react'
import Navbar from '../Component/Navbar'
 
function Admin() {
  return (
    <>



    <div className='grid grid-cols-4 mt-10'>
      {/* menu section  */}
      <div className='col-span-4 mb-6'>
    <Navbar/>
    </div>
      <div className='bg-blue-300 w-4/5 h-full   '>
        <ul className='flex flex-col justify-start items-start text-lg px-20  text-left fixed'>
          <li className='py-1'>Dashboard</li>
          <li className='py-1'>Add Blog</li>
          <li className='py-1'>Profile Settings</li>

        </ul>
      </div>
    {/* blogdashboard */}
     <div className='col-span-3 '>
     <h5 className='mt-2 text-xl bold font-semibold text-gray-400 -mb-4'>Dashboard</h5>

    <div className="px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-8 lg:py-10">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
     {/* image section  */}
     
       <div className='grid grid-cols-2 col-span-2 gap-6'>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img className='w-full' src="/src/images/news.jpeg" alt="" />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             
                traveling
              
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
           <p className='inline-block  text-2xl font-bold'> 
           Visit the East
           </p>
             
            
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className='flex items-center justify-between'>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Learn More
        </button>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
            </div>
          
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img className='w-full' src="/src/images/news.jpeg" alt="" />

          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             
                traveling
              
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
           <p className='inline-block  text-2xl font-bold'> 
           Visit the East
           </p>
             
            
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className='flex items-center justify-between'>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Learn More
        </button>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
            </div>
          
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img className='w-full' src="/src/images/news.jpeg" alt="" />

           <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             
                traveling
              
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
           <p className='inline-block  text-2xl font-bold'> 
           Visit the East
           </p>
             
            
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className='flex items-center justify-between'>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Learn More
        </button>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
            </div>
          
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img className='w-full' src="/src/images/news.jpeg" alt="" />

          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             
                traveling
              
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
           <p className='inline-block  text-2xl font-bold'> 
           Visit the East
           </p>
             
            
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className='flex items-center justify-between'>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Learn More
        </button>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
            </div>
          
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img className='w-full' src="/src/images/news.jpeg" alt="" />

           <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             
                traveling
              
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
           <p className='inline-block  text-2xl font-bold'> 
           Visit the East
           </p>
             
            
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className='flex items-center justify-between'>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Learn More
        </button>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
            </div>
          
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img className='w-full' src="/src/images/news.jpeg" alt="" />

          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             
                traveling
              
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
           <p className='inline-block  text-2xl font-bold'> 
           Visit the East
           </p>
             
            
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className='flex items-center justify-between'>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Learn More
        </button>
            <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
            </div>
          
          </div>
        </div>
      </div>
      {/* side panel  */}
      <div >
        <div className=''>

        
      <ul className=''>
        <h5 className='mb-1 text-xl bold font-semibold text-gray-400'>CATEGORIES</h5>
        <li className='text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400'> News  </li><hr className="w-full my-2 border-gray-300" />
        <li className='text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400'>Sports</li><hr className="w-full my-2 border-gray-300" />
        <li className='text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400'>Business</li><hr className="w-full my-2 border-gray-300" />
        <li className='text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400'>Entertaiment</li> <hr className="w-full my-2 border-gray-300" />

      </ul>
      <ul className='mt-5'>
        <h5 className='mb-1 text-xl bold font-semibold text-gray-400'>LATEST POST</h5>
        <div className="flex flex-col justify-center w-9/12">
          <div className="flex">
            <div className="mr-4 ">
              <div className="flex items-center justify-center  mb-3 rounded-full bg-indigo-50">
              <img className='w-full' src="/src/images/news.jpeg" alt="" />

              </div>
            </div>
            <div className=''>
              <h6 className="mb-2  w-5/9 font-semibold leading-5">
                They urge you to put down
              </h6>
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600"> 28 Dec 2020 -</span>

              traveling
            </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center  mb-3 rounded-full bg-indigo-50">
              <img className='w-full' src="/src/images/news.jpeg" alt="" />

              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                They urge you to put down
              </h6>
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600"> 28 Dec 2020 -</span>

              traveling
            </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center mb-3 rounded-full bg-indigo-50">
              <img className='w-full' src="/src/images/news.jpeg" alt="" />

              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                They urge you to put down
              </h6>
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600"> 28 Dec 2020 -</span>

              traveling
            </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          </div>

      </ul>
      </div>
      </div>
      
      </div>
    </div>
    
    
    {/* create new blog */}
    <form action="" className='mt-10' >
    <div className='max-w-xl bg-slate-100 px-20 py-10 mb-10 md:mx-auto sm:text-left lg:max-w-2xl md:mb-12 '>
   {/* posttitle  */}
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block mb-2 text-sm bold font-semibold text-gray-400">
                PostTitle
              </label>
              <div className="mt-1">
                <div className="flex shadow-sm  sm:max-w-md">
                  <input
                    type="text"
                    name="posttile"
                    id="posttitle"
                    autoComplete="posttitle"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    placeholder="Enter Title"
                  />
                </div>
              </div>
            </div>
    </div>
{/* post type  */}

{/* description */}
<div className="">
              <label htmlFor="about" className="block mb-2 mt-5 text-base text-gray-500">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="resize-none block w-full h-fixed rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    
    {/* Post category */}
    <div className="sm:col-span-3">
              <label htmlFor="country" className="block mb-2 mt-5 text-base text-gray-500">
                Post Category
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>News</option>
                  <option>Sports</option>
                  <option>Business</option>
                  <option>Entertainment</option>

                </select>
              </div>
            </div>

         {/* file uploads    */}
      
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block mb-2 mt-5 text-base text-gray-500">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>  

  
     {/* save or cancel */}

    <div className="mt-6 flex items-center  justify-start gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      </div>
    </form>
    </div>
    </div>

    </>
  )
}


export default Admin;