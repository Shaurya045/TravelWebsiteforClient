import React from 'react'
import { Link } from 'react-router-dom'

function ItemDisplay({id, name, image, description, price, day}) {
  return (
    <div className='flex flex-row w-full bg-[#66666620] rounded-[20px] p-[40px] gap-[40px] items-center'>
        <div className='w-[350px] h-[250px] overflow-hidden'>
            <img className=' w-full h-full object-cover rounded-[20px]' src={image} alt="" />
        </div>
        <div className='flex flex-col gap-[20px]'>
            <p className='text-[20px] font-["Lato"] text-[#666666]'>{description}</p>
            <h2 className='text-[40px] font-[500] font-["Merriweather"]'>{name}</h2>
            <p className='text-[20px] font-["Lato"] text-[#666666]'>{day}</p>
            {/* <p className='text-[20px]'>${price}</p> */}
            <Link to={`/packageitem/${id}`}>
            <button className='w-[170px] h-[40px] text-white font-["Lato"] bg-[#003366] rounded-[50px] duration-[0.5s] hover:scale-[1.05]'>BOOK NOW</button></Link>
        </div>
    </div>
  )
}

export default ItemDisplay