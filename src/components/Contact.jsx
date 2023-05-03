import React, { useState, useEffect } from 'react'
import { socmed, shadow } from './index'
import { CustomButton } from './CustomButton'
import { AiOutlineSend, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {

  const [send, setSend] = useState(<AiOutlineSend/>)
  const [message, setMessage] = useState('Send Message')

  const [ ref, inView ] = useInView({
    threshold: 0.5
  })
  
  const slideUp = useAnimation()
  const sideSlide = useAnimation()

  useEffect(()=>{
    {inView && slideUp.start({
      y: 0,
      opacity: 1,
      transition: {type: 'spring', duration: 2, bounce: 0.5}}
    )}
    {!inView && slideUp.start({
      y: 100,
      opacity: 0,
      transition: {type: 'spring', duration: .5}
    })}
  })

  useEffect(()=>{
    {inView && sideSlide.start({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {type: 'spring', duration: 2, bounce: 0.2}
    })}
    {!inView && sideSlide.start({
      opacity: 0,
      scale: 0,
      x: '-1200px',
      transition: { duration: 1}
    })}
  })

  return (
    <section 
    className='h-screen w-full md:px-20 flex items-center justify-center flex-col gap-5' 
    id='contact'
    >

        <header className='text-center mt-10'>
          <h1 className='text-5xl font-bold'>Contact Me</h1>
          <p className='text-gray-600'>Get in Touch</p>
        </header>

        <aside className='h-[80%] w-full md:flex md:items-center grid justify-between md:gap-5 md:pl-10'
        ref={ref}
        >

          <section 
          className='w-full h-full md:py-10 flex flex-col items-center gap-5'
          >
            <div className='w-full h-[15%] flex gap-5 justify-center items-center md:flex-row flex-col'>
              <fieldset className='border border-black md:w-1/2 w-80 h-[70%] rounded-lg'>
                <legend className='mx-5 px-3 font-semibold'>Name</legend>
                <input 
                  type="text" 
                  className='w-full bg-transparent rounded-lg h-full px-3'
                />
              </fieldset>

              <fieldset className='border border-black md:w-1/2 w-full h-[70%] rounded-lg'>
                <legend className='mx-5 px-3 font-semibold'>Email</legend>
                <input 
                  type="text" 
                  className='w-full bg-transparent rounded-lg h-full px-3'
                />
              </fieldset>
            </div> 

            <motion.textarea 
            className='w-full resize-none rounded-xl p-5 mt-5 md:mt-0'
            style={{...shadow}}
            placeholder='Message me anything'
            rows={11}
            animate={sideSlide}
            />

            <CustomButton 
            title={message}
            icons={send}
            type={'submit'}
            onClick={()=>{

              setMessage('')
              setSend(<AiOutlineLoading3Quarters className='animate-spin'/>)

              setTimeout(() =>{
                setSend(<BsFillCheckCircleFill/>)
                setMessage('Thank you!')
              },3000)

              setTimeout(() =>{
                setSend(send)
                setMessage(message)
              }, 30000)
            }}
            />
          </section>

          <section className='h-full md:w-1/4 flex md:flex-col items-center justify-evenly gap-5'
          ref={ref}
          >
          {
            socmed.map((item) =>(
              <motion.div 
              key={item.id} 
              className='h-[100px] md:h-full bg-white w-full flex items-center justify-center flex-col md:gap-2 gap-1 rounded-xl'
              style={{...shadow}}
              animate={slideUp}
              >
                  <span className='md:text-3xl text-xl'>{item.icon}</span>
                  <span className='md:text-lg text-sm font-semibold'>{item.title}</span>
                  <a 
                  href={item.link} 
                  className='md:text-lg text-xs text-gray-500'
                  target='_blank'
                  >Visit</a>
              </motion.div>
            ))
          }      
          </section>
        </aside>
    </section>
  )
}

export default Contact