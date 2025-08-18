import React, { useState } from 'react'
import Navbar from './Navbar';
import HomePage from './HomePage';
import NavFlow from './NavFlow';

import { RiMessengerLine } from "react-icons/ri";
import StartChat from './StartChat';
import { CiSearch } from "react-icons/ci";
import Notification from './Notification';
import Request from './Request';
import Chats from '../chatComponents/Chats';
import InChatSwitchAccount from '../chatComponents/InChatSwitchAccount';
import SearchChat from '../chatComponents/SearchChat';
import Notes from '../chatComponents/Notes';
import NavFlowII from './NavFlowII';



const Message = ({ closeNaviHandler, home, navi, setNavi, user, chatCount }) => {




    const profileData = [
        {
            username: "meer",
            image: '/src/assets/f1.png',
            bio: "Be like a water",
            otherAccounts1: 'Aqeel_Haider_Wasee',
            otherAccounts2: 'Aqeel_Haider_Wasee2002',
            otherAccounts3: 'Aqeel_Haider_Wasee2025',
        }
    ];

    const [addAcc, setAddAcc] = useState(true);
    const [isChat, setIsChat] = useState(false);
    const [isResquest, setIsResquest] = useState(false);

    return (

        <div className='absolute top-0 left-0 w-full h-screen bg-zinc-950 flex overflow-hidden '>

            <NavFlowII
                closeNaviHandler={closeNaviHandler}
            />
            <div className='w-full '>
                {home ? ('') : (<div className='flex w-full h-screen text-white '>
                    <div className='left min-w-95.5 h-full bg-red-200/0 flex flex-col border-x-1 border-zinc-900'>

                        <InChatSwitchAccount closeNaviHandler={closeNaviHandler} user={user} />

                        <SearchChat />

                        <Notes user={user} />

                        <div className='chats w-full h-full py-2 '>
                            <div className='h-5 w-full mb-2 flex justify-between items-center px-4'>
                                <p className='text-[15px] text-white font-medium leading-none '>Messages</p>
                                <div

                                    className='w-full h-full flex items-center justify-end'>
                                    <h1
                                        onClick={() => setIsResquest(prev => !prev)}
                                        className=' flex gap-1 text-[12px] text-blue-400 font-medium cursor-pointer whitespace-nowrap'>
                                        Request
                                        <span className='text-blue-400/90'>({chatCount})</span>
                                    </h1>
                                </div>
                            </div>

                            <Chats user={user} />

                        </div>

                    </div>
                </div>)}

                {isResquest ?
                    (
                        <Request setIsResquest={setIsResquest} user={user} chatCount={chatCount} />
                    )
                    :
                    (
                        ''
                    )
                }

            </div>
        </div>
    )
}

export default Message