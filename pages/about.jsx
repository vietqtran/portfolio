import React, { useState } from 'react'
import Layout from './components/layout'
import AboutSideBar from './components/aboutPage'
import AboutContent from './components/aboutContent'

const about = () => {

    const [ openedTab, setOpenedTab ] = useState('')

    return (
        <Layout>
            <div className='flex h-full w-full flex-1'>
                <AboutSideBar />
                <AboutContent />
            </div>
        </Layout>
    )
}

export default about