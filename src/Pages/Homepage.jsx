import React, { useEffect, useState } from 'react';
import Category from '../Component/Category'
import MainNews from '../Component/MainNews'
import NewsCard from '../Component/NewsCard'
import Navbar from '../Component/Navbar'
function Homepage() {
  const [newsData, setNewsData] = useState([]);
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    // Fetch news data from the API
    fetch('https://mmust-jowa.onrender.com/news')
      .then((response) => response.json())
      .then((data) => setNewsData(data.slice(0, 2)))
      .catch((error) => console.error('Error fetching news data:', error));

    // Fetch business data from the API
    fetch('https://mmust-jowa.onrender.com/business')
      .then((response) => response.json())
      .then((data) => setBusinessData(data.slice(0, 1)))
      .catch((error) => console.error('Error fetching business data:', error));
  }, []);
  return (
    
    <>
        <div className='relative mb-20'>
    <Navbar/>
    </div>
     
      <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>
      <div className='w-9/12 mx-auto mt-10 grid grid-cols-3 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 '>
    
      
      {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            author={item.author}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
      
         

     
      {businessData.map((item, index) => (
          <NewsCard
          key={index}
          title={item.title}
          author={item.author}
          published_on={item.published_on}
          image={item.image_id}
          />
        ))}

      
        
   </div>
   <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>
   <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>
   <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>

   <div className='w-full  justify-center flex mt-7 -mb-10 '>
    <div className='bg-orange-500 p-2 rounded-3xl text-white cursor-pointer '>MORE STORIES</div>
    </div>
   <Category category="NEWS"/>
   <Category category="SPORTS"/>
   <Category category="BUSINESS"/>
   <Category category="ENTERTAINMENT"/>
    </> 
    
  )
}

export default Homepage;