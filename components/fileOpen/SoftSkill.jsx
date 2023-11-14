import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCsharp, SiMicrosoftsqlserver, SiRedux } from "react-icons/si";
import { DiDotnet } from "react-icons/di";

const SoftSkill = () => {
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
                        soft-skill.js
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
                            <span className='text-purple-400'>softSkills</span>
                            <span className='text-pink-400'> = </span>{`[`}
                            <span className='text-yellow-200'> 'Teamwork'</span><span>,</span>
                            <span className='text-yellow-200'> 'Active Learning' </span>{`];`}<br /><br />
                            <span className='text-pink-400'>export</span>
                            <span className='text-purple-400'> softSkills</span>;
                        </p>
                        <br /> <br />
                        <p id='my-p-element-text' className='ml-5 block w-full translate-y-[-2px] whitespace-normal pr-10 lg:max-w-[70%]'>
                            I always value cultivating soft skills for personal development. <br />
                            I realize that communication skills are extremely important. <br />
                            I can communicate effectively to convey ideas and listen and understand the perspectives of others.
                            In addition, I am also sociable and easily cooperative, and can work effectively in groups. <br />
                            I believe that each team member has their own strengths and when combined, the team will achieve the best results. <br />
                            Besides, I always voluntarily explore and learn to improve my knowledge and professional skills.
                            I have a desire to absorb valuable knowledge and experience from colleagues. <br />
                            Finally, I am always aware of the importance of being on time, not only at work but also in life.
                            I believe that punctuality shows respect for others.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SoftSkill