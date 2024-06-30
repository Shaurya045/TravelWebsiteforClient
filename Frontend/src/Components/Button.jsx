import React from 'react'

function Button({value}) {
  return (
        <button className='bg-blue-950 text-white h-[60px] w-[150px] rounded-[15px] text-[20px] font-[400]'>{value}</button>
  )
}

export default Button