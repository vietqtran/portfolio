import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SiMicrosoftsqlserver, SiRedux } from "react-icons/si";

const HardSkill = () => {
    const [ lineItems, setLineItems ] = useState([])
    useEffect(() => {
        const handleResize = () => {
            const elementText = document.getElementById('my-p-element-text');
            const elementCode = document.getElementById('my-p-element-code');
            let height = elementCode.clientHeight;
            let lineHeight = parseInt(getComputedStyle(elementCode).lineHeight);
            let lineNumber = Math.round(height / lineHeight);
            const lineElements = []
            lineElements.push(<span>&nbsp;&nbsp;&nbsp;</span>)
            lineElements.push(<span>&nbsp;&nbsp;&nbsp;</span>)
            for (let index = 0; index < lineNumber; index++) {
                lineElements.push(<span>&nbsp;&nbsp;&nbsp;</span>)
            }
            height = elementText.clientHeight;
            lineHeight = parseInt(getComputedStyle(elementText).lineHeight);
            lineNumber = Math.round(height / lineHeight);
            lineElements.push(<span>/**</span>)
            for (let index = 0; index < lineNumber; index++) {
                lineElements.push(<span>&nbsp;*</span>)
            }
            lineElements.push(<span>&nbsp;*/</span>)
            setLineItems(lineElements)
        }
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className='show-file relative grid h-full w-full place-items-start p-10 text-base'>
            <div className='hide-scrollbar absolute h-full w-full overflow-x-hidden overflow-y-scroll bg-slate-900'>
                <div className='sticky top-0 z-10 flex w-full items-center justify-between bg-slate-900 p-4 drop-shadow-lg'>
                    <div className='pl-3 text-sm'>
                        hard-skill.js
                    </div>
                    <div className='flex'>
                        <div className='mr-2 rounded-full bg-yellow-400 p-2'></div>
                        <div className='mr-2 rounded-full bg-red-500 p-2'></div>
                        <div className='mr-2 rounded-full bg-green-500 p-2'></div>
                    </div>
                </div>
                <div className='z-0 flex items-center p-4 pb-40'>
                    <div className='m-0 p-0'>
                        <div className='block'>
                            {lineItems.map((i, index) => {
                                return (
                                    <p className='flex' key={index}>
                                        <span className='mr-4 block w-[20px] text-right text-white text-opacity-60'>{index + 1}</span>
                                        {i} < br />
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='m-0 p-0'>
                        <p id='my-p-element-code' className='ml-5 block w-full translate-y-[-1px] whitespace-normal pr-5 text-white'>
                            <span className='text-pink-400'>const </span>
                            <span className='text-purple-400'>hardSkills</span>
                            <span className='text-pink-400'> = </span>{`[`}
                            <span className='text-yellow-200'> 'Entity Framework'</span><span>,</span>
                            <span className='text-yellow-200'> 'JWT Authentication'</span><span>,</span>
                            <span className='text-yellow-200'> 'Data'</span><span>,</span>
                            <span className='text-yellow-200'> 'System Architecture'</span><span>,</span>
                            <span className='text-yellow-200'> 'Build RESTful APIs'</span><span>,</span>
                            <span className='text-yellow-200'> 'Design Components' </span>{`];`}<br /><br />
                            <span className='text-pink-400'>export</span>
                            <span className='text-purple-400'> hardSkills</span>;
                        </p>
                        <br /> <br />
                        <p id='my-p-element-text' className='ml-5 block w-full translate-y-[-2px] whitespace-normal pr-10 lg:max-w-[70%]'>
                            During the development of web applications, I used
                            <Link href={'/projects'} className='inline text-purple-400 hover:underline'>
                                <span className='mx-2 inline-block translate-y-[2px]'>
                                    <SiRedux />
                                </span><span>Redux</span>
                            </Link> for state management for ReactJS applications.
                            This helps me better understand the concepts of state, actions, reducers in
                            <Link href={'/projects'} className='inline text-purple-400 hover:underline'>
                                <span className='mx-2 inline-block translate-y-[2px]'>
                                    <SiRedux />
                                </span><span>Redux</span>
                            </Link>. <br />
                            Besides, I also have experience in data analysis to support decision making and product feature development.
                            I can get data from a
                            <Link href={'/projects'} className='inline text-red-400 hover:underline'>
                                <span className='ml-2 mr-1 inline-block translate-y-[2px]'>
                                    <SiMicrosoftsqlserver />
                                </span><span>SQL Server </span>
                            </Link> database using <Link href={'/projects'} className='inline text-white hover:underline'>
                                <span>Entity Framework</span>
                            </Link> for data analysis and processing.
                            <br />
                            In projects, I have also applied <span> </span>
                            <Link href={'/projects'} className='inline text-white hover:underline'>
                                <span>Identity Framework</span>
                            </Link> and
                            <span> </span>
                            <Link href={'/projects'} className='inline text-white hover:underline'>
                                <span>JWT Authentication</span>
                            </Link>
                            <span> </span>
                            to build user login and authentication functions. <br />
                            In addition, I also have experience designing and building
                            <span> </span>
                            <Link href={'/projects'} className='inline text-white hover:underline'>
                                <span>RESTful APIs</span>
                            </Link>
                            <span> </span>
                            to provide endpoints for consuming clients. <br />
                            For front-end, I understand how to design and develop highly reusable components to build user interfaces. <br />
                            Regarding system architecture, I apply the n-layer model to separate layers such as persistence, business logic and presentation.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HardSkill