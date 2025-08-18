import React from 'react'

const MessageRequest = () => {
    return (
        <div className='absolute top-0 left-0 text-white text-2xl h-screen w-full bg-zinc-950'>

            <div className='h-full w-full px-15 py-8'>
                <h1 className='font-bold text-2xl tracking-tight'>Message Request</h1>
                <div className='flex flex-col items-start text-xs text-zinc-600'>
                    <p className='w-[70%]'>when someone who you don't follow or havn't chatted with before sends you a message, you recieve it as a request</p>
                    <button className='text-blue-500'>
                        learn more about who can message you
                    </button>
                </div>

                <div>
                    <div>
                        <h3>Your followers on Instagram</h3>
                        <p>when someone who you don't follow or havn't chatted with before sends you a message, you recieve it as a request</p>
                    </div>
                    <div className='border-1 border-zinc-700'>
                        <div>
                            <h1></h1>
                            <></>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageRequest