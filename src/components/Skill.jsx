import React from 'react'
import { frontend, backend, shadow } from './index'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Skill = () => {

    const { ref, inView } = useInView({
        threshold: .5
    })

    const frontEnd = useAnimation()
    const backEnd = useAnimation()

    useEffect(() =>{

        {inView && frontEnd.start({
            x: 0,
            scale: 1,
            transition: {
                type: 'spring', duration: 1, bounce: 0.3,
            }
        }) }

        {!inView && frontEnd.start({scale: 0, x: '-800px'})}
        
    }, [inView])


    useEffect(() =>{

        {inView && backEnd.start({
            x: 0,
            scale: 1,
            transition: {
                type: 'spring', duration: 1, bounce: 0.3,
            }
        }) }

        {!inView && backEnd.start({scale: 0, x: '800px'})}
        
    }, [inView])
   

  return (
    <section className='h-screen flex flex-col items-center justify-center' id='skill'>
        
        <div className='text-center md:mb-[-90px] py-16'>
            <h1 className='text-5xl font-bold'>Skills</h1>
            <p className='text-gray-600'>My Technical Level</p>
        </div>

        <aside ref={ref} className='w-full h-full md:flex md:justify-center md:items-center gap-10 md:px-20 justify-center grid'>
            
            <div
            className='md:w-[37%] md:h-[40%] w-[350px] flex flex-col items-center justify-center px-10 rounded-2xl bg-white md:translate-y-[-100px] relative after:content-[""] after:absolute after:w-[50%] after:bg-black after:h-[3px] after:translate-x-[340px] after:rounded-full after:translate-y-[-50px] after:hidden md:after:block
            
            before:content-[""] before:absolute before:w-[32%] before:bg-black before:h-[3px] before:translate-x-[-2px] before:rotate-90 before:rounded-full before:translate-y-[238px] before:hidden md:before:block z-[-1]' 
            style={{...shadow}}
            ref={ref}
            >
                <div className='mb-10 text-xl font-bold'>
                    <h1>Front End Developer</h1>
                </div>

                <motion.div className='w-full h-[60%] grid grid-cols-2 justify-center place-items-start items-center'
                animate={frontEnd}
                >
                {
                    frontend.map((item) => (
                        <div key={item.id} className='flex gap-2 font-bold text-lg flex-wrap'>

                            <span className='mt-[5px]'>{item.icon}</span>
                            <p className='text-lg flex items-center flex-wrap w-[60%]'>{item.title}<span className='text-xs text-gray-500'>{item.level}</span>
                            </p>
                        </div>
                    ))
                }
                </motion.div>  
            </div>

            <div 
            className='md:w-[37%] md:h-[40%] w-[350px] flex flex-col items-center justify-center px-10 rounded-2xl bg-white md:translate-y-[150px] relative before:content-[""] before:absolute before:w-[32%] before:bg-black before:h-[3px] before:translate-y-[-238px] before:rotate-90 before:translate-x-[2px] before:rounded-full before:hidden md:before:block
            
            after:content-[""] after:absolute after:w-[50%] after:bg-black after:h-[3px] after:translate-y-[50px] after:translate-x-[-340px] after:rounded-full after:hidden md:after:block z-[-1]'
            style={{...shadow}}
            ref={ref}
            >

                <div className='mb-10 text-xl font-bold'>
                    <h1>Back End Developer</h1>
                </div>

                <motion.div className='w-full h-[60%] grid grid-cols-2 justify-center place-items-start items-center'
                animate={backEnd}
                >
                {
                    backend.map((item) => (
                        <div key={item.id} className='flex gap-2 font-bold text-lg flex-wrap'>

                            <span className='mt-[5px]'>{item.icon}</span>
                            <p className='text-lg flex items-center flex-wrap w-[60%]'>{item.title}<span className='text-xs text-gray-500'>{item.level}</span>
                            </p>

                        </div>
                    ))
                }

                </motion.div>  
            </div>
        </aside>
    </section>
  )
}

export default Skill