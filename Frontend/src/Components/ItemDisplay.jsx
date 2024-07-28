import React from 'react'
import { Link } from 'react-router-dom'

function ItemDisplay({id, name, image, description, price, day}) {
  return (
    <div className='flex flex-row w-full bg-gray-300 rounded-[20px] p-[40px] gap-[40px] items-center'>
        <div className='w-[500px] h-[250px] overflow-hidden'>
            <img className=' w-full h-full object-cover rounded-[20px]' src={image} alt="" />
        </div>
        <div className='flex flex-col gap-[10px]'>
            <p className='text-[20px]'>{description}</p>
            <h2 className='text-[40px] font-[500]'>{name}</h2>
            <p className='text-[20px]'>{day}</p>
            <p className='text-[20px]'>${price}</p>
            <Link to={`/packageitem/${id}`}>
            <button className='w-[170px] h-[40px] text-white bg-sky-800 rounded-[50px] duration-[0.5s] hover:scale-[1.05]'>BOOK NOW</button></Link>
        </div>
    </div>
  )
}

export default ItemDisplay