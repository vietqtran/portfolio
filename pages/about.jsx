import React, { Fragment, useState } from 'react'
import Layout from '../components/Layout'
import AboutSideBar from '../components/aboutPage'
import AboutContent from '../components/aboutContent'
import Head from 'next/head'

const About = () => {
    return (
        <Fragment>
            <Head>
                <title>About</title>
            </Head>
            <Layout>
                <div className='flex h-full w-full flex-1'>
                    <AboutSideBar />
                    <AboutContent />
                </div>
            </Layout>
        </Fragment>
    )
}

export default About