import React from 'react'

function NewsCard (props){
    const image = props.image
    const desc = props.desc
    const time = props.time
    const category = props.category
  return (
    <div className='bg-gray-200 h-[360px] w-full  rounded-lg p-2 cursor-pointer'>
        <div>
            <img  className='w-full rounded-md' src={image} alt="" />
        </div>
        <div className='flex gap-3 mt-3  '>
            <div className='bg-orange-400 border-none cursor-pointer px-1 text-white font-semibold'>{category}</div>
            <div>{time}</div>
        </div>
        <div className=' font-bold cursor-pointer hover:text-orange-400 ease-in-out duration-150'>{desc}</div>
    </div>
  )
}

export default NewsCard