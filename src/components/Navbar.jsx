import React from 'react'


const Navbar = () => {
  return (
    <header className='h-[10vh] flex justify-between items-center '>

      <nav>
        <h1 className='text-2xl'>Kevs</h1>
      </nav>

      <nav>
        <a href="#" className='text-lg'>Resume</a>
      </nav>

    </header>
  )
}

export default Navbar