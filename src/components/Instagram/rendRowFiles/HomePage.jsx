import React, { useState } from 'react'
import Message from './Message';
import Notification from './Notification';
import Story from './Story';
import Search from './Search'
import Reels from './Reels'
import Explore from './Explore';
import Help from './Help';
import Settings from '../settingsComponents/settings/after_setting/Settings';
import ChatPaneFloater from './ChatPaneFloater';
import Profile from './Profile';
import Feed from './Feed';
import MidSection from './MidSection';
import Navbar from './Navbar';
import SideBar from './SideBar';

const HomePage = ({ openSwitchAccount, closeSwitchAccount }) => {
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
            updateAction: 'follow',
            archiveLike: <svg aria-label="Story exists in a highlight" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Story exists in a highlight</title><path d="M3.915 5.31q.337-.407.713-.779m-3.121 7.855Q1.5 12.194 1.5 12a10.505 10.505 0 0 1 .516-3.265m3.243 11.338a10.55 10.55 0 0 1-2.89-3.864m14.482 5.108a10.547 10.547 0 0 1-8.163.65M12.002 1.5a10.504 10.504 0 0 1 7.925 17.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M12.002 9.201c-.005.003-.006.001-.008 0a2.555 2.555 0 0 0-2.201-1.157A2.92 2.92 0 0 0 7 11.072c0 1.528 1.122 2.504 2.207 3.447q.198.171.396.346l.473.424c.918.821 1.369 1.223 1.584 1.362a.628.628 0 0 0 .68 0c.205-.133.58-.465 1.633-1.406l.424-.38c.137-.122.275-.24.412-.36 1.077-.935 2.191-1.9 2.191-3.433a2.92 2.92 0 0 0-2.793-3.028 2.544 2.544 0 0 0-2.205 1.157Z" fill-rule="evenodd"></path>
            </svg>,
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
            updateAction: 'check',
            archiveLike: <svg aria-label="Story exists in a highlight" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Story exists in a highlight</title><path d="M3.915 5.31q.337-.407.713-.779m-3.121 7.855Q1.5 12.194 1.5 12a10.505 10.505 0 0 1 .516-3.265m3.243 11.338a10.55 10.55 0 0 1-2.89-3.864m14.482 5.108a10.547 10.547 0 0 1-8.163.65M12.002 1.5a10.504 10.504 0 0 1 7.925 17.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M12.002 9.201c-.005.003-.006.001-.008 0a2.555 2.555 0 0 0-2.201-1.157A2.92 2.92 0 0 0 7 11.072c0 1.528 1.122 2.504 2.207 3.447q.198.171.396.346l.473.424c.918.821 1.369 1.223 1.584 1.362a.628.628 0 0 0 .68 0c.205-.133.58-.465 1.633-1.406l.424-.38c.137-.122.275-.24.412-.36 1.077-.935 2.191-1.9 2.191-3.433a2.92 2.92 0 0 0-2.793-3.028 2.544 2.544 0 0 0-2.205 1.157Z" fill-rule="evenodd"></path>
            </svg>,
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

    const chatCount = user.length;



    const popPro = [
        {
            name: 'Aqeel',
            username: '@aqeel_haider_wasee',

        },
        {
            name: 'rehan',
            username: '@rehan_hadi',

        },
        {
            name: 'hadi',
            username: '@meer_hadi_aesthetic',

        },
    ];

    // const storyIdx = [
    //     {
    //         username: "Aqeel_Haider",
    //         image: '/src/assets/f1.png',
    //     },
    //     {
    //         username: "haider",
    //         image: '/src/assets/f2.png',
    //     },
    //     {
    //         username: "wasee",
    //         image: '/src/assets/f3.png',
    //     },
    //     {
    //         username: "rehan",
    //         image: '/src/assets/f4.png',
    //     },
    //     {
    //         username: "meer",
    //         image: '/src/assets/f5.png',
    //     },
    //     {
    //         username: "Aqeel_Haider_Wasee",
    //         image: '/src/assets/f6.png',
    //     },
    //     {
    //         username: "Aqeel_Haider",
    //         image: '/src/assets/f7.jpg',
    //     },
    //     {
    //         username: "WaseeHaider",
    //         image: '/src/assets/f8.jpg',
    //     },
    //     {
    //         username: "Rehan_hadi",
    //         image: '/src/assets/f9.png',
    //     },
    //     {
    //         username: "meer_Rehan",
    //         image: '/src/assets/f10.jpg',
    //     },
    // ];

    const feedData = [
        {
            para: 'jsbdjb jsdbhs  he bd hyshsh jhfsj jirojss kirhe yhe',
        }
    ]

    const pageName = [
        {
            pageName: 'message'
        },
        {
            pageName: 'notification'
        },
        {
            pageName: 'reels'
        },
        {
            pageName: 'explore'
        },
        {
            pageName: 'search'
        },
        {
            pageName: 'profile'
        },
        {
            pageName: 'help'
        },
        {
            pageName: 'settings'
        },
    ]

    const [addProfile, setaddProfile] = useState(false);
    const [message, setMessage] = useState(false);
    const [notification, setNotification] = useState(false);
    const [search, setSearch] = useState(false);
    const [reels, setReels] = useState(false);
    const [explore, serExplore] = useState(false);
    const [help, setHelp] = useState(false);
    const [settings, setSettings] = useState(false);



    return (
        <div className='w-full h-screen bg-zinc-950 flex overflow-hidden'>
            {addProfile ? (<Profile />) : (<div className='relative h-screen bg-red-100/0 w-full flex'>
                {/* <div className='navbar py-2 pb-10 w-100  bg-zinc-300/2 border-r-1 border-zinc-800/50 flex flex-col justify-between '>
                            <div className=' flex flex-col text-zinc-600/75'>
                                <div className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-300/3'>
                                    <a
                                        href='/'
                                        className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full '
                                    >
                                        home

                                    </a>
                                </div>
                                {
                                    [
                                        setMessage,
                                        setNotification,
                                        setReels,
                                        serExplore,
                                        setSearch,
                                        setaddProfile,
                                    ].map((elem, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => elem(prev => !prev)}
                                            className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-300/3'>
                                            <a
                                                className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full'
                                            >
                                                {
                                                    `
                                            ${idx === 0 && pageName[0].pageName
                                                    ||
                                                    idx === 1 && pageName[1].pageName
                                                    ||
                                                    idx === 2 && pageName[2].pageName
                                                    ||
                                                    idx === 3 && pageName[3].pageName
                                                    ||
                                                    idx === 4 && pageName[4].pageName
                                                    ||
                                                    idx === 5 && pageName[5].pageName
                                                    }
                                            `
                                                }
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                            <div
                                className='text-zinc-600/75'
                            >
                                {[
                                    setHelp,
                                    setSettings,
                                ].map((elem, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => elem(prev => !prev)}
                                        className='mt-3 w-full py-1 cursor-pointer hover:bg-zinc-300/3'>
                                        <a className='capitalize  px-5  transition-all duration-100 ease-linear  rounded-full 
                                '
                                        >
                                            {
                                                `
                                            ${idx === 0 && pageName[6].pageName
                                                ||
                                                idx === 1 && pageName[7].pageName
                                                }
                                            `
                                            }
                                        </a>
                                    </div>
                                ))}
                            </div>

                        </div> */}
                <Navbar chatCount={chatCount} />

                <MidSection user={user} />

                <SideBar openSwitchAccount={openSwitchAccount} closeSwitchAccount={closeSwitchAccount} user={user} />

                <div className='absolute right-12 bottom-8'>
                    <ChatPaneFloater userData={user} />
                </div>

            </div>)}

            {/* {
                story ?
                    (
                        <Story />
                    )
                    :
                    (
                        ''
                )
            } */}

            {
                message ?
                    (
                        <div className=' w-full h-screen bg-zinc-900 flex overflow-hidden'>
                            <Message />
                        </div>

                    )
                    :
                    (
                        ''
                    )
            }

            {
                notification ?
                    (
                        <Notification />
                    )
                    :
                    (
                        ''
                    )
            }

            {
                search ?
                    (
                        <Search />
                    )
                    :
                    (
                        ''
                    )
            }

            {
                reels ?
                    (
                        <Reels />
                    )
                    :
                    (
                        ''
                    )
            }

            {
                explore ?
                    (
                        <Explore />
                    )
                    :
                    (
                        ''
                    )
            }

            {
                help ?
                    (
                        <Help />
                    )
                    :
                    (
                        ''
                    )
            }

            {
                settings ?
                    (
                        <Settings />
                    )
                    :
                    (
                        ''
                    )
            }

        </div>
    )
}

export default HomePage