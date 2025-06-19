import React from 'react'

const Glass = () => {
  return (
    <div className='flex flex-col items-start justify-start p-10 bg-white/5 w-[70vw] h-[60vh] rounded-lg  border border-white/50 z-50 backdrop-blur-xl drop-shadow-lg drop-shadow-black/20'>
        <h1 className='text-white text-3xl font-semibold'>HELLO</h1>
        <p className='bg-white/10 rounded-lg p-6 mt-10 ring-1 ring-white/50 text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illo voluptate odit similique, nostrum iste alias earum quos libero! Eius, doloribus! Hic molestias possimus aut necessitatibus provident? Asperiores, natus pariatur?</p>
        <div className='flex flex-1 flex-row w-full mt-10 p-6 rounded-lg gap-6 justify-center items-end'>
            <div className='h-full w-14 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-lg'></div>
            <div className='h-[40%] w-14 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-lg'></div>
            <div className='h-[60%] w-14 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-lg'></div>
            <div className='h-[90%] w-14 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-lg'></div>
            <div className='h-[80%] w-14 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-lg'></div>
        </div>
    </div>
  )
}

export default Glass