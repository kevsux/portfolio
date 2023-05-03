import React from 'react'
import Sidebar from './Sidebar'
import { CiLocationArrow1 } from 'react-icons/ci'
import Profile from '../assets/profile.png'
import { CustomButton } from './CustomButton'
import { Typewriter } from 'react-simple-typewriter'
import PhoneNavButton from './PhoneNavButton'

const Hero = () => {

    const shadow = {
        boxShadow: '0 0 20px black'
    }

  return (
    <section className='flex h-[90vh]' id='hero'>

            <PhoneNavButton/>

            <Sidebar className='flex items-center flex-col w-10 h-[50vh] justify-evenly fixed md:visible invisible'/>
            
        <aside className='h-full w-full md:flex md:flex-row flex flex-col-reverse justify-end md:gap-6 gap-y-10'>

            <div className='md:w-1/2 flex flex-col  md:items-start items-center justify-center md:px-20 md:gap-2 gap-y-5'>
                <h1 className='md:text-5xl text-3xl text-center'>Kevin Romero👋</h1>
                <h1 className='text-xl w-full text-center flex items-center gap-1'>
                    <span className='border-[0.5px] border-black/30 md:w-20 w-12 rounded-full'/>
                    <span className='md:text-lg text-base'>
                        &nbsp;
                        <Typewriter 
                        words={["Software Engineer", "Web Developer", 'Front End Developer', 'UI/UX Designer']}
                        loop={true}
                        />
                    </span>
                    
                </h1>
                <p className='text-gray-500/80 md:text-lg text-justify text-base'>I'm a prospective Software Engineer from the Philippines who is still a student at Quezon City University. I'm really interested in Web development.</p>
                
                <CustomButton 
                title={'Say Hello'}
                icons={<CiLocationArrow1 className='text-2xl'/>}
                />

            </div>

            <div className='md:w-1/2 flex items-center justify-center'>
                <img 
                src={Profile}   
                alt="Profile" 
                className='animated-profile bg-black w-[70%] '
                style={{...shadow}}
                />
            </div>

        </aside>
    </section>
  ) 
}

export default Hero