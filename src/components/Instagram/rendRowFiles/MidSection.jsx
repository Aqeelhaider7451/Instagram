import React from 'react'
import Feed from './Feed';
import Stories from './Stories';

const MidSection = () => {



    return (
        <div className='MidSection h-full min-w-146.5 bg-red-400/0 flex justify-start overflow-y-scroll overflow-x-hidden'>
            <div className='h-full w-full flex flex-col items-center border-t-none border-b-none'>
                <Stories />
                <Feed />
            </div>
        </div>
    )
}

export default MidSection