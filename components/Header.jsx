import Link from 'next/link'
import React, { useState } from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Header = ({ tab }) => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false)
    return (
        <div className='relative z-50 flex h-[44px] w-full items-center justify-between border-b-[1px] border-b-gray-700'>
            <div className='flex h-full items-center'>
                <div className='flex h-full w-[300px] items-center justify-start pl-5 hover:bg-opacity-10 md:border-r-[1px] md:border-r-gray-700'>
                    _vietqtran
                </div>
                <div className={`${tab === '' ? 'tab-selected' : ''} header-link`}>
                    <Link className='px-7 py-2' href={'/'}>
                        <span>  _hello</span>
                    </Link>
                </div>
                <div className={`${tab === 'about' ? 'tab-selected' : ''} header-link`}>
                    <Link className='px-7 py-2' href={'/about'}>
                        <span>  _about-me</span>
                    </Link>
                </div>
                <div className={`${tab === 'projects' ? 'tab-selected' : ''} header-link`}>
                    <Link className='px-7 py-2' href={'projects'}>
                        <span>_my-projects</span>
                    </Link>
                </div>
            </div>
            <div
                onClick={() => { setShowMobileMenu(!showMobileMenu) }}
                className='block cursor-pointer p-3 md:hidden'>
                {!showMobileMenu && <HiMiniBars3BottomRight />}
                {showMobileMenu && <IoClose />}
            </div>
            <div className={`${tab === 'contact' ? 'tab-selected' : ''} hover:bg-white md:flex hidden hover:text-white cursor-pointer hover:bg-opacity-10  items-center justify-center h-full border-l-[1px] border-l-gray-700`}>
                <Link className='px-7 py-2' href={'/contact'}>
                    _contact
                </Link>
            </div>

            {showMobileMenu && <div className='absolute left-0 top-[100%] h-[100vh] w-full bg-slate-900'>
                <div className='border-b-[1px] border-b-gray-700'>
                    <Link href={'/'} className='block w-full px-5 py-3'>
                        _hello
                    </Link>
                </div>
                <div className='border-b-[1px] border-b-gray-700'>
                    <Link href={'/about'} className='block w-full px-5 py-3'>
                        _about
                    </Link>
                </div>
                <div className='border-b-[1px] border-b-gray-700'>
                    <Link href={'/projects'} className='block w-full px-5 py-3'>
                        _projects
                    </Link>
                </div>
                <div className='border-b-[1px] border-b-gray-700'>
                    <Link href={'/contact'} className='block w-full px-5 py-3'>
                        _contact
                    </Link>
                </div>
            </div>}
        </div>
    )
}

export default Header