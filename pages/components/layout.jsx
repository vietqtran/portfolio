import Link from 'next/link'
import React from 'react'
import Video from './Video'
import Header from './header'
import Footer from './footer'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const pathname = useRouter().pathname
    const tab = pathname.replace(/^\//, "");
    return (
        <main
            className="w-[100vw] h-[100vh] overflow-hidden relative"
        >
            <Video src="/StarBackground.mp4" />
            <div className='w-full h-full p-10'>
                <div className="flex justify-between flex-col bg-black w-full h-full bg-opacity-30 shadow-lg backdrop-blur-sm rounded-lg border-[1px] border-gray-700">
                    <Header tab={tab} />
                    {children}
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default Layout