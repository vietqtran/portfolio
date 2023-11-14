import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addFile, deleteFile } from '../../actions/fileActions';

const FileButton = ({ file }) => {
    const dispatch = useDispatch()
    const files = useSelector(state => state.files)

    return (
        <div onClick={() => {
            dispatch(addFile(file))
        }} className={` hover:text-white h-full border-r-[1px] border-r-gray-700 relative
         ${files.selecting !== file ? 'border-b-[1px] border-b-gray-700 hover:bg-slate-400 hover:bg-opacity-20' : 'text-white before:contents[] before:absolute before:w-full before:h-[2px] before:bg-white before:top-0 before:left-0 '}`}>
            <div className='group grid h-full cursor-pointer place-items-center px-4'>
                <span className='flex items-center'>
                    <span className='whitespace-nowrap'>{file}</span>
                    <span
                        onClick={(e) => {
                            e.stopPropagation()
                            dispatch(deleteFile(file))
                        }}
                        className={`ml-3 rounded-sm bg-gray-200 bg-opacity-0 p-[2px] ${files.selecting === file ? 'opacity-100' : 'opacity-0'}  hover:bg-opacity-20 group-hover:opacity-100`}><IoCloseOutline /></span>
                </span>
            </div>
        </div>
    )
}

export default FileButton