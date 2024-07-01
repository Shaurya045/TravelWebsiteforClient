import React from 'react'

function Contact() {
  return (
    <div className='bg-gray-200 flex flex-row' id='contact'>
        <div className='flex flex-col'>
            <h2>Contact US</h2>
            <div>
                <input className='' type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <div>
                <input type="text" placeholder='Email ID'/>
                <input type="text" placeholder='Phone Number'/>
            </div>
            <input type="text" placeholder='Message Description' />
            <button>Send Message</button>
        </div>
        <div></div>
    </div>
  )
}

export default Contact