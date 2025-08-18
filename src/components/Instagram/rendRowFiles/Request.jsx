import React, { useState } from 'react'
import HomePage from './HomePage';

const Request = ({ setIsResquest, chatCount }) => {

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


    const chatClickHandler = (index) => {
        console.log(index);

    }

    return (
        <div className='cont absolute top-0 left-[68px] w-full h-screen  flex overflow-hidden'>

            {addProfile ?
                (<HomePage />)
                :
                (<div className='min-w-101.5 h-screen'>
                    <div className='h-full w-full bg-zinc-950 text-white flex flex-col'>
                        <div className=' py-3 px-4 flex  gap-3'>
                            <div
                                onClick={() => setIsResquest(prev => !prev)}
                                className=' cursor-pointer mt-2'>
                                <svg aria-label="Back" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Back</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                                </svg>
                            </div>
                            <h1 className=' font-medium text-2xl'>Message Requests</h1>
                        </div>
                        <div className='flex flex-col items-center mt-3'>
                            <p className='text-[12.5px] text-zinc-500 leading-none'>Open chat to gt more info about who's messaging you.</p>
                            <p className='text-[11px] text-zinc-500 '>They won't know you've been seen it until you accept.</p>
                            <div>
                                <button className='text-blue-500/90 text-[14.5px] leading-none cursor-pointer'>Decide who can message you</button>
                            </div>
                        </div>
                        <div className='RequestScroller min-h-70 max-h-90 w-full overflow-y-scroll'>


                            <div className='mt-2  chatContainer w-full overflow-y-scroll  py-0 ' >
                                {user.map((elem, idx) => (
                                    <div
                                        onClick={() => chatClickHandler(idx)}
                                        key={idx} className='chat flex items-center  gap-2 transition-all duration-100 ease-in-out hover:bg-zinc-300/5 border-b-1 border-zinc-300/2 p-2'>

                                        <div className='  profile h-16 min-w-16 bg-zinc-900/70 cursor-pointer rounded-full overflow-hidden'>
                                            <img className='w-full h-full object-cover' src={elem.image} />
                                        </div>

                                        <div className='detail w-full h-full flex justify-between -mt-3'>
                                            <div className='userInfo flex flex-col'>
                                                <div
                                                    className='flex items-center gap-1'>
                                                    <h1 className='text-xs text-white/90 font-medium capitalize '>{elem.username}</h1>
                                                    <div className='seen flex flex-col justify-end bg-green-300/0'>

                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-1'>
                                                    <p className='text-[9px] text-zinc-500 font-medium max-w-19 max-h-3.5 overflow-hidden'>
                                                        {elem.sendMsg}
                                                    </p>
                                                    <span className=' text-[9px] flex items-end mr-1 font-semibold text-zinc-700 bg-red-200/0 mt-0.5 whitespace-nowrap leading-none'>{elem.sendAgo}</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center pr-2'>
                                            <span className='h-1.5 w-1.5 rounded-full bg-blue-400 '></span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className=' flex flex-col gap-2 py-6 '>
                            <div className=' flex items-center justify-between px-4 py-2 hover:bg-zinc-300/5 cursor-pointer'>
                                <div className='flex items-center gap-2'>
                                    <div className='h-13 w-13 bg-zinc-800 flex items-center justify-center  rounded-full'>
                                        <svg aria-label=" hidden requests" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Eye-off icon for the hidden requests</title><path d="M2.936 8.014A12.792 12.792 0 0 0 .559 11.82a1 1 0 0 0 1.881.677 10.987 10.987 0 0 1 1.988-3.15 1 1 0 1 0-1.492-1.332Zm20.271 13.779-5.916-5.916a4.969 4.969 0 0 0 .133-.582.983.983 0 0 0-1.107-1.108 3.315 3.315 0 0 1-.678.038l-3.366-3.366a3.3 3.3 0 0 1 .036-.676.99.99 0 0 0-1.134-1.107 4.623 4.623 0 0 0-.553.132L8.13 6.717a10.395 10.395 0 0 1 13.429 5.779 1 1 0 0 0 1.881-.677C23.413 11.74 20.542 4 12 4a12.104 12.104 0 0 0-5.367 1.22L2.207.792A1 1 0 0 0 .793 2.207l21 21a1 1 0 0 0 1.414-1.414ZM11.382 14.9l-3.044-3.03a1.005 1.005 0 0 0-1.636.326 5.495 5.495 0 0 0 1.31 6.074 5.495 5.495 0 0 0 6.075 1.31 1.005 1.005 0 0 0 .325-1.636Z" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <h1 className='capitalize font-light'>
                                        hidden requests
                                    </h1>
                                </div>
                                <div className='rotate-90'>
                                    <svg aria-label="" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
                                </div>
                            </div>
                            <div className='w-full  flex items-center justify-center'>
                                <button className='text-red-500/90 cursor-pointer'>Delete all</button>
                            </div>

                        </div>
                    </div>
                </div>
                )
            }

            <div className='text-white text-2xl w-full bg-zinc-950 h-full flex'>
                <div className='h-screen w-3.5 bg-zinc-800'></div>
                <div className='flex items-center justify-center h-full w-full '>
                    <div className='flex flex-col items-center gap-2'>
                        <div className=' h-25 w-25'>
                            <div className='h-full w-full bg-zinc-500/0 border-2 border-white rounded-full flex items-center justify-center pr-2'>
                                <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="48" role="img" viewBox="0 0 24 24" width="48"><title></title><path d="M15.507 12.752a4.5 4.5 0 1 0-4.501-4.5 4.505 4.505 0 0 0 4.5 4.5Zm0-7a2.5 2.5 0 1 1-2.501 2.5 2.502 2.502 0 0 1 2.5-2.5Zm2.444 8.252h-4.907a5.054 5.054 0 0 0-5.049 5.049v.447a1 1 0 0 0 2 0v-.447a3.053 3.053 0 0 1 3.049-3.05h4.907a3.053 3.053 0 0 1 3.05 3.05v.447a1 1 0 0 0 2 0v-.447a5.055 5.055 0 0 0-5.05-5.05Zm-8.286-2.392a.88.88 0 0 0 0-1.224c-.009-.008-.012-.02-.02-.03L6.685 7.4a.907.907 0 0 0-1.283 1.284l1.41 1.409h-4.81a.907.907 0 1 0 0 1.814h4.81l-1.41 1.41a.907.907 0 0 0 1.284 1.284l2.959-2.96c.008-.008.011-.02.02-.03Z"></path></svg>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-[20px] mb-2'>Message requests</h1>
                            <p className='text-sm text-zinc-500 leading-4.5'>These messages are from people you've restricted or don't follow. They won't</p>
                            <p className='text-sm text-zinc-500 leading-4.5'>know you viewed their request until you allow them to message you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request