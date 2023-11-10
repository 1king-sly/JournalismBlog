import React, { useEffect, useState, CSSProperties } from 'react';
import Category from '../Component/Category'
import MainNews from '../Component/MainNews'
import NewsCard from '../Component/NewsCard'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import CircleLoader from "react-spinners/CircleLoader";

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

    //Function to hide display while the browser fetches data
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 4000)
    }, [])

//Overrides the css styling in the spinner/ pageloader
    
  return (
    
    <> 
      {
      loading ?(
      <CircleLoader className='align-items-center justify-center h-100vh w-100 mx-auto ' color={' #9C27B0'} loading={loading}
        // cssOverride={override}
        size={150}// aria-label="Loading Spinner"// data-testid="loader"
      />)
      :
    
    <div>
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
    <Footer/>
    </div>}
    </> 
    
  )
}
// Set the display property of the element to none using CSS
// document.getElementById("myElement").style.display = "none";

// // Remove the display property after the page loads using the DOMContentLoaded event
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("myElement").style.display = "block";
// });
export default Homepage;