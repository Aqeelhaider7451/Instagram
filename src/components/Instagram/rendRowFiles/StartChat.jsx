import React from 'react'


const StartChat = () => {
    return (
        <div className='absolute top-0 right-0 bg-zinc-950  h-full w-203.5 flex flex-col justify-between'>
            <div className=' bg-red-400/0 h-full w-full'>
                <div className='w-full h-full '>
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='logoContainer flex flex-col gap-3 items-center bg-amber-200/0 p-10'>
                            <div className='logo h-28 w-28 flex items-center justify-center bg-amber-500/0 border-2 border-white rounded-full'>
                                <svg aria-label="Messenger" className="pointer-events-none" fill="currentColor" height="64" role="img" viewBox="0 0 24 24" width="64">
                                    <title>Messenger</title>
                                    <path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width=".7"></path>
                                    <path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <h1 className='leading-none pointer-events-none'>Your messages</h1>
                                <h3 className='leading-none text-zinc-500 font-sm text-sm pointer-events-none'>Send message to start chat</h3>
                                <button className='bg-blue-600 py-1 px-3 rounded-lg text-sm font-medium cursor-pointer active:scale-[.98]'>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartChat