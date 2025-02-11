import React from 'react'
import myImge from '../assets/avatar.webp'
import { TextChange } from '../TextChange'


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4  md:pt-10'>
        <h1 className='text-3xl md:text-6xl flex font-semibold leading-normal tracking-tighter'><TextChange/></h1>
        <h3 className='text-2xl md:text-4xl flex font-bold leading-normal tracking-tighter'>FrontEnd Developer </h3>
        <p className='text-sm md:text-2xl tracking-tight'>This is my pontfolio Website to showcare my all works related to ui desgin and web development..</p>
        <a href='/SURAJ_SHAH-_cv (4).pdf' className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:px-4 hover:opacity-85
        duraction-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' download >Download Cv </a>
      </div>
      <div>
        <img className='h-[25rem] w-[25rem]' src={myImge} alt="" />
      </div>
    </div>
  )
}

export default Home;