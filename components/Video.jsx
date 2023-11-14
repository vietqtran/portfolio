import React, { useRef, useEffect } from 'react'

export default function Video({ src }) {
    const vidRef = useRef(null)

    useEffect(() => {
        vidRef.current.play()
    }, [])

    return (
        <video
            ref={vidRef}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-full object-cover overflow-hidden absolute top-0 left-0 bottom-0 right-0 z-[-1]'
        />
    )
}