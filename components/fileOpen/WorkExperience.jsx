import React, { useEffect, useState } from 'react'

const WorkExperience = () => {
    const [ lineItems, setLineItems ] = useState([])
    useEffect(() => {
        const handleResize = () => {
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
                        work-experience.js
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
                            <span className='text-purple-400'>{`workExperience`}</span>
                            <span className='text-pink-400'> = </span>{`[`} <br />
                            <span className='ml-10 text-pink-400'>{`{`}</span><br />
                            <span className='ml-20 text-white'>from</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'Jun, 2021'</span>,<br />
                            <span className='ml-20 text-white'>to</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'current'</span>,<br />
                            <span className='ml-20 text-white'>company</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-purple-400'>null</span>,<br />
                            <span className='ml-20 text-white'>on_position</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-purple-400'>null</span>,<br />
                            <span className='ml-20 text-white'>work_task</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'Self-study'</span>,<br />
                            <span className='ml-20 text-white'>technologies</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-cyan-400'>{`[`}</span>
                            <span className="text-yellow-200"> 'Java'</span>,
                            <span className="text-yellow-200"> '.NET'</span>,
                            <span className="text-yellow-200"> 'ReactJS'</span>,
                            <span className="text-yellow-200"> 'NextJS'</span>,
                            <span className="text-yellow-200"> 'SQL Server'</span>
                            <span className='text-cyan-400'> {`]`}</span><br />
                            <span className='ml-10 text-pink-400'>{`}`}</span>, <br />
                            <span className='ml-10 text-pink-400'>{`{`}</span><br />
                            <span className='ml-20 text-white'>from</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'Sep, 2023'</span>,<br />
                            <span className='ml-20 text-white'>to</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'current'</span>,<br />
                            <span className='ml-20 text-white'>company</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'Rikkei Soft'</span>,<br />
                            <span className='ml-20 text-white'>on_position</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'Intern'</span>,<br />
                            <span className='ml-20 text-white'>work_task</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-yellow-200'>'Front-end Developer'</span>,<br />
                            <span className='ml-20 text-white'>technologies</span>
                            <span className='text-pink-400'>: </span>
                            <span className='text-cyan-400'>{`[`}</span>
                            <span className="text-yellow-200"> 'ReactJS'</span>,
                            <span className='text-cyan-400'> {`]`}</span><br />
                            <span className='ml-10 text-pink-400'>{`}`}</span>
                            <br />{`]`} <br /> <br />
                            <span className='text-pink-400'>export </span>
                            <span className='text-purple-400'>{`workExperience`}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WorkExperience