import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import php from '../assets/php.png'
import mysql from '../assets/mysql.png'
import './Technologies.css'

const Technologies = () => {
  const techs = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: reactImage,
        title: 'React',
        style: 'shadow-sky-400'
    },
    {
        id: 5,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-teal-400'
    },
    {
        id: 6,
        src: github,
        title: 'GitHub',
        style: 'shadow-white'
    },
    {
        id: 7,
        src: php,
        title: 'PHP',
        style: 'shadow-indigo-300'
    },
    {
        id: 8,
        src: mysql,
        title: 'MySQL',
        style: 'shadow-cyan-600'
    }
  ]

  return (
    <div name='technologies' className='bg-gradient-to-b from-black to-gray-500 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-9 flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8 mt-20'>
                <p className='text-4xl font-bold border-b-4 p-2 inline border-gray-300 text-gray-300'>Technologies</p>
                <p className='py-6'>These are the technologies I have worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0'>
                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className='w-20 mx-auto mb-4'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Technologies