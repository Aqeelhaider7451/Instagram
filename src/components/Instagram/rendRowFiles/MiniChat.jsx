import React, { useRef, useState } from 'react'
import Navbar from './Navbar';
import HomePage from './HomePage';
import NavFlow from './NavFlow';

import { RiMessengerLine } from "react-icons/ri";
import StartChat from './StartChat';
import Notification from './Notification';
import Request from './Request';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Chats from '../chatComponents/Chats';
import Notes from '../chatComponents/Notes';
import SearchChat from '../chatComponents/SearchChat';
import SwitchAcc from '../switchAccountComponents/SwitchAcc';
import MiniChatRequestComponent from '../requestComponents/MiniChatRequestComponent'



const MiniChat = ({ setMsgPane, setMessage }) => {



    const user = [
        {
            username: "BMW",
            image: '/src/assets/dp5.jpg',
            msgNum: 1,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5m',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'who you might know on Instagram',
            updateTime: '1d',
            updateAction: 'follow',
            handlerName: 'b.m.w' // Add handlerName to each user object
        },
        {
            username: "haider",
            image: '/src/assets/f2.png',
            msgNum: 5,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '1d',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'who you might know on Instagram',
            updateTime: '10d',
            updateAction: 'follow',
            handlerName: 'haider_3324'
        },
        {
            username: "wasee",
            image: '/src/assets/wllpr1.jpg',
            msgNum: 10,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '12m',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'start following you',
            updateTime: '1h',
            updateAction: 'follow back',
            handlerName: "wasee_('')"
        },
        {
            username: "rehan",
            image: '/src/assets/pdp.jpg',
            msgNum: 4,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '1w',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'lked your story',
            updateTime: '23h',
            updateAction: 'check',
            handlerName: 'rehan_.'
        },
        {
            username: "meer",
            image: '/src/assets/f1.png',
            msgNum: 6,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5s',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'mentioned you in their story',
            updateTime: '10d',
            updateAction: 'check',
            handlerName: 'mee.r.|.'
        },
    ];

    const notes = [

        {
            note: "hi, there . whats up?",
            noteUser: 'hadi'

        },


        {
            note: "today is monday ",
            noteUser: 'haider'

        },


        {
            note: "something new found in my story something new found in my story",
            noteUser: 'meer_hadi_aesthetic'

        },


        {
            note: "here and there",
            noteUser: 'meer_Rehan'
        }

    ]

    const profileData = [
        {
            username: "meer",
            image: '/src/assets/f1.png',
            bio: "Be like a water",
            otherAccounts1: 'Aqeel_Haider_Wasee',
            otherAccounts2: 'Aqeel_Haider_Wasee2002',
            otherAccounts3: 'Aqeel_Haider_Wasee2025',
        }
    ]



    // const [msgPane, setMsgPane] = useState(false);
    const [addAcc, setAddAcc] = useState(true);
    const [isChat, setIsChat] = useState(false);
    const [isResquestInMiniChat, setIsResquestInMiniChat] = useState(false)


    return (
        <div className='absolute  bottom-0 right-0 h-120 w-85 overflow-hidden'>
            <div className='  h-full w-full text-white text-2xl   border-1 border-zinc-800 overflow-hidden rounded-xl'>
                <div className=' w-full h-screen bg-zinc-900 flex overflow-hidden '>

                    <div className='w-full'>
                        <div className='flex w-full h-screen text-white '>

                            <div className='left min-w-1/3 h-full bg-red-200/0 flex flex-col'>
                                <div className=' h-full w-full '>

                                    <div className='flex justify-between p-2'>
                                        <div></div>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <div
                                                    onClick={() => setMessage(prev => prev)}
                                                    className='cursor-pointer'>
                                                    <svg aria-label="Expand Chat" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                                                        <title>Expand Chat</title>
                                                        <path d="M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className=' flex items-center justify-center rounded-xl cursor-pointer active:scale-[.99]'>
                                                <div
                                                    onClick={() => setMsgPane(prev => !prev)}
                                                    className='flex items-center gap-2 rotate-45'>
                                                    <svg aria-label="New post" fill="currentColor" height="35" role="img" viewBox="0 0 24 24" width="35">
                                                        <title>close chat</title>
                                                        <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path>
                                                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                                                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='  overflow-y-scroll chats w-85 h-full overflow-hidden'>
                                        <div className=' chatContainer   h-full py-0 pb-10' >
                                            {user.map((elem, idx) => (
                                                <div
                                                    onClick={() => chatClickHandler(idx)}
                                                    key={idx} className='chat flex items-center  gap-2 transition-all duration-100 ease-in-out hover:bg-zinc-700/30 border-b-1 border-zinc-300/2 py-2 px-3'>

                                                    <div className='profile h-16 min-w-16 bg-zinc-900/70 cursor-pointer rounded-full overflow-hidden'>
                                                        <img className='w-full h-full object-cover' src={elem.image} />
                                                    </div>

                                                    <div className='detail w-full h-full flex justify-between -mt-3'>
                                                        <div className='userInfo flex flex-col mt-2 bg-red-100/0 gap-1'>
                                                            <div
                                                                className='flex items-center gap-1 '>
                                                                <h1 className='text-xs text-white font-sm capitalize'>{elem.username}</h1>
                                                            </div>

                                                            <div className='flex items-center gap-1'>
                                                                <p className='text-[10px] text-white font-bold max-w-16 max-h-3.5 overflow-hidden'>{elem.sendMsg}</p>
                                                                <span className='min-h-[4px] min-w-[4px] bg-zinc-700 rounded-full mt-1'></span>
                                                                <span className=' text-[9px] flex items-end mr-1 font-semibold text-zinc-700 bg-red-200/0 mt-0.5 whitespace-nowrap leading-none'>{elem.sendAgo}</span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col h-5 w-10 items-center gap-3 mt-5'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-blue-400'></span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>


                                        {
                                            isResquestInMiniChat ?
                                                (
                                                    <MiniChatRequestComponent setIsResquestInMiniChat={setIsResquestInMiniChat} />
                                                )
                                                :
                                                (
                                                    ''
                                                )
                                        }
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

export default MiniChat