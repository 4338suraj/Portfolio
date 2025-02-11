import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {CiLinkedin} from 'react-icons/ci';
import {FaGithub} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-5xl font-bold '>Contact</h1>
            <h3 className='text-sm md:-2xl font-normal'>Feel Free reach out!</h3>
        </div>
        <ul className='text-sm md:text-xl gap-6'>
            <li className='flex gap-2 items-center'>
                <MdOutlineEmail size={20}/>
                sr2160583@gmail.com
            </li>
            <li className='flex gap-2 items-center'>
                <CiLinkedin size={20}/>
                linkdin.com/username
            </li>
            <li className='flex gap-2 items-center'>
                <FaGithub size={20}/>
                github.com/username
            </li>
        </ul>

    </div>
  )
}
