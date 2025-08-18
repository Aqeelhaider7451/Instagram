import React, { useState } from 'react'
import SwitchAcc from '../switchAccountComponents/SwitchAcc';
import CloseSvg from '../svgComponents/CloseSvg';
import NewMessage from './NewMessage';

const InChatSwitchAccount = ({ closeNaviHandler }) => {

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


    const [switchAcc, setSwitchAcc] = useState(false);
    const [newMessage, setNewMessage] = useState(false);

    const openSwitchAccount = () => {
        setSwitchAcc(true)
    }
    const closeSwitchAccount = () => {
        setSwitchAcc(false)
    }

    const newMessageHandler = () => {
        setNewMessage(true)
    }
    const closeNewMessageHandler = () => {
        setNewMessage(false)
    }

    return (
        <div className='pb-2  mt-7 -ml-0.5  px-5 w-full h-screen  flex items-center justify-between '>
            <div className='flex justify-between bg-red-100/0 w-full'>
                <div className=' flex items-center justify-center rounded-xl cursor-pointer active:scale-[.99]'>
                    <div
                        onClick={() => closeNaviHandler()}
                        className='flex items-center gap-2 '>
                        <svg aria-label="Back" class="" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Back</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                        </svg>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <h1

                        className='text-md font-medium '>{profileData[0].otherAccounts1}
                    </h1>
                    <div
                        onClick={() => openSwitchAccount()}
                        className='mt-1.5'>
                        <svg aria-label="" className="cursor-pointer transition-all duration-500 ease-in-out hover:rotate-180" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                    </div>
                </div>
                <div onClick={() => newMessageHandler()}
                    className='cursor-pointer'
                >
                    <svg aria-label="New message" class="" fill="currentColor" height="17" role="img" viewBox="0 0 24 24" width="17">
                        <title>New message</title>
                        <path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line>
                    </svg>
                </div>
            </div>

            {newMessage ? (<NewMessage closeNewMessage={closeNewMessageHandler} user={user} />) : ('')}

            {switchAcc ? (<SwitchAcc closeSwitchAccount={closeSwitchAccount} openSwitchAccount={openSwitchAccount} />) : ('')}

        </div>
    )
}

export default InChatSwitchAccount