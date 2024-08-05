import React from 'react'
import { Link } from 'react-router-dom'

function ItemDisplay({id, name, image, description, price, day}) {
  return (
    <div className='flex flex-row w-full bg-[#66666620] rounded-[20px] p-[40px] gap-[40px] items-start max-[680px]:flex-col max-[680px]:h-[700px] max-[577px]:h-[620px] max-[477px]:p-[20px] max-[477px]:h-[500px] max-[477px]:gap-[20px]'>
        <div className='w-[50%] h-[250px] overflow-hidden max-[680px]:h-[50%] max-[680px]:w-full'>
            <img className=' w-full h-full object-cover rounded-[20px]' src={image} alt="" />
        </div>
        <div className='flex flex-col w-[50%] gap-[20px] max-[680px]:h-[30%] max-[680px]:w-full max-[577px]:gap-[10px]'>
            <p className='text-[20px] font-["Lato"] text-[#666666] max-[477px]:text-[16px]'>{description}</p>
            <h2 className='text-[40px] font-[500] font-["Merriweather"] max-[577px]:text-[30px] max-[477px]:text-[25px]'>{name}</h2>
            <p className='text-[20px] font-["Lato"] text-[#666666] max-[477px]:text-[16px]'>{day}</p>
            {/* <p className='text-[20px]'>${price}</p> */}
            <Link to={`/packageitem/${id}`}>
            <button className='w-[170px] h-[40px] text-white font-["Lato"] bg-[#003366] rounded-[50px] duration-[0.5s] hover:scale-[1.05] max-[477px]:text-[16px]'>BOOK NOW</button></Link>
        </div>
    </div>
  )
}

export default ItemDisplay