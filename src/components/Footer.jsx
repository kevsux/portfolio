import { React, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { footerLink, footerMedia, shadow } from './index'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Footer = () => {

    const [ref, inView ] = useInView({
        threshold: 0.5
    })
    const appear = useAnimation()

    useEffect(()=>{
        {inView && appear.start({
            scale: 1,
            y: 0,
            transition: { type: 'spring', duration: 1, bounce: 0.4 }
        })}
        {!inView && appear.start({
            scale: 0,
            y: 500,
            transition: { type: 'spring', duration: 1, bounce: 0.4 }
        },[inView])}
    })

  return (
    <footer
    ref={ref} 
    className='md:h-[25vh] h-[15vh] md:px-20 mb-5 w-full'
    >
        <motion.div 
        className='h-full flex md:w-full w-80 items-center justify-center flex-col md:gap-5 gap-2 rounded-xl py-10 bg-white/50' 
        style={{...shadow}}
        animate={appear}
        >
            <h1 
            className='md:text-3xl text-2xl font-bold'>Kevs</h1>
            <div className='flex gap-5'>
                {footerMedia.map((socmed)=>{
                    const { id, location, icon } = socmed
                    return (
                        <a
                        className='md:text-3xl text-2xl hover:translate-y-[-5px] duration-200'
                        key={id}
                        target='_blank'
                        href={location}>{icon}</a>
                    )
                })}
            </div>
            <p 
            className='flex items-center gap-2'>
                <span className='text-xl'>&#169;</span>
                <span className='text-sm'>Kevs Tech.</span> 
                <span className='text-sm'>All rights reserved</span>
            </p>
        </motion.div>
    </footer>
  )
}

export default Footer