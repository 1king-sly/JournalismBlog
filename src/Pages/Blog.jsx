import { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import SidePanel from '../Component/SidePanel';
import Content from '../Component/Blog';
import { useParams } from 'react-router-dom'; 


function Blog  () {
  const { image_id } = useParams(); 
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch business data from the API
    const apiUrl = `https://mmust-jowa.onrender.com/api/v1/user/category/${image_id}`;
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Ensure the data is an array before setting the state
        if (Array.isArray(data)) {
          setNewsData(data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching news data:', error));
  }, [image_id]);

  return (
<div>
        <Navbar/>
 <div className="grid grid-cols-3 overflow-hidden bg-white px-6 py-24 sm:py-32  lg:px-0">
 <div className="col-span-2 pl-24">
  
    <div className=' '>
    {newsData.map((item, index) => (
          <Content
            key={index}
            title={item.title}
            body={item.body}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
    
  </div>
  </div>
  <div className='w-11/12'>
    <SidePanel/>
  </div>
</div>

</div>
  )
}

export default Blog;
