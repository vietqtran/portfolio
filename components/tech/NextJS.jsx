import Image from 'next/image'
import React from 'react'

const NextJS = () => {
    return (
        <div className=''>
            <Image className='h-[20px] w-[20px]' src={'/pl-icon/next.svg'} width={48} height={48} alt='next' />
        </div>
    )
}

export default NextJS