import React from 'react'

export default function Rhombus() {
    return (
        <>
            <div className="relative bg-red-400">
                <span
                    className="absolute -my-5 left-1/2 -translate-x-1/2 w-full h-10 bg-[#DADADA] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]"
                />
            </div>
            <div className='h-12.5 w-full bg-linear-to-b from-[#e9e9e9] to-white'></div>
        </>
    )
}
