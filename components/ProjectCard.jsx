import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Javascript from './tech/Javascript'
import Typescript from './tech/Typescript'
import ReactJS from './tech/ReactJS'
import NextJS from './tech/NextJS'
import CSharp from './tech/CSharp'
import DotNet from './tech/DotNet'
import Java from './tech/Java'
import SQLServer from './tech/SQLServer'
import MongoDB from './tech/MongoDB'
import Postgre from './tech/Postgre'
import API from './tech/API'
import Tailwind from './tech/Tailwind'

const ProjectCard = ({ project }) => {
    return (
        <div className='show-to-top relative h-fit w-full overflow-hidden rounded-lg bg-slate-900 md:w-[45%] lg:w-[30%]'>
            <div className='h-[150px] w-full'>
                <Image className='h-full w-full object-cover' src={`/projects_image/${project.img}`} width={500} height={500} alt='project' />
            </div>
            <div className='p-5 text-sm'>
                <p className='block'>{project.des}</p>
            </div>
            <div className='flex px-4 pb-4'>
                {project.techs.map((t) => {
                    switch (t) {
                        case 'js':
                            return <Javascript />
                        case 'ts':
                            return <Typescript />
                        case 'react':
                            return <ReactJS />
                        case 'next':
                            return <NextJS />
                        case 'cs':
                            return <CSharp />
                        case 'net':
                            return <DotNet />
                        case 'java':
                            return <Java />
                        case 'sql':
                            return <SQLServer />
                        case 'mongo':
                            return <MongoDB />
                        case 'postgre':
                            return <Postgre />
                        case 'api':
                            return <API />
                        case 'tailwind':
                            return <Tailwind />
                    }
                })}
            </div>
            <div className='pb-5 pl-4'>
                <Link href={project.url} className='block w-fit rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600'>View project</Link>
            </div>
        </div>
    )
}

export default ProjectCard