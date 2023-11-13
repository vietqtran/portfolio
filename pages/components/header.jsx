import Link from 'next/link'
import React from 'react'

const Header = ({ tab }) => {
    return (
        <div className='w-full h-[44px] border-b-[1px] border-b-gray-700 flex items-center justify-between'>
            <div className='flex items-center h-full'>
                <div className='hover:bg-opacity-10 flex items-center justify-start h-full w-[300px] pl-5 md:border-r-[1px] md:border-r-gray-700'>
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
            <div className={`${tab === 'contact' ? 'tab-selected' : ''} hover:bg-white md:flex hidden hover:text-white cursor-pointer hover:bg-opacity-10  items-center justify-center h-full border-l-[1px] border-l-gray-700`}>
                <Link className='px-7 py-2' href={'/contact'}>
                    _contact
                </Link>
            </div>
        </div>
    )
}

export default Header