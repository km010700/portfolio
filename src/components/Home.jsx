import React from 'react'
import Hero from '../assets/hero.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
import './Home.css'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
            <div className='flex flex-col mt-28 md:mt-0 justify-center h-full md:mr-4'>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-300 md:text-left'>
                    I am a WordPress Developer & SEO Specialist.
                </h2>
                <p className='text-white py-4 max-w-md md:text-left mx-auto md:mx-0'>I am an experienced WordPress Developer specializing in crafting visually stunning and highly functional websites optimized for SEO. With expertise in HTML, CSS, and Javascript. I create responsive designs that captivate users and drive traffic. Explore my portfolio to see the fusion of creativity and technical prowess defining my work.</p>

                <div className='text-center md:text-left mx-auto md:mx-0'>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div className='mt-8 md:mt-0 mx-auto md:mx-0 w-full md:w-1/2'>
                <img src={Hero} alt='my profile' className='rounded-2xl mx-auto w-full md:w-auto max-w-sm'/>
            </div>
        </div>
    </div>
  )
}

export default Home