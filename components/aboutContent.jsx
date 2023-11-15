import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FileButton from './fileOpen/FileButton'
import HardSkill from './fileOpen/HardSkill'
import Experience from './fileOpen/Experience'
import SoftSkill from './fileOpen/SoftSkill'
import StartUp from './fileOpen/StartUp'
import WorkExperience from './fileOpen/WorkExperience'
import Education from './fileOpen/Education'
import Email from './fileOpen/Email'
import Phone from './fileOpen/Phone'
import Music from './fileOpen/Music'
import Games from './fileOpen/Games'


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
            {files.selecting === 'work-experience.js' && <WorkExperience />}
            {files.selecting === 'education.js' && <Education />}
            {files.selecting === 'email.txt' && <Email />}
            {files.selecting === 'phone.txt' && <Phone />}
            {files.selecting === 'games.js' && <Games />}
            {files.selecting === 'music.js' && <Music />}
        </div>
    )
}

export default AboutContent