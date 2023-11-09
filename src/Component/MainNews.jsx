import React from 'react'

function MainNews (props){
    const image = props.image
    const title = props.title
    const desc = props.desc
  return (
    <div className='flex flex-row  max-[475px]:flex-col max-[475px]:w-11/12   w-9/12 mx-auto justify-start rounded-md  h-[360px] 
    max-[475px]:h-[420px] max-[475px]:gap-1 gap-5  mt-10 py-5 bg-gray-200  px-2 max-[475px]:py-2 '>
        <div className='w-1/2 max-[475px]:w-full max-[475px]:h-1/2 max-[475px]:gap-2  '>
           <img className='w-full h-80 max-[475px]:h-full max-[475px]:object-cover rounded-md object-contain' src={image} alt="" /></div>
        <div className='w-1/2 max-[475px]:w-full max-[475px]:h-1/2 max-[475px]:gap-2   '>
            <h1 className='  font-bold text-2xl hover:text-orange-500 w-full  flex r cursor-pointer'>{title}</h1>
            <p className=' h-full font-semibold overflow-hidden text-ellipsis'>{desc}</p>
           </div>
    </div>
  )
}

export default MainNews