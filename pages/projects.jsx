import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '../actions/projectAction'
import { BsCheck } from 'react-icons/bs'
import { projects } from '../projectsData'
import ProjectCard from '../components/ProjectCard'
import Javascript from '../components/tech/Javascript'
import Typescript from '../components/tech/Typescript'
import ReactJS from '../components/tech/ReactJS'
import NextJS from '../components/tech/NextJS'
import CSharp from '../components/tech/CSharp'
import DotNet from '../components/tech/DotNet'
import Java from '../components/tech/Java'
import SQLServer from '../components/tech/SQLServer'
import MongoDB from '../components/tech/MongoDB'
import Postgre from '../components/tech/Postgre'
import API from '../components/tech/API'
import Tailwind from '../components/tech/Tailwind'
import Head from 'next/head'

const Projects = () => {
    const selected = useSelector(state => state.project.values)
    const dispatch = useDispatch()

    return (
        <Fragment>
            <Head>
                <title>Projects</title>
            </Head>
            <Layout>
                <div className='z-[-1] flex h-[calc(100%-88px)] flex-1'>
                    <div className='hidden h-full w-[300px] border-r-[1px] border-r-gray-700 pb-12 md:block'>
                        <div className='border-b-[1px] border-b-gray-700 p-2'>
                            categories
                        </div>
                        <div className='hide-scrollbar h-full w-full overflow-y-auto'>
                            <div
                                onClick={() => {
                                    dispatch(addProject('js'))
                                }}
                                className={`${selected.includes('js') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('js') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><Javascript /></span>
                                <span>Javascript</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('ts'))
                                }}
                                className={`${selected.includes('ts') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('ts') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><Typescript /></span>
                                <span>Typescript</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('react'))
                                }}
                                className={`${selected.includes('react') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('react') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><ReactJS /></span>
                                <span>ReactJS</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('next'))
                                }}
                                className={`${selected.includes('next') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('next') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><NextJS /></span>
                                <span>NextJS</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('cs'))
                                }}
                                className={`${selected.includes('cs') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('cs') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><CSharp /></span>
                                <span>C#</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('net'))
                                }}
                                className={`${selected.includes('net') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('net') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><DotNet /></span>
                                <span>.NET Framework</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('java'))
                                }}
                                className={`${selected.includes('java') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('java') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><Java /></span>
                                <span>Java</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('sql'))
                                }}
                                className={`${selected.includes('sql') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('sql') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><SQLServer /></span>
                                <span>SQL Server</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('mdb'))
                                }}
                                className={`${selected.includes('mdb') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('mdb') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><MongoDB /></span>
                                <span>MongoDB</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('posg'))
                                }}
                                className={`${selected.includes('posg') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('posg') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><Postgre /></span>
                                <span>Postgre SQL</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('api'))
                                }}
                                className={`${selected.includes('api') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('api') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><API /></span>
                                <span>REStful API</span>
                            </div>
                            <div
                                onClick={() => {
                                    dispatch(addProject('tailwind'))
                                }}
                                className={`${selected.includes('tailwind') ? 'text-white' : ''} flex items-center justify-start p-3`}>
                                <button className={`relative rounded-sm border-[1px] bg-transparent p-[6px]`}>
                                    <span className={`${selected.includes('tailwind') ? 'block' : 'hidden'} absolute left-0 top-0 h-full w-full bg-white text-sm text-black `}><BsCheck /></span>
                                </button>
                                <span className='ml-4 mr-2'><Tailwind /></span>
                                <span>Tailwind CSS</span>
                            </div>
                        </div>
                    </div>
                    <div className='hide-scrollbar flex h-full flex-1 flex-wrap justify-around gap-6 overflow-scroll p-5 md:p-10 lg:p-20'>
                        {projects.map((p, i) => {
                            let check = true
                            selected.forEach((s) => {
                                if (!p.techs.includes(s)) {
                                    check = false
                                }
                            })
                            if (check === false) {
                                return null
                            }
                            return <ProjectCard project={p} key={p.id} />
                        })}
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

export default Projects