import React from 'react'
import { useDispatch } from 'react-redux'
import { addFile } from '../actions/fileActions'

const FileChildSeCond = ({ children, file }) => {

    const dispatch = useDispatch()
    const addFileToView = (file) => {
        dispatch(addFile(file))
    }

    return (
        <div
            className='cursor-pointer text-xs text-white hover:bg-white hover:bg-opacity-10'>
            <span
                onClick={() => {
                    addFileToView(file)
                }}
                className='relative flex items-center py-[6px] pl-9'>
                {children}
            </span>
        </div>
    )
}

export default FileChildSeCond