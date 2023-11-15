import Image from 'next/image'
import React from 'react'

const Tailwind = () => {
    return (
        <div className=''>
            <Image className='h-[20px] w-[20px]' src={'/pl-icon/tailwind.svg'} width={48} height={48} alt='tailwind' />
        </div>
    )
}

export default Tailwind