import React from 'react'
import CloseSvg from '../svgComponents/CloseSvg'

const ProfileContent = ({ contentData, closeContent }) => {
    return (
        <div className='absolute top-0 left-0 h-screen w-full bg-zinc-950/50 backdrop-blur-[3px] text-white'>
            <div className='absolute -right-3 top-3 flex justify-end rounded-full'>
                <div className='ml-1.5 -mt-1 mr-2 py-3 px-1 h-6 flex items-center justify-center bg-zinc-800/0 rounded-xl cursor-pointer active:scale-[.99]'>
                    <div
                        onClick={closeContent}
                        className='flex items-center gap-2 cursor-pointer rotate-45'>
                        <CloseSvg />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center h-full w-full'>
                <div className='h-90 w-100 '>
                    <div className='imgContainer h-full w-full border-[1.5px] border-zinc-800/60 rounded-lg overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-lg ' src={contentData.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent