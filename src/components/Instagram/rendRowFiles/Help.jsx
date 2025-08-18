import React, { useState } from 'react'
import Navbar from './Navbar';
import ChatPaneFloater from './ChatPaneFloater';
import HomePage from './HomePage';

const Help = () => {
    const [addProfile, setaddProfile] = useState(false);

    return (

        <div className='absolute top-0 left-0 w-full h-screen bg-zinc-900 flex overflow-hidden'>
            {addProfile ? (
                <HomePage />
            )
                :
                (
                    <div className='relative w-full h-full'>
                        <div className='absolute left-0  h-fit px-2 py-1'>
                            <a href='/' className='cursor-pointer py-1 px-2 text-[12px] bg-zinc-800/10 text-zinc-700 rounded-full border-1 border-zinc-700/60'
                            >
                                Go to Back
                            </a>
                        </div>
                        <div className='absolute right-12 bottom-8'>
                            <ChatPaneFloater />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Help