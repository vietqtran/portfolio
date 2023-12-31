import Image from 'next/image'
import React from 'react'

const StartUp = () => {
    return (
        <div className='show-file hide-scrollbar flex h-[calc(100%-88px)] w-full flex-col items-center overflow-y-scroll md:flex-row md:items-center md:justify-center'>
            <div className='col-span-2 px-5 md:w-1/2 lg:px-10'>
                <p className='block pb-10 pt-5 text-sm text-white md:text-base'>
                    Hello! My name is Viet, a future programmer pursuing my passion for programming languages. <br />
                    With an optimistic personality and always trying my best every day,
                    I believe that I will achieve my goal of becoming a professional programmer. <br />
                    I hope to be able to contribute to creating useful technology products,
                    bringing the best experience to users. <br />
                    To learn more about yourself, your past projects, and your programming skills,
                    please see the introduction section on the sidebar. <br />
                    We look forward to connecting and collaborating with everyone!
                </p>
            </div>
            <div className='col-span-2 rounded-lg px-3 lg:px-10'>
                <Image priority src="/meme.jpg" className='h-auto sm:w-[300px] lg:w-[400px]' alt="" width={500} height={500} />
            </div>
        </div>
    )
}

export default StartUp