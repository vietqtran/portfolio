import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='flex h-[44px] w-full items-center justify-between border-t-[1px] border-t-gray-700'>
            <div className='flex h-full'>
                <div className='grid h-full place-items-center border-r-[1px] border-r-gray-700 px-5'>find_me_in:</div>
                <div className='footer-link'>
                    <Link href={'https://www.facebook.com/khong.phai.quoc.viet/'} className='flex h-full items-center px-5'>
                        <FaFacebookF />
                    </Link>
                </div>
                <div className='footer-link'>
                    <Link href={'https://www.instagram.com/vietq.tran/'} className='flex h-full items-center px-5'>
                        <FaInstagram />
                    </Link>
                </div>
                <div className='footer-link'>
                    <Link href={'https://github.com/vietqtran'} className='flex h-full items-center px-5'>
                        <FaGithub />
                    </Link>
                </div>
            </div>
            <div className='grid h-full place-items-center border-l-[1px] border-l-gray-700 hover:bg-white hover:bg-opacity-10 hover:text-white'>
                <Link href={'https://github.com/vietqtran'} className='hidden h-full items-center px-5 sm:flex'>
                    <span className='mr-3'>@vietqtran</span> <FaGithub />
                </Link>
            </div>
        </div>
    )
}

export default Footer