import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'



const Aboute = () => {
    return (
        <div id='Aboute' className='text-white md:flex overflow-x-hidden items-center md:justify-center bg-black shadow-xl
                        mx-0 md:mx-20 bg-opacity-300 rounded-lg'>
            <div>

                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img className=' h-[30rem] w-[35rem] p-10 rounded-2xl' src="/public/image.png" alt="Aboute" />

                    <div className='w-1/2 p-10 flex flex-col gap-8 '>
                        <h2 className='text-2xl md:text-4xl font-bold text-center'>Aboute</h2>
                        <IoMdArrowForward size={30} className='mt-1' />
                        <span className='w-[45rem]'>
                            <h1 className='text-xl md:font-bold leadinf-normal'>FrontEnd developer</h1>
                            <p className=' md:text-xl leading-tight mt-[2rem]'>I am 22 year old aspiring FrontEnd Developer,current in my final year of B.C.A in Longowal  accadmy college dera bassi.
                                Hailing from the vibrant city of chandigarh in punjab,india. I have a strong passing for  programming.My journey in the world
                                of teachnology has led me to delve deep into projects involing React,javaQurey and the use of powerful libraries likes
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aboute