import React, { useState } from 'react'
import Navbar from './Navbar';
import ChatPaneFloater from './ChatPaneFloater';
import HomePage from './HomePage';
import NavFlowII from './NavFlowII';
import ReelsContent from '../reelsComponents/ReelsContent';

const Reels = ({ closeNaviHandler }) => {
    const [addProfile, setaddProfile] = useState(false);


    return (

        <div className='absolute top-0 right-0 w-full h-screen bg-zinc-950 flex overflow-hidden'>
            <div className='absolute right-0 w-screen flex justify-end bg-red-200/0'>
                <div className='ml-1.5 mt-2 py-3 h-6 flex items-center justify-center  rounded-xl cursor-pointer active:scale-[.99]'>
                    <div
                        onClick={() => closeNaviHandler()}
                        className='flex items-center gap-2 cursor-pointer rotate-45 text-white'>
                        <svg aria-label="New post" fill="currentColor" height="40" role="img" viewBox="0 0 24 24" width="40">
                            <title>close reels</title>
                            <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <NavFlowII />
            <ReelsContent />
            {addProfile ? (<HomePage />) : (
                <div className='flex w-full h-screen text-white'>
                    <div className='absolute right-12 bottom-8'>
                        <ChatPaneFloater />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Reels