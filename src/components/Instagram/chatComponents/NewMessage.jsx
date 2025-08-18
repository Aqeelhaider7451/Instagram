import React from 'react'

const NewMessage = ({ closeNewMessage, user }) => {
    return (
        <div className='flex items-center justify-center z-[1] absolute top-0 left-0 text-white text-2xl h-screen w-full bg-zinc-900/60 overflow-hidden'>
            <div className='h-120 w-150 bg-zinc-800 rounded-3xl overflow-hidden'>
                <div className='w-full px-4 pt-4 pb-2 flex items-center border-b-1 border-zinc-700/60'>
                    <div className='w-full  flex items-center justify-center'>
                        <h1 className='text-lg font-medium'> new messages</h1>
                    </div>
                    <div
                        onClick={() => closeNewMessage()}
                        className='flex items-center gap-2 rotate-45 cursor-pointer  text-white'>
                        <svg aria-label="" fill="currentColor" height="45" role="img" viewBox="0 0 24 24" width="45">
                            <title>close</title>
                            <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                        </svg>
                    </div>
                </div>
                <div className='flex items-center gap-5 px-4 py-2 border-b-1 border-zinc-700/60'>
                    <h1 className='text-lg font-medium'>To:</h1>
                    <input placeholder='Search...' className='outline-none text-lg  w-full' />
                </div>
                <h1 className='text-[16px] px-4 font-medium py-3'>suggested</h1>
                <div className='newMesageContainer h-65 w-full overflow-y-scroll overflow-hidden '>
                    <div className=' py-2 flex flex-col'>
                        {user.map((user, idx) => (
                            <div className='px-3 py-2.5 flex items-center justify-between w-full cursor-pointer hover:bg-zinc-700/50'>
                                <div className='flex items-center gap-3'>
                                    <div className='imgContainer h-16 w-16 rounded-full overflow-hidden text-white text-9xl'>
                                        <img className='h-full w-full object-cover' src={user.image} />
                                    </div>
                                    <h1 className='text-[15px]'>{user.username}</h1>
                                </div>

                                <div className='h-5 w-5 rounded-full bg-transparent border-1 border-zinc-500'></div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='w-full h-20 py-5 px-4 pt-0  '>
                    <button className='w-full p-2 bg-blue-500 rounded-xl text-lg cursor-pointer transition-all duration-100 ease-linear active:scale-[.9950]'>chat</button>
                </div>
            </div>
        </div>
    )
}

export default NewMessage