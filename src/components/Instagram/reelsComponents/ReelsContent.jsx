import React, { useState } from 'react'

const ReelsContent = () => {

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
            updateAction: 'follow'
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
            updateAction: 'follow back'
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
            updateAction: 'check'
        },
    ];

    const reelsIcon = [
        {
            icon: <svg aria-label="Like" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>,
            page: 'Likes',
        },
        {
            icon: <svg aria-label="Comment" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
            </svg>,
            page: '56',
        },
        {
            icon: <svg aria-label="Save" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
            </svg>,
            page: '',
        },
        {
            icon: <svg aria-label="Save" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
            </svg>,
            page: '',
        },
        {
            icon: <svg aria-label="Menu" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="15"><title>Menu</title><circle cx="12" cy="12" r="2.75"></circle><circle cx="19.5" cy="12" r="2.75"></circle><circle cx="4.5" cy="12" r="2.75"></circle>
            </svg>,
            page: '',
        },
    ];


    const [pause, setPause] = useState(false);



    return (
        <div className='flex items-center justify-center absolute left-16.5 text-white text-2xl w-[90%] h-screen border-l-1 border-zinc-800 '>
            <div className='relative w-88 h-130 bg-zinc-950'>
                <div>
                    <div className='h-20 w-75 bg-zinc-900/30 flex justify-end pt-5 px-3'>

                    </div>
                    <div className='h-90 w-75  flex items-end'>
                        <div className='w-full h-95 '>
                            <div className='h-full w-full'>
                                <img className='h-full w-full object-cover' src={user[4].image} />
                            </div>
                        </div>

                    </div>
                </div>


                <div className=' absolute top-0 left-0 w-88 h-130 bg-red-500/0'>
                    <div className=' w-75  flex justify-end items-center px-3 pt-5'>
                        <svg aria-label="Audio is muted" className='cursor-pointer' fill="currentColor" height="16" role="img" viewBox="0 0 48 48" width="16">
                            <title>Audio is muted</title>
                            <path clip-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div className='flex h-full '>
                        <div className='w-full h-120 mt-6 flex flex-col'>
                            <div className='w-full h-full bg-blue-300/0 flex items-center justify-center'>
                                <div className='bg-zinc-900/30 h-20 w-20 flex items-center justify-center rounded-full'>
                                    <svg aria-label="Play" className="cursor-pointer" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16">
                                        <title>Play</title>
                                        <path d="M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full h-47 mb-3 bg-blue-400/0 flex items-start'>
                                <div className='px-3 py-2.5 flex flex-col justify-between h-full gap-1  w-full '>
                                    <div className='flex items-center gap-1'>
                                        <div className='flex items-center gap-1'>
                                            <div className='imgContainer h-8 w-8 rounded-full overflow-hidden text-white text-9xl'>
                                                <img className='h-full w-full object-cover' src={user[0].image} />
                                            </div>
                                            <div className='flex '>
                                                <div className='flex flex-col w-19 gap-1 overflow-hidden'>
                                                    <h1 className='text-[13px] leading-none'>{user[0].username}</h1>
                                                </div>
                                                <div className='flex items-center gap-2 text-blue-500 -mt-4'>
                                                    <span className='text-[15px] capitalize'>{user[0].clickToFollow}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' flex items-center gap-1  rounded-md transition-all duration-200 ease-in-out active:scale-[.98] '>
                                            <span className='h-1 w-1 bg-zinc-300 rounded-full'></span>
                                            <button className='  text-[15px] py-[3px] px-1 font-medium  rounded-lg cursor-pointer  border-1 border-zinc-500'>Follow</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className='text-xs'>caption</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-2 px-3 rounded-full w-full bg-zinc-900 font-[400] flex items-center gap-1'>
                                            <h1 className='text-xs'>{user[0].username}</h1>
                                            <span className='h-0.5 w-0.5  rounded-full mt-1 bg-zinc-200'></span>
                                            <p className='text-xs'>Original Audio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-15 h-full flex flex-col  '>
                            <div className='h-80 mt-46 bg-white/0 flex flex-col'>
                                <div className='w-full h-full bg-amber-300/0 flex flex-col justify-between'>
                                    {reelsIcon.map((icon, idx) => (
                                        <div className={`flex flex-col items-center
                                        ${idx == 4 && 'mb-3'}
                                        `}>
                                            <div className='cursor-pointer'>{icon.icon}</div>
                                            <span className='text-xs'>{icon.page}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='h-16 min-w-full py-3 px-2'>
                                    <div className='h-full w-full border-1 border-zinc-700 rounded-md overflow-hidden'>
                                        <img className='h-full w-full object-cover rounded-md' src={user[0].image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReelsContent