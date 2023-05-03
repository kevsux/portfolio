import React, { useState } from 'react'
import { TbNavigation } from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'
import Sidebar from './Sidebar'

const PhoneNavButton = () => {

  const [nav, setNav] = useState(false)

  return (
    <div>

      <button 
        className={`fixed w-9 h-9 bg-black right-2 bottom-5 text-white md:invisible visible flex items-center justify-center duration-500 text-2xl rounded-lg`}

        onClick={() =>{
          setNav(!nav)
        }}
        >
          {nav ? <RxCross2/> : <TbNavigation/>  }

          {nav ? <Sidebar className='absolute top-[-27rem] right-2 flex flex-col justify-evenly h-[50vh] duration-500 text-black'/> : <Sidebar className='absolute top-[-27rem] right-2 flex flex-col justify-evenly h-[50vh] duration-500 text-black scale-0 z-50'/>}
          
    </button> 

      
    </div>
    
  )
}

export default PhoneNavButton