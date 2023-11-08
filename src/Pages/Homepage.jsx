import React from 'react'
import Category from '../Component/Category'
import MainNews from '../Component/MainNews'
import NewsCard from '../Component/NewsCard'
import Navbar from '../Component/Navbar'


function Homepage() {
  return (
    
    <>
        <div className='relative mb-20'>
    <Navbar/>
    </div>
     
      <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>
      <div className='w-9/12 mx-auto mt-10 grid grid-cols-3 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 '>
      <NewsCard image="/src/images/news.jpeg" category="NEWS" time="32 minutes ago" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad  "/>
      <NewsCard image="/src/images/news.jpeg" category="SPORTS" time="32 minutes ago" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad"/>
      <NewsCard image="/src/images/news.jpeg" category="ENTERTAINMENT" time="32 minutes ago" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero  "/>
      <NewsCard image="/src/images/news.jpeg" category="NEWS" time="32 minutes ago" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad "/>
      <NewsCard image="/src/images/news.jpeg" category="SPORTS" time="32 minutes ago" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero  "/>
      <NewsCard image="/src/images/news.jpeg" category="ENTERTAINMENT" time="32 minutes ago" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad  "/>

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