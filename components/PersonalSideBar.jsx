import React, { useState } from 'react'
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai'
import FileChildSeCond from './FileChildSeCond'
import { BiLogoJavascript } from 'react-icons/bi'
import { TiArrowSortedDown } from 'react-icons/ti'
import ContactsSideBar from './ContactsSideBar'

const PersonalSideBar = () => {
    const [ drop, setDrop ] = useState(false)

    return (
        <>
            <div className='w-full'>
                <div
                    onClick={() => {
                        setDrop(prev => !prev)
                    }}
                    className='flex w-full cursor-pointer items-center border-b-[1px] border-b-gray-700 px-2 py-2 text-xs font-medium text-white'>
                    <span className={`scale-125 mr-2 translate-y-[1px] transition-all ease-linear duration-150 ${!drop ? 'rotate-[-90deg]' : ''}`}><TiArrowSortedDown /></span>
                    <span className='flex items-center'>
                        {!drop && <span className='ml-2 mr-3 scale-150'><AiFillFolder /></span>}
                        {drop && <span className='ml-2 mr-3 scale-150'><AiFillFolderOpen /></span>}
                        <span>personal-infor</span>
                    </span>
                </div>
                <div className={` w-full overflow-hidden ${!drop ? 'h-0' : 'h-auto border-b-[1px] border-b-gray-700'}`}>
                    <FileChildSeCond file={'work-experience.js'}>
                        <span className='mr-3 scale-150 text-xs'>
                            <BiLogoJavascript />
                        </span>
                        <span>work-experience.js</span>
                    </FileChildSeCond>
                    <FileChildSeCond file={'education.js'}>
                        <span className='mr-3 scale-150 text-xs'>
                            <BiLogoJavascript />
                        </span>
                        <span>education.js</span>
                    </FileChildSeCond>
                </div>
            </div>
            <ContactsSideBar />
        </>
    )
}

export default PersonalSideBar