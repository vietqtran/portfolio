import Layout from '../components/layout'
import { useEffect, useState } from 'react';

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
      <div className='flex w-full flex-1 items-center justify-center'>
        <div className='information grid grid-cols-1 p-10 md:grid-cols-2 md:gap-20 md:p-20 lg:gap-60'>
          <div className='animated-to-right col-span-1 md:pl-40'>
            <div className='whitespace-nowrap text-xs md:text-base'>
              <span className='text-white'>{`<`}</span>
              <span className='text-pink-400'>{`welcome-tag` + ' '}</span>
              <span className='text-green-500'>{`className`}</span>
              <span className='text-pink-400'>{`=`}</span>
              <span className='text-yellow-400'>{`'text-green-500'`}</span>
              <span className='text-white'>{`>`}</span>
              <br />
              <div className='pl-5'>{`Hi all, I am`}</div>
              <span className='text-white'>{`</`}</span>
              <span className='text-pink-400'>{`welcome-tag`}</span>
              <span className='text-white'>{`>`}</span>
            </div>
            <h1 className='text-shadow text-[30px] font-bold text-white sm:text-[60px]'>Quoc Viet</h1>
            <div className='typewriter mb-2'>
              <h1 className='text-base text-blue-500 md:text-xl'>{`>> Software Engineer`}</h1>
            </div>
            <div className='hidden py-10 md:block' ></div>
            <div className='flex items-center'>
              <p className='pl-2 text-xs text-gray-300 text-opacity-70'>
                {lineItems.map((i, index) => {
                  return <span key={index}>{i} < br /></span>
                })}
              </p>
              <p id='my-p-element' className='translate-y-[-1px] pl-2 text-xs text-gray-300 text-opacity-70'>
                On this portfolio page,
                I would like to introduce to you some
                of my completed projects as well as
                my skills and work experience.
                You can also see it on my Github page
              </p>
            </div>

          </div>
          <div className="animated-to-left col-span-1 grid w-full place-items-center pt-10 md:pt-0">
            <img src="/me.jpg" alt="" className='w-[200px] overflow-hidden rounded-lg object-cover md:w-[300px]' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
