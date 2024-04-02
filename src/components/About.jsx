import React from 'react'
import './About.css'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-600 to-black text-white'>
        <div className='max-w-screen-lg p-9 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300'>About</p>
            </div>

            <p className='text-xl mt-10 text-center md:text-left'>I am an experienced WordPress Developer based in Sri Lanka, dedicated to pushing the boundaries of web development and SEO optimization. With a Bachelor's degree in Business Information Systems and a Higher Diploma in Computing and Software Engineering, I bring a unique blend of technical expertise and creative flair to every project.</p>

            <br/>

             <p className='text-xl mt-10 text-center md:text-left'>My journey in the digital realm has equipped me with the skills to develop custom WordPress themes and plugins, conduct comprehensive keyword research, and implement on-page SEO strategies to enhance website performance. I thrive in dynamic environments, leveraging my analytical mindset and strong communication skills to deliver results that exceed expectations. Let's collaborate to elevate your online presence and drive meaningful engagement.</p>
        </div>
    </div>
  )
}

export default About