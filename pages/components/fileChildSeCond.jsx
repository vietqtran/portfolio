import React, { useState } from 'react'
import { AiOutlineFile } from 'react-icons/ai'
const FileChildSeCond = ({ children }) => {
    const [ drop, setDrop ] = useState(false)

    return (
        <div
            onClick={() => setDrop(prev => !prev)}
            className='cursor-pointer py-1 pl-9 text-xs text-white hover:bg-white hover:bg-opacity-10'>
            <span className='relative flex items-center'>
                <span className='mr-3 scale-150 text-xs'><AiOutlineFile /></span>
                {children}
            </span>
        </div>
    )
}

export default FileChildSeCond