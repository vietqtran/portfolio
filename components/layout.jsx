import React from 'react'
import Video from './Video'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    const pathname = useRouter().pathname
    const tab = pathname.replace(/^\//, "");
    return (
        <main
            className="relative h-[100vh] w-[100vw] overflow-hidden"
        >
            <Video src="/StarBackground.mp4" />
            <div className='h-full w-full p-3 sm:p-10'>
                <div className="flex h-full w-full flex-col justify-between rounded-lg border-[1px] border-gray-700 bg-black bg-opacity-30 shadow-lg backdrop-blur-sm">
                    <Header tab={tab} />
                    {children}
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default Layout