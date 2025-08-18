import React, { useState } from 'react'
import HomePage from './HomePage';

const Story = () => {
    const [addProfile, setaddProfile] = useState(false);

    return (

        <div className='absolute top-0 left-0 w-screen h-screen bg-zinc-900 flex overflow-hidden'>
            {addProfile ? (
                <HomePage />
            )
                :
                (
                    <div className='w-full relative flex  text-white'>
                        {/* <div className='navbar py-2 pb-10 min-w-54  bg-zinc-800/20 border-r-1 border-zinc-800/50 flex flex-col justify-between '>
                            <div className=' flex flex-col'>

                                <div
                                    onClick={
                                        () => setaddProfile(prev => !prev)
                                    }
                                    className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a
                                        className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'
                                    >
                                        Profile

                                    </a>
                                </div>
                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>stories</a>
                                </div>
                                <div
                                    className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>message</a>
                                </div>
                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>notification</a>
                                </div>
                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>search</a>
                                </div>
                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>reels</a>
                                </div>
                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>explore</a>
                                </div>

                            </div>
                            <div className=''>

                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>help</a>
                                </div>
                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-800/60'>
                                    <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full text-zinc-600'>settings</a>
                                </div>
                            </div>

                        </div> */}
                        <div className='absolute w-screen h-screen flex justify-center items-center top-0 right-0 storyContainer min-w-full backdrop:'>
                            <div className='h-5/6 w-80 bg-zinc-300'></div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Story