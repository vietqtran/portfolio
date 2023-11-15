import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import moment from 'moment'
import Head from 'next/head'

const contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ lineItems, setLineItems ] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
    }

    useEffect(() => {
        const handleResize = () => {
            const elementCode = document.getElementById('my-p-element-code');
            let height = elementCode.clientHeight;
            let lineHeight = parseInt(getComputedStyle(elementCode).lineHeight);
            let lineNumber = Math.round(height / lineHeight);
            const lineElements = []
            lineElements.push(<span>&nbsp;&nbsp;&nbsp;</span>)
            lineElements.push(<span>&nbsp;&nbsp;&nbsp;</span>)
            for (let index = 0; index < lineNumber; index++) {
                lineElements.push(<span>&nbsp;&nbsp;&nbsp;</span>)
            }
            setLineItems(lineElements)
            console.log('oke')
        }
        handleResize()
    }, [ name, email, message ]);


    return (
        <Fragment>
            <Head>
                <title>Contact</title>
            </Head>
            <Layout>
                <div className='hide-scrollbar grid h-full w-full grid-cols-1 overflow-y-auto bg-slate-900 md:grid-cols-2'>
                    <div className='order-2 col-span-1 grid place-items-center p-5 md:order-1 md:border-r-[1px] md:border-r-gray-700'>
                        <div>
                            <form onSubmit={handleSubmit} className='w-[250px] text-gray-300 md:w-[320px]'>
                                <label htmlFor="name" className='block pb-2'>_name:</label>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" id="name" className='mb-5 block w-full rounded-lg border-2 border-gray-400 bg-gray-600 bg-opacity-30 px-3 py-2 outline-none focus:border-blue-400' />
                                <label htmlFor="email" className='block pb-2'>_email:</label>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" className='mb-5 block w-full rounded-lg border-2 border-gray-400 bg-gray-600 bg-opacity-30 px-3 py-2 outline-none focus:border-blue-400' />
                                <label htmlFor="content" className='block pb-2'>_message:</label>
                                <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" name="content" id="content" className='mb-5 block w-full rounded-lg border-2 border-gray-400 bg-gray-600 bg-opacity-30 px-3 py-2 outline-none focus:border-blue-400' rows={5} />
                                <button className='block w-fit rounded-lg bg-gray-700 bg-opacity-40 px-5 py-2 text-left duration-100 ease-linear hover:bg-white hover:text-gray-700'>send-message</button>
                            </form>
                        </div>
                    </div>
                    <div className='order-1 col-span-1 grid place-items-start md:order-2'>
                        <div className='z-0 flex items-center p-4'>
                            <div className='m-0 p-0'>
                                <div className='block'>
                                    {lineItems.map((i, index) => {
                                        return (
                                            <p className='flex' key={index}>
                                                <span className='block w-[20px] text-right text-white text-opacity-60'>{index + 1}</span>
                                                {i} < br />
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='m-0 p-0'>
                                <p id='my-p-element-code' className='ml-5 block w-full translate-y-[-1px] whitespace-normal pr-5 text-white'>
                                    <span className='text-pink-400'>const </span>
                                    <span className='text-purple-400'>button</span>
                                    <span className='text-pink-400'> = </span>
                                    <span className='text-purple-400'>document</span>.
                                    <span className='text-green-500'>querySelector</span>{`(`}
                                    <span className='text-yellow-200'>'#sendBtn'</span>{`)`}; <br />
                                    <span className='text-pink-400'>const </span>
                                    <span className='text-purple-400'>message</span>
                                    <span className='text-pink-400'> = </span>{`{`} <br />
                                    <span className='ml-10'>name: </span>
                                    <span className='text-yellow-200'>'{name}'</span>,<br />
                                    <span className='ml-10'>email: </span>
                                    <span className='text-yellow-200'>'{email}'</span>,<br />
                                    <span className='ml-10'>message: </span>
                                    <span className='text-yellow-200'>'{message}'</span>,<br />
                                    <span className='ml-10'>date: </span>
                                    <span className='text-yellow-200'>'{moment().format('MMM DD, YYYY')}'</span><br />{`}`} <br /> <br />
                                    <span className='text-purple-400'>button</span>.
                                    <span className='text-green-500'>addEventListener</span>
                                    <span className='text-red-500'>{`(`}</span>{`(`}
                                    <span className='text-yellow-200'>'click'</span>{`), () `}
                                    <span className='text-pink-400'>{`=> `}</span>{`{`} <br />
                                    <span className='ml-10'>form</span>.
                                    <span className='text-green-500'>send</span>
                                    <span className='text-pink-400'>{`(`}</span>
                                    <span className='text-purple-400'>message</span>
                                    <span className='text-pink-400'>{`)`}</span>; <br />{`}`}
                                    <span className='text-red-500'>{`)`}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

export default contact