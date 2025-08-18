import React, { useState } from 'react'
import { RiMessengerLine } from "react-icons/ri";
import MiniChat from './MiniChat';


const ChatPaneFloater = ({ setMessage, userData }) => {

    const [msgPane, setMsgPane] = useState(false);

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

    ];

    const chatCount = user.length - 3;


    return (

        <div className=' chatPane flex items-center z-[10]  py-1 px-3 min-w-45 h-13.5 bg-zinc-900 border-1 border-zinc-800 rounded-full'>
            <div className='absolute top-2 left-6 flex items-center justify-center h-5.5 w-5.5 bg-red-500 border-2 border-zinc-900 rounded-full text-3xl text-white '>
                <span className='text-[10px] font-medium'>5</span>
            </div>
            <div

                onClick={() => setMsgPane(prev => !prev)}
                className='flex items-center gap-1 bg-red-200/0 text-white/85 cursor-pointer '>
                <div className=''>
                    <svg aria-label="Messenger" className="" fill="currentColor" height="25" role="img" viewBox="0 0 24 24" width="25">
                        <title>Messenger</title>
                        <path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path>
                    </svg>
                </div>
                <div>
                    <span className='font-medium'>Message</span>
                </div>
            </div>
            <div
                onClick={() => setMsgPane(prev => !prev)}
                className='relative profiles h-full flex w-3/4  items-center px-2 ml-10'>
                {

                    user.map((elem, idx) => (
                        <div
                            key={idx}
                            className='cursor-pointer -mr-2'
                        >
                            <div
                                className='profile  cursor-pointer  h-7 w-7 rounded-full overflow-hidden'>
                                <div className='imgContainer w-full h-full border-1 border-zinc-950'>
                                    <img className='h-full w-full object-cover scale-[1.3] p-1 bg-zinc-900 rounded-full' src={elem.image} />
                                </div>
                            </div>
                            <div className='relative bg-red-300'>

                            </div>
                        </div>
                    ))
                }
            </div>
            {msgPane ? (<MiniChat
                setMsgPane={setMsgPane}
                setMessage={setMessage}
                userData={userData} />) : ('')}
        </div>
    )
}

export default ChatPaneFloater