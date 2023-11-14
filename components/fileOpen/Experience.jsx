import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCsharp, SiMicrosoftsqlserver } from "react-icons/si";
import { DiDotnet } from "react-icons/di";

const Experience = () => {
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
            experience.js
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
              <span className='text-purple-400'>frontEnd</span>
              <span className='text-pink-400'> = </span>{`[`}
              <span className='text-yellow-200'>'ReactJS'</span><span>,</span>
              <span className='text-yellow-200'> 'NextJS'</span><span>,</span>
              <span className='text-yellow-200'>'Javascript'</span><span>,</span>
              <span className='text-yellow-200'>'Typescript' </span>{`];`} <br />
              <span className='text-pink-400'>const</span>
              <span className='text-purple-400'> backEnd </span>
              <span className='text-pink-400'>= </span>{`[`}
              <span className='text-yellow-200'> '.NET Framework'</span><span>,</span>
              <span className='text-yellow-200'>'RESTful API'</span> {`];`} <br />
              <span className='text-pink-400'>const</span>
              <span className='text-purple-400'> database </span>
              <span className='text-pink-400'>= </span>{`[`}
              <span className='text-yellow-200'>'SQL Server'</span> {`];`} <br /><br />
              <span className='text-pink-400'>export</span>
              <span className='text-pink-400'>const</span>
              <span className='text-purple-400'> experience</span>
              <span className='text-pink-400'> =</span> {`{`} <br />
              <span className='ml-8'>frontEnd</span>
              <span className='text-pink-400'>:</span>
              <span className='text-purple-400'>frontEnd</span><span>,</span><br />
              <span className='ml-8'>backEnd</span>
              <span className='text-pink-400'>:</span>
              <span className='text-purple-400'>backEnd</span><span>,</span><br />
              <span className='ml-8'>database</span>
              <span className='text-pink-400'>:</span>
              <span className='text-purple-400'>database</span><br />{`}`};
            </p>
            <br /> <br />
            <p id='my-p-element-text' className='ml-5 block w-full translate-y-[-2px] whitespace-normal pr-10 lg:max-w-[70%]'>
              With a passion for programming and a desire to work with many technologies, <br /> I have actively learned and approached many programming languages.
              <br /> I had the opportunity to work with
              <Link href={'/projects'} className='inline text-stone-500 hover:underline'>
                <span className='mx-2 inline-block translate-y-[2px]'>
                  <TbBrandNextjs />
                </span><span>NextJS </span>
              </Link>
              - a server-side web development framework based on
              <Link href={'/projects'} className='inline text-blue-400 hover:underline'>
                <span className='mx-2 inline-block translate-y-[2px]'>
                  <FaReact />
                </span><span>ReactJS</span>
              </Link>.
              This helps me better understand Server-side Rendering in modern web applications. <br />
              Besides, I also had the opportunity to develop web applications with
              <Link href={'/projects'} className='inline text-blue-400 hover:underline'>
                <span className='mx-2 inline-block translate-y-[2px]'>
                  <FaReact />
                </span><span>ReactJS</span>
              </Link>. <br /> Working with React helps me strengthen my knowledge of concepts such as state, props, components,...
              <br /> In addition, I also have programming experience with
              <Link href={'/projects'} className='inline text-pink-500 hover:underline'>
                <span className='mx-2 inline-block translate-y-[2px]'>
                  <SiCsharp />
                </span><span>C#</span>
              </Link>
              , Java and JavaScript/TypeScript. <br /> I have participated in building Back-end systems using
              <Link href={'/projects'} className='inline text-pink-500 hover:underline'>
                <span className='mx-2 inline-block translate-y-[2px]'>
                  <SiCsharp />
                </span><span>C#</span>
              </Link>,
              <Link href={'/projects'} className='inline text-purple-500 hover:underline'>
                <span className='ml-2 mr-1 inline-block translate-y-[2px]'>
                  <DiDotnet />
                </span><span>.NET Framework </span>
              </Link>
              and developing an
              <span> </span>
              <Link href={'/projects'} className='inline text-white hover:underline'>
                <span>RESTful API</span>
              </Link>
              .
              <br /> I also have experience working with
              <Link href={'/projects'} className='inline text-red-400 hover:underline'>
                <span className='ml-2 mr-1 inline-block translate-y-[2px]'>
                  <SiMicrosoftsqlserver />
                </span><span>SQL Server </span>
              </Link>
              databases through management software development projects.
              <br /> To see some more projects that I have done, you can refer here. Here I introduce in more detail projects using <Link href={'/projects'} className='inline text-blue-400 hover:underline'>
                <span className='mx-2 inline-block translate-y-[2px]'>
                  <FaReact />
                </span><span>ReactJS</span>
              </Link>,<Link href={'/projects'} className='inline text-stone-500 hover:underline'>
                <span className='mx-2 inline-block translate-y-[2px]'>
                  <TbBrandNextjs />
                </span><span>NextJS</span>
              </Link> and other technologies that I have had the opportunity to work with.
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Experience