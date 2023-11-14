import React from 'react'
import { useSelector } from 'react-redux'
import FileButton from './fileOpen/FileButton'

const AboutContent = () => {
    const files = useSelector(state => state.files)
    return (
        <div className='w-full flex-1 overflow-hidden'>
            <div className='flex h-[44px] max-w-full items-center justify-between overflow-hidden'>
                <div className='flex h-full'>
                    {files.values.map((f, i) => {
                        return <FileButton key={i} file={f} />
                    })}
                </div>
                <div className='h-full flex-1 border-b-[1px] border-b-gray-700'>

                </div>
            </div>
        </div>
    )
}

export default AboutContent