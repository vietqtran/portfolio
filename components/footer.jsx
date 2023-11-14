import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-[44px] border-t-[1px] border-t-gray-700 flex items-center justify-between'>
            <div className='h-full flex'>
                <div className='grid place-items-center px-5 h-full border-r-[1px] border-r-gray-700'>find_me_in:</div>
                <div className='footer-link'>
                    <Link href={'https://www.facebook.com/khong.phai.quoc.viet/'} className='flex items-center px-5 h-full'>
                        <FaFacebookF />
                    </Link>
                </div>
                <div className='footer-link'>
                    <Link href={'https://www.instagram.com/vietq.tran/'} className='flex items-center px-5 h-full'>
                        <FaInstagram />
                    </Link>
                </div>
                <div className='footer-link'>
                    <Link href={'https://github.com/vietqtran'} className='flex items-center px-5 h-full'>
                        <FaGithub />
                    </Link>
                </div>
            </div>
            <div className='hover:bg-white hover:text-white hover:bg-opacity-10 grid place-items-center h-full border-l-[1px] border-l-gray-700'>
                <Link href={'https://github.com/vietqtran'} className=' items-center px-5 h-full sm:flex hidden'>
                    <span className='mr-3'>@vietqtran</span> <FaGithub />
                </Link>
            </div>
        </div>
    )
}

export default Footer