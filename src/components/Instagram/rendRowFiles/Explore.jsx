import React, { useState } from 'react'
import ChatPaneFloater from './ChatPaneFloater';
import HomePage from './HomePage';
import NavFlowII from './NavFlowII';

const Explore = ({ closeNaviHandler, navi, setNavi, userData }) => {

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

    const [addProfile, setaddProfile] = useState(false);

    return (

        <div className='absolute top-0 right-0 w-full h-screen bg-zinc-950 flex overflow-hidden'>
            <NavFlowII navi={navi} closeNaviHandler={closeNaviHandler} />
            <div className='absolute left-18 w-screen flex justify-start bg-red-200/0'>
                <div className='ml-1.5 mt-2 py-3  h-6 flex items-center justify-centerrounded-xl cursor-pointer active:scale-[.99]'>
                    <div
                        onClick={() => closeNaviHandler()}
                        className='flex items-center gap-2 cursor-pointer text-white'>
                        <svg aria-label="Back" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="23" role="img" viewBox="0 0 24 24" width="23"><title>Back</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            {addProfile ? (<HomePage />) : (<div className=' exploreContainer w-full h-screen bg-red-950/0 flex justify-center'>
                <div className='exploreContent w-2/3 h-full bg-red-300/0 overflow-y-scroll overflow-hidden'>
                    <div className='h-15 text-zinc-700/70 flex items-center px-2'>
                        <h1 className='text-2xl font-black leading-none'>
                            <i>#Explore</i>
                        </h1>
                    </div>
                    <div className=' flex flex-wrap gap-1 p-[4.5px]'>
                        {user.map((user, idx) => (
                            <div className='h-65 w-43 bg-zinc-300/3 cursor-pointer'>
                                <div className='imgContainer w-full h-full  overflow-hidden'>
                                    <img className='h-full w-full object-cover' src={user.image} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='absolute right-12 bottom-8'>
                    <ChatPaneFloater />
                </div>
            </div>)}

        </div>
    )
}

export default Explore