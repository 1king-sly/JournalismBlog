import React from 'react'

function NewsCard (props){
    const image = props.image
    const title = props.title
    const published_on = props.published_on
    const author = props.author
    // const slug = props.slug
  return (
    <div className='bg-gray-200 h-[360px] w-full  rounded-lg p-2 cursor-pointer object-contain'>
        <div>
            <img  className='w-full rounded-md h-[189px]' src={image} alt="" />
        </div>
        <div className='flex gap-3 mt-3  '>
          
            <div className='bg-orange-400 border-none cursor-pointer px-1 text-white font-semibold'>{author}</div>
            <div>{published_on}</div>
           
        </div>
        <div className=' font-bold cursor-pointer hover:text-orange-400 ease-in-out duration-150'>{title}</div>
    </div>
  )
}

export default NewsCard