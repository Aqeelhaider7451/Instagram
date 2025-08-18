import React, { useState } from 'react';
import StartChat from '../rendRowFiles/StartChat';
import ActualChat from './ActualChat';

const Chats = ({ }) => {
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

    const allConversations = [
        // Conversation with Aqeel_Haider_Wasee
        [
            { msg: 'hey hadi', sender: 'Aqeel_Haider_Wasee' },
            { msg: '??', sender: 'me' },
            { msg: 'r u ready? for owning BMW M5', sender: 'Aqeel_Haider_Wasee' },
            { msg: 'yep bro :P', sender: 'me' },
            // ... all other messages for this chat
        ],
        // Conversation with Haider
        [
            { msg: 'Hi', sender: 'me' },
            { msg: 'Hi', sender: 'haider' },
            { msg: 'yaar bat sun! instagram ka clone bana lia ya nhi ?', sender: 'me' },
            { msg: 'Nhi, bro abhi bana  rha hoon', sender: 'haider' },
            // ... all other messages for this chat
        ],
        // ... and so on for all other users
        [
            { msg: 'Assalam u alaikum', sender: 'me' },
            { msg: 'Walikumasalam3', sender: 'wasee' },
            { msg: 'keso ho?', sender: 'me' },
            { msg: 'Alhumdulillah, thk hoon', sender: 'wasee' },
        ],
        [
            { msg: 'Assalam u alaikum', sender: 'me' },
            { msg: 'Walikumasalam4', sender: 'rehan' },
            { msg: 'keso ho?', sender: 'me' },
            { msg: 'Alhumdulillah, thk hoon', sender: 'rehan' },
        ],
        [
            { msg: 'Assalam u alaikum', sender: 'me' },
            { msg: 'Walikumasalam5', sender: 'meer' },
            { msg: 'keso ho?', sender: 'me' },
            { msg: 'Alhumdulillah, thk hoon', sender: 'meer' },
        ]
    ];

    const [chat, setChat] = useState(null);

    const chatClickHandler = (index) => {
        setChat(index);
    }

    const [checkMsg, setCheckMsg] = useState(null);
    const checkMessage = (aqeel) => {
        setCheckMsg(aqeel);
    }


    const selectedUserData = chat !== null ? user[chat] : null;
    const selectedChatMessages = chat !== null ? allConversations[chat] : null;

    return (
        <div className='chatContainer w-full overflow-y-scroll max-h-100 pb-10' >
            {user.map((elem, idx) => (<div
                onClick={() => {
                    chatClickHandler(idx)
                    checkMessage(idx);
                }}
                key={idx} className='chat flex items-center gap-2 transition-all duration-100 ease-in-out hover:bg-zinc-700/30 border-b-1 border-zinc-300/2 py-1 px-3'>
                <div className='profile h-15 min-w-15 bg-zinc-900/70 cursor-pointer rounded-full overflow-hidden m-[3px]'>
                    <img className='w-full h-full object-cover' src={elem.image} />
                </div>
                <div className='detail w-full h-full flex justify-between -mt-3'>
                    <div className='userInfo flex flex-col mt-2 bg-red-100/0 gap-1'>
                        {idx == 0 ? (<div className='flex items-center gap-1 '>
                            <h1 className='text-xs text-white font-sm capitalize'>{elem.username}</h1>
                            <div>
                                <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12">
                                    <title>Verified</title>
                                    <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>) : (<div className='flex items-center gap-1 '>
                            <h1 className='text-xs text-white font-sm capitalize'>{elem.username}</h1>
                        </div>)}

                        <div className='flex items-center gap-1'>
                            <p className='text-[10px] text-white font-bold max-w-16 max-h-3.5 overflow-hidden'>{elem.sendMsg}</p>
                            <span className='min-h-[1px] min-w-[1px] bg-zinc-300 rounded-full ml-1 mt-1'></span>
                            <span className=' text-[9px] flex items-end mr-1 font-semibold text-zinc-700 bg-red-200/0 mt-0.5 whitespace-nowrap leading-none'>{elem.sendAgo}</span>
                        </div>
                    </div>
                </div>
                {checkMsg ==  user[chat] ?  (<div className='flex flex-col h-5 w-10 items-center gap-3 mt-5'>
                    <span className='h-1.5 w-1.5 rounded-full bg-blue-400'></span>
                </div>):('') }

            </div>))}
            {chat === null ? (<StartChat />) :
                (<ActualChat allConversations={allConversations[chat]} userData={user[chat]} />)}
        </div>
    )
}

export default Chats;