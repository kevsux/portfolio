import React, { useEffect, useState } from 'react'
import AllProject from './Projects/AllProject'
import WebProject from './Projects/WebProject'
import AppProject from './Projects/AppProject'
import DesignProject from './Projects/DesignProject'
import { button } from './index'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const Project = () => {

    const [project, setProject] = useState('')

    const [ref, inView ] = useInView({
        threshold: 0.5
      })
      const scale = useAnimation()
    
      useEffect(()=>{
          {inView && scale.start({
            scale: 1,
            transition: {
                type: 'spring', duration: 1, bounce: 0.3
            }
        }) }
    
        {!inView && scale.start({scale: 0}) }
      },[inView])
   
    return (
        <section 
        className='h-screen md:w-full md:px-20 flex items-center justify-center flex-col py-8 gap-5'
        id='project'
        >
            <header className='text-center flex flex-col gap-2 py-5'>
                <h1 className='text-5xl font-bold'>Project</h1>
                <p className='text-gray-600'>My recent work</p>
            </header>

            <nav className='flex items-center justify-center w-1/2 gap-5'>
                {
                    button.map((item) =>(

                        <button 
                        key={item.id} 
                        className='hover:bg-black hover:text-white md:w-1/6 px-5 text-center rounded-2xl py-1 duration-200 focus-within:bg-black focus-within:text-white font-semibold'
                        onClick={() =>{
                            setProject(item.title)
                        }}
                        >
                            {item.title}
                        </button>
                    ))
                }
            </nav>

            <aside ref={ref} className='h-screen flex items-center justify-center md:px-32 w-full overflow-hidden'>
        
                {project === '' && <AllProject animation={scale}/>}
                {project === 'All' && <AllProject animation={scale}/>}
                {project === 'Web' && <WebProject animation={scale}/>}
                {project === 'App' && <AppProject animation={scale}/>}
                {project === 'Design' && <DesignProject animation={scale}/>}

            </aside>
        </section>
  )
}

export default Project