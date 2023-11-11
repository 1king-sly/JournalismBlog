import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar'
import BlogCard from '../Component/BlogCard';

function Sports  () {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch sports data from the API
    fetch('https://mmust-jowa.onrender.com/sports')
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error('Error fetching news data:', error));
  }, []);
  return (
    <div className='overflow-x-hidden'>
     <div className='relative mb-24'>
      <Navbar/>
    </div>
    <h1 className='w-screen mt-20 flex text-2xl font-bold  justify-center '>Sports</h1>

    <div className='w-9/12 mx-auto mt-4 grid grid-cols-2 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 overflow-x-hidden '>
    
      
      {newsData.map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
        
    </div>
    </div>
  
  )
}

export default Sports