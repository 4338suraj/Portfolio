import React from 'react'
import { ProjectCard } from './ProjectCard'

const Project = () => {
    return (
        <div id='project' className='p-10 md:p-24 text-white'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
            <div className='flex flex-wrap gap-3 mt-[2rem]'>
                <ProjectCard title="Todo List"
                    main="This Todo list,built with Html,Tailwind css and Javascript allows usig..." />

                <ProjectCard title="Weather App"
                    main="This Weather App,built with Html,Tailwind css and Javascript allows usig..." />

                <ProjectCard title="Portfolio"
                    main="This Parsnal Portfolio,built with Html,Tailwind css,Javascript and React allows usig..." />

                { <ProjectCard title="Spotify Clone"
                    main="This Spotify Clone ,built with Html,Tailwind css, allows usig..." /> }
            </div>
        </div>
    )
}

export default Project