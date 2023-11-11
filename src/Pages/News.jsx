import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import BlogCard from '../Component/BlogCard';

function News  () {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch news data from the API
    fetch('https://mmust-jowa.onrender.com/news')
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error('Error fetching news data:', error));
  }, []);
  return (
    <>
     <div className='relative mb-24'>
      <Navbar/>
      <Footer/>
    </div>
    <h1 className='w-screen mt-20 flex text-2xl font-bold  justify-center'>News</h1>

    <div className='w-9/12 mx-auto mt-4 grid grid-cols-2 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 '>
    
      
      {newsData.map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            author={item.author}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
        </div>

        
      loading ?(
      <CircleLoader className='align-items-center justify-center h-100vh w-100 mx-auto ' color={' #9C27B0'} loading={loading}
        // cssOverride={override}
        size={150}// aria-label="Loading Spinner"// data-testid="loader"
      />)
      :
    </>
  
  )
}

export default News