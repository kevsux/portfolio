import React from 'react'
import { webProjects, shadow } from '../index'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'


const WebProject = ({animation, ref}) => {

  return ( 
    <section ref={ref} className='h-full w-full flex justify-center flex-wrap gap-12 py-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#101834]'>
        {
          webProjects.map((item) => {
            const { id, img, title, demo } = item
            return (
                <motion.div
                  animate={animation}
                  key={id}
                  className='w-[250px] h-[250px] flex flex-col justify-center items-center py-6 rounded-xl'
                  style={{...shadow}}
                >
                <img 
                  src={img} 
                  alt="project"
                  width={200}
                  className='rounded-xl'
                />
                <div className='flex flex-col items-start w-[75%] mt-3'>
                  <span className='font-semibold text-lg'>{title}</span>
                  <span className='flex items-center gap-1 cursor-pointer'>{demo} <BsArrowRight/></span>
                </div>
              </motion.div>
            )
          })
        }
    </section>
  )
}

export default WebProject