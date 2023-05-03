import React, { useEffect } from 'react'
import Profile from '../assets/profile1.png'
import { about, shadow } from './index'
import { CustomButton } from './CustomButton'
import { AiOutlineFileText } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'

const About = () => {

    const { ref, inView } = useInView({
        threshold: .5
    })
    const scale = useAnimation()
    useEffect(() =>{
        {inView && scale.start({
            scale: 1,
            transition: {
                type: 'spring', duration: 1, bounce: 0.3,
            }
        }) }
        {!inView && scale.start({scale: 0}) }
    }, [inView])

  return (
    <section 
    className='h-screen flex flex-col items-center justify-center text-center' 
    id='about'
    >

        <header className='md:mt-[-70px] md:mb-20'>
            <h1 className='text-5xl font-bold'>About Me</h1>
            <p className='text-gray-600'>My Introduction</p>
        </header>

        <aside ref={ref} className='md:flex grid gap-y-12'>

            <div className='md:w-1/2 w-full px-20 flex items-center justify-center'>
                <motion.img 
                animate={scale}
                src={Profile} 
                alt="Profile"
                />
            </div>

            <div className='md:w-1/2 w-full flex flex-col justify-center'>

                <div className='w-full flex items-center justify-evenly gap-x-5'>
                    {
                        about.map((item) =>(
                            <motion.div
                                animate={scale} 
                                key={item.id} 
                                className='md:w-[30%] md:h-[20vh] h-32 w-24 bg-white rounded-xl flex justify-center items-center flex-col'
                                style={{...shadow}}
                            >
                                <span className='text-2xl py-5'>{item.icon}</span>
                                <h1 className='md:text-lg text-sm font-bold'>{item.title}</h1>
                                <p className='text-xs text-gray-500'>{item.description}</p>
                            </motion.div>
                        ))
                    }
                </div>

                <p className='px-4 py-5 text-justify text-lg md:w-[80%] text-gray-600'>Front-end developer, I create with UI/UX user interfaces. I have no experience and am still studying at Quezon City University.</p>

                <CustomButton
                title={`Download CV`} 
                className='md:w-[180px] w-[170px] md:py-5 mx-4' 
                icons={<AiOutlineFileText className='md:text-2xl text-base'/>}
                />

            </div> 
        </aside>
        
    </section>
  )
}

export default About