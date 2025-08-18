import React, { useState } from 'react'
import ChatPaneFloater from './ChatPaneFloater';
import HomePage from './HomePage';
import NavFlowII from './NavFlowII';


const Search = ({ closeNaviHandler, navi, setNavi, allIcons, }) => {

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

    const [cancelSearch, setCancelSearch] = useState(null);
    const inputHanlder = (e) => {
        setCancelSearch(e.target.value);
    }
    const clearInputHanlder = () => {
    }


    return (

        <div className='flex absolute top-0 left-0 w-full h-screen   overflow-hidden'>

            <div className='flex w-105 bg-zinc-950'>
                <NavFlowII allIcons={allIcons} navi={navi} closeNaviHandler={closeNaviHandler} setNavi={setNavi} />
                <div className='w-screen px-2 flex flex-col bg-red-200/0'>
                    <div className='flex flex-col justify-between w-full px-5 py-4 bg-emerald-400/0 h-35 text-white border-b-1 border-zinc-700/40'>
                        <h1 className='text-2xl font-semibold'>Search</h1>
                        <div className='bg-zinc-800 px-3 py-1.5 rounded-md flex justify-between items-center'>
                            <input
                                onChange={(e) => inputHanlder(e)}
                                className='w-full h-ull outline-none' placeholder='Search '  />
                            {cancelSearch == null ? ('') : (<div
                                onClick={() => {
                                    setCancelSearch(null);
                                }}
                                className='h-4 w-4 flex items-center justify-center bg-white/70 rounded-full cursor-pointer '>
                                <div className='h-full w-full flex items-center justify-center'>
                                    <span className='text-zinc-900/90 ml-[2.5px] mb-[1.75px] rotate-45 font-bold'>+</span>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className='searchScroller py-3 w-full bg-emerald-500/0 h-124 overflow-hidden overflow-y-scroll text-white'>
                        <div className='flex  px-5 items-center justify-between'>
                            <h1 className='font-semibold'>Recent</h1>
                            <button className='text-blue-500 font-semibold cursor-pointer'>clear all</button>
                        </div>
                        <div className='h-full w-full py-5'>
                            {user.map((user, idx) => (<div className=' py-2.5 px-5 flex items-center justify-between w-full cursor-pointer hover:bg-zinc-900/70'>
                                <div className='flex items-center gap-3'>
                                    <div className='imgContainer h-11 w-11 rounded-full overflow-hidden text-white text-9xl'>
                                        <img className='h-full w-full object-cover' src={user.image} />
                                    </div>
                                    <div className='flex flex-col gap-0.5'>
                                        <h1 className='text-[13px] leading-none font-[650]'>{user.username}</h1>
                                        <span className='leading-none text-xs text-zinc-300 '>{user.name}</span>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className=' flex items-center justify-center'>
                                        <span className='text-zinc-700 text-4xl ml-[2.5px] mb-[1.75px] rotate-45 font-extralight'>+</span>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                onClick={() => closeNaviHandler()}
                className='text-4xl text-white h-screen w-full bg-zinc-950/60'></div>
            <div className='absolute right-12 bottom-8'>
                <ChatPaneFloater />
            </div>
        </div>
    )
}

export default Search