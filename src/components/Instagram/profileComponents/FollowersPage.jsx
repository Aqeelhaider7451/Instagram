import React from 'react'
import { CiSearch } from "react-icons/ci";


const FollowersPage = ({ closeFollowinHandler }) => {

    const user = [
        {
            username: "Aqeel_Haider_Wasee",
            name: 'aqee_l',
            image: '/src/assets/f3.png',
            msgNum: 1,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5min ago',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'who you might know on Instagram',
            updateTime: '1d',
            updateAction: 'follow',
            clickToFollow: 'follow'
        },
        {
            username: "haider",
            name: 'haider._.',
            image: '/src/assets/f2.png',
            msgNum: 5,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5min ago',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'who you might know on Instagram',
            updateTime: '10d',
            updateAction: 'follow'
        },
        {
            username: "wasee",
            name: 'mee.rWasse',
            image: '/src/assets/dp3.jpg',
            msgNum: 10,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5min ago',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'start following you',
            updateTime: '1h',
            updateAction: 'follow back',
            clickToFollow: 'follow'
        },
        {
            username: "rehan",
            name: 'mee.rehan',
            image: '/src/assets/dp4.jpg',
            msgNum: 4,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5min ago',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'lked your story',
            updateTime: '23h',
            updateAction: 'check'
        },
        {
            username: "meer",
            name: 'mee.rehan',
            image: '/src/assets/f1.png',
            msgNum: 6,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5min ago',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'mentioned you in their story',
            updateTime: '10d',
            updateAction: 'check',
            clickToFollow: 'follow'
        },
    ];

    return (
        <div className='flex items-center justify-center z-[1] absolute top-0 left-0 text-white text-2xl h-screen w-full bg-zinc-900/60 overflow-hidden'>
            <div className='h-100 w-150 bg-zinc-800 rounded-3xl overflow-hidden'>
                <div className='w-full px-2 pt-1 flex items-center border-b-1 border-zinc-700/60'>
                    <div className='w-full  flex items-center justify-center'>
                        <h1 className='text-lg font-medium'> Followers</h1>
                    </div>
                    <div
                        onClick={() => closeFollowinHandler()}
                        className='flex items-center gap-2 rotate-45 cursor-pointer  text-white'>
                        <svg aria-label="" fill="currentColor" height="45" role="img" viewBox="0 0 24 24" width="45">
                            <title>close</title>
                            <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                        </svg>
                    </div>
                </div>
                <div className=' px-4 p-2 '>
                    <div className='flex items-center gap-2 py-1 px-3 bg-zinc-700/50 rounded-lg'>
                        <CiSearch className='inline-block text-[20px]' />
                        <input placeholder='Search...' className='outline-none text-lg  w-full ' />
                    </div>
                </div>
                <div className='newMesageContainer h-65 w-full overflow-y-scroll overflow-hidden '>
                    <div className=' py-2 flex flex-col'>
                        {user.map((user, idx) => (
                            <div className='px-3 py-2.5 flex items-center justify-between w-full cursor-pointer hover:bg-zinc-700/50'>
                                <div className='flex items-center gap-3'>
                                    <div className='imgContainer h-11 w-11 rounded-full overflow-hidden text-white text-9xl'>
                                        <img className='h-full w-full object-cover' src={user.image} />
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='flex flex-col gap-1'>
                                            <h1 className='text-[15px] leading-none'>{user.username}</h1>
                                            <span className='text-[15px] leading-none text-zinc-600'>{user.name}</span>
                                        </div>
                                        <div className='flex items-center gap-2 text-blue-500 -mt-4'>
                                            <span className='h-1 w-1 bg-blue-500 rounded-full'></span>
                                            <span className='text-[15px] capitalize'>{user.clickToFollow}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='transition-all duration-200 ease-in-out active:scale-[.98]'>
                                    <button className='bg-blue-500  text-[15px] font-medium py-1 px-4 rounded-md cursor-pointer'>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowersPage