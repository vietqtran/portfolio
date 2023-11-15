import Image from 'next/image'
import React from 'react'

const API = () => {
    return (
        <div className=''>
            <Image className='h-[20px] w-[20px]' src={'/pl-icon/api.png'} width={48} height={48} alt='api' />
        </div>
    )
}

export default API