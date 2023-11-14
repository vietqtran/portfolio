import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FileButton from './fileOpen/FileButton'
import Professional from './fileOpen/Professional'
import HardSkill from './fileOpen/HardSkill'
import Experience from './fileOpen/Experience'
import SoftSkill from './fileOpen/SoftSkill'
import StartUp from './fileOpen/StartUp'
import LazyLoad from 'react-lazyload'


const AboutContent = () => {
    const files = useSelector(state => state.files)
    useEffect(() => {
        console.log(files.selecting)
    }, [ files.selecting ])
    return (
        <div className='h-full w-full flex-1 overflow-hidden py-0'>
            <div className='flex h-[44px] max-w-full items-center justify-between overflow-hidden'>
                <div className='flex h-full'>
                    {files.values.map((f, i) => {
                        return <FileButton key={i} file={f} />
                    })}
                </div>
                <div className='h-full flex-1 border-b-[1px] border-b-gray-700'></div>
            </div>
            {files.selecting === '_startup' && <StartUp />}
            {files.selecting === 'hard-skills.js' && <HardSkill />}
            {files.selecting === 'soft-skills.js' && <SoftSkill />}
            {files.selecting === 'experience.js' && <Experience />}
            {files.selecting === 'index.js ./pro...' && <Professional />}
        </div>
    )
}

export default AboutContent