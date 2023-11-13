import Layout from './components/layout'
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [ lineItems, setLineItems ] = useState([])
  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById('my-p-element');
      const height = element.clientHeight;
      const lineHeight = parseInt(getComputedStyle(element).lineHeight);
      const lineNumber = Math.round(height / lineHeight);
      const lineElements = []
      lineElements.push(<span>/**</span>)
      for (let index = 0; index < lineNumber; index++) {
        lineElements.push(<span>&nbsp;*</span>)
      }
      lineElements.push(<span>&nbsp;*/</span>)
      setLineItems(lineElements)
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Layout>
      <div className='container mx-auto flex w-full flex-1 items-center justify-center'>
        <div className='information grid grid-cols-1 p-10 md:grid-cols-2 md:gap-20 md:p-20 lg:gap-60'>
          <div className='col-span-1'>
            <div className='whitespace-nowrap'>
              <span className='text-white'>{`<`}</span>
              <span className='text-pink-400'>{`welcome-tag` + ' '}</span>
              <span className='text-green-500'>{`className`}</span>
              <span className='text-pink-400'>{`=`}</span>
              <span className='text-yellow-400'>{`'text-green-500'`}</span>
              <span className='text-white'>{`>`}</span>
              <br />
              <div className='pl-5 text-green-500'>{`Hi all, I am`}</div>
              <span className='text-white'>{`</`}</span>
              <span className='text-pink-400'>{`welcome-tag` + ' '}</span>
              <span className='text-white'>{`>`}</span>
            </div>
            <h1 className='text-shadow text-[30px] font-bold text-white sm:text-[60px]'>Quoc Viet</h1>
            <div className='typewriter mb-2'>
              <h1 className='text-base text-blue-500 md:text-xl'>{`>> Software Engineer`}</h1>
            </div>
            <div className='hidden py-10 md:block' ></div>
            <div className='flex items-center'>
              <div>
                {lineItems.map((i, index) => {
                  return <div className='leading-4' key={index}>
                    {i}
                  </div>
                })}
              </div>
              <p id='my-p-element' className='translate-y-[-2px] pl-2 text-sm leading-4 text-gray-300 text-opacity-70'>
                On this portfolio page,
                I would like to introduce to you some
                of my completed projects as well as
                my skills and work experience.
                You can also see it on my Github page
              </p>
            </div>
          </div>
          <div className="col-span-1 grid w-full place-items-center pt-10 md:pt-0">
            <img src="/me.jpg" alt="" className='w-[200px] overflow-hidden rounded-lg object-cover md:w-[300px]' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
