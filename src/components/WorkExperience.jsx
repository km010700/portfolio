import React from 'react'

const WorkExperience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-gradient-to-b from-gray-600 to-black text-white'>
        <div className='max-w-screen-lg p-9 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300'>Work Experience</p>
            </div>

            <p className='text-2xl mt-10 font-bold text-slate-300'>WordPress Developer & SEO Specialist</p>

            <p className='text-xl mt-2 italic'>Aura Innovations Pvt Ltd.</p>

             <p className='mt-2 text-slate-300 font-semibold'>July 2023 – Present</p>
             <p className='text-xl mt-2'>As a WordPress Developer at Aura Innovations Pvt. Ltd, I am responsible for developing custom WordPress themes and plugins to elevate website functionality and user experience. My role extends beyond development, as I actively engage in keyword research and on-page SEO strategies to optimize website content for search engines. By monitoring website performance metrics and implementing technical SEO improvements, I have successfully increased organic search traffic, driving meaningful results for our clients. My commitment to excellence and passion for innovation drive me to constantly push the boundaries of web development, ensuring that every project surpasses expectations and delivers tangible value.</p>
        </div>
    </div>
  )
}

export default WorkExperience