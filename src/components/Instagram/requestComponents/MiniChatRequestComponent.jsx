import React from 'react'

const MiniChatRequestComponent = ({ setIsResquestInMiniChat }) => {
    return (
        <div className='absolute top-0 left-0 rounded-4xl  h-full w-full bg-red-200/60 text-white text-2xl'>
            <div className='py-1 px-3 flex items-center justify-center bg-zinc-900 rounded-xl cursor-pointer active:scale-[.99]'>
                <div
                    onClick={() => setIsResquestInMiniChat(prev => !prev)}
                    className='flex items-center gap-2'>
                    <h1 className='text-xs'>close chat</h1>
                    <span
                        className='leading-none text-red-500/90 text-xs mb-0.5'>x</span>
                </div>
            </div>
        </div>
    )
}

export default MiniChatRequestComponent