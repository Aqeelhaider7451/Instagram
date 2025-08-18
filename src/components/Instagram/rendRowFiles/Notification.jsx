import React, { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import HomePage from './HomePage';
import NavFlowII from './NavFlowII';

const Notification = ({ closeNaviHandler }) => {
    const user = [
        {
            username: "Aqeel_Haider_Wasee",
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

    const [addProfile, setaddProfile] = useState(false);



    return (
        <div className=' absolute top-0 flex text-white  h-screen w-full '>

            <NavFlowII />
            <div className='notificationContainer flex flex-col min-w-89 h-full border-r-1 border-zinc-800  bg-zinc-950 overflow-y-scroll overflow-hidden'>
                <div className='flex flex-col px-5 pt-2 pb-4 border-b-1 border-zinc-800'>
                    <div>
                        <h1 className='text-2xl text-white font-bold'>Notification</h1>
                    </div>
                    <div className='pt-2'>
                        <h1 className='font-semibold text-md capitalize'>today</h1>
                        <div className='pt-3'>
                            {user.map((notifi, idx) => (
                                <div className='hover:bg-zinc-900'>
                                    <div className='flex items-center justify-between pr-2 py-2'>
                                        <div className='flex items-center '>
                                            <div className='profile w-12 h-12 bg-zinc-900/70 cursor-pointer border-2 border-zinc-800 rounded-full my-1 overflow-hidden'>
                                                <div className='imgContainer w-full h-full'>
                                                    <img className='h-full w-full object-cover' src={notifi.image} />
                                                </div>
                                            </div>
                                            <div className='flex flex-col  w-35 ml-2'>
                                                <div className='flex-wrap leading-none text-xs'>
                                                    <h1 className='leading-none text-[13px] font-semibold'>{notifi.username},
                                                    </h1>
                                                    {notifi.updateMessage}
                                                </div>



                                                <div className=' mt-3 flex  gap-1'>
                                                    <span className='h-1 min-w-1 bg-zinc-700 rounded-full ]'></span>
                                                    <span className='leading-0  text-xs text-zinc-700'>{notifi.updateTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='py-1 px-3 bg-blue-500 text-[13px] whitespace-nowrap font-semibold rounded-lg cursor-pointer active:scale-[.98]'>{notifi.updateAction}</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <div className='flex flex-col px-5 pb-4 border-b-1 border-zinc-800'>
                    <div className='pt-2'>
                        <h1 className='font-semibold text-md capitalize'>This week</h1>
                        <div className='pt-3'>
                            {user.map((notifi, idx) => (
                                <div className='hover:bg-zinc-900'>
                                    <div className='flex items-center justify-between pr-2 py-2'>
                                        <div className='flex items-center '>
                                            <div className='profile w-12 h-12 bg-zinc-900/70 cursor-pointer border-2 border-zinc-800 rounded-full my-1 overflow-hidden'>
                                                <div className='imgContainer w-full h-full'>
                                                    <img className='h-full w-full object-cover' src={notifi.image} />
                                                </div>
                                            </div>
                                            <div className='flex flex-col  w-35 ml-2'>
                                                <div className='flex-wrap leading-none text-xs'>
                                                    <h1 className='leading-none text-[13px] font-semibold'>{notifi.username},
                                                    </h1>
                                                    {notifi.updateMessage}
                                                </div>



                                                <div className=' mt-3 flex  gap-1'>
                                                    <span className='h-1 min-w-1 bg-zinc-700 rounded-full ]'></span>
                                                    <span className='leading-0  text-xs text-zinc-700'>{notifi.updateTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='py-1 px-3 bg-blue-500 text-[13px] whitespace-nowrap font-semibold rounded-lg cursor-pointer active:scale-[.98]'>{notifi.updateAction}</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <div className='flex flex-col px-5 pb-4 border-b-1 border-zinc-800'>
                    <div className='pt-2'>
                        <h1 className='font-semibold text-md capitalize'>This month</h1>
                        <div className='pt-3'>
                            {user.map((notifi, idx) => (
                                <div className='hover:bg-zinc-900'>
                                    <div className='flex items-center justify-between pr-2 py-2'>
                                        <div className='flex items-center '>
                                            <div className='profile w-12 h-12 bg-zinc-900/70 cursor-pointer border-2 border-zinc-800 rounded-full my-1 overflow-hidden'>
                                                <div className='imgContainer w-full h-full'>
                                                    <img className='h-full w-full object-cover' src={notifi.image} />
                                                </div>
                                            </div>
                                            <div className='flex flex-col  w-35 ml-2'>
                                                <div className='flex-wrap leading-none text-xs'>
                                                    <h1 className='leading-none text-[13px] font-semibold'>{notifi.username},
                                                    </h1>
                                                    {notifi.updateMessage}
                                                </div>



                                                <div className=' mt-3 flex  gap-1'>
                                                    <span className='h-1 min-w-1 bg-zinc-700 rounded-full ]'></span>
                                                    <span className='leading-0  text-xs text-zinc-700'>{notifi.updateTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='py-1 px-3 bg-blue-500 text-[13px] whitespace-nowrap font-semibold rounded-lg cursor-pointer active:scale-[.98]'>{notifi.updateAction}</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>


            </div>
            <div
                onClick={() => closeNaviHandler()}
                className='h-screen w-full bg-zinc-950/50'>
            </div>
        </div>
    )
}

export default Notification