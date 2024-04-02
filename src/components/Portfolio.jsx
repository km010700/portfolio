import React from 'react'
import AnnaiHomeCare from '../assets/portfolio/annaihomecare.png'
import PortfolioKasthu from '../assets/portfolio/portfolioKasthu.png'
import QSGS from '../assets/portfolio/qsgs.png'
import Aids from '../assets/portfolio/aids.png'
import './Portfolio.css'

const Portfolio = () => {
  const portfolios = [
    {
        id: 1,
        src: Aids,
        title: 'National AIDs/STD Control Programme',
        text: 'In this project, I leveraged MySQL, PHP and CSS to achieve the desired outcomes.'
    },
    {
        id: 2,
        src: QSGS,
        title: 'Quick Stop Grocery Store',
        text: 'This project was done as a group and we used technologies like MySQL, PHP and CSS.'
    },
    {
        id: 3,
        src: AnnaiHomeCare,
        title: 'Annai Home Care',
        text: 'This project was executed using WordPress, catering a residence located in Jaffna, Sri Lanka.'
    },
    {
        id: 4,
        src: PortfolioKasthu,
        title: 'Portfolio',
        text: 'This portfolio was fully coded in ReactJS and Tailwind CSS.'
    }
]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-600 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-9 mx-auto flex flex-col justify-center md:screen'>
            <div className='pb-8 mt-32'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300'>Porfolio</p>
                <p className='py-6'>Welcome to my portfolio, where innovation meets functionality.</p>
            </div>

            <div className='card-container'>
                {
                    portfolios.map(({id, src, title, text}) => (
                        <div key={id} className='card'>
                    <img src={src} alt='' className='card-img'/>
                    <div className='card-info'>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio