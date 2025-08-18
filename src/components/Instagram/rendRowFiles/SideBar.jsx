import React, { useState } from 'react'
import SwitchAcc from '../switchAccountComponents/SwitchAcc';
import SeeAllPopPro from '../sidebarComponents/SeeAllPopPro';
import OpenSwitchAccPage from '../sidebarComponents/OpenSwitchAccPage';

const SideBar = (openSwitchAccount, closeSwitchAccount, switchAcc) => {

    const [seeAllPopPro, setSeeAllPopPro] = useState(false);
    const [addAcc, setAddAcc] = useState(false);
    const [isfollow, setIsfollow] = useState(null);



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
            image: '/src/assets/ghostDP.jpg',
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
    const popPro = [
        {
            name: 'Ronaldo',
            username: 'Cristiano_Ronaldo',
            follow: 'follow',
            following: 'following',
            image: '/src/assets/dp/dp5.jpg',
            blueTick: <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
            </svg>,


        },
        {
            name: 'zeus',
            username: 'zeus.lumin',
            follow: 'follow',
            following: 'following',
            image: '/src/assets/dp/dp6.jpg',
            blueTick: <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
            </svg>,

        },
        {
            name: 'alexander',
            username: 'alexander_the_great',
            follow: 'follow',
            following: 'following',
            image: '/src/assets/dp/dp7.jpg',
            blueTick: <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
            </svg>,

        },
        {
            name: 'stfu._.meer',
            username: 'stfu._.meer',
            follow: 'follow',
            following: 'following',
            image: '/src/assets/dp/dp8.jpg',
            blueTick: <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
            </svg>,

        },
    ];




    const followHandler = (index) => {
        setIsfollow(index);
    }

    const [SwitchAccPage, setSwitchAccPage] = useState(false);
    const openSwitchAccPage = () => {
        setSwitchAccPage(true);

    }

    const closeSwitchAccPage = () => {
        setSwitchAccPage(false);
    }

    return (
        <div className='sidePanel h-full w-530 bg-amber-400/0 flex flex-col items-center justify-between pb-10'>
            <div className='  h-5/6 w-3/4 flex flex-col items-center pr-10 pt-20'>
                <div className='h-screen w-full  bg-zinc-950 rounded-3xl'>
                    <div className=' px-3 py-0.5 pt-2 flex items-center justify-between'>
                        <div className=' flex items-center gap-2'>
                            <div className=' profile h-12 w-12 bg-zinc-900/70 cursor-pointer border-2 border-zinc-800 rounded-full my-1 overflow-hidden'>
                                <div className='imgContainer w-full h-full'>
                                    <img className='h-full w-full object-cover' src={user[1].image} />
                                </div>

                            </div>
                            <div className='userInfo'>
                                <p className='text-xs text-white/90 font-medium'>aqeel_haider_wasee</p>
                            </div>

                        </div>

                        <button
                            onClick={() => openSwitchAccPage()}
                            className=' text-[12px] cursor-pointer font-semibold text-sky-600 py-1 px-2'>switch
                        </button>
                    </div>
                    {SwitchAccPage ? (<OpenSwitchAccPage closeSwitchAccount={closeSwitchAccount} setSwitchAccPage={setSwitchAccPage} />) : ('')}

                    <div className='px-3 '>
                        <div className='flex justify-between'>
                            <h1 className='font-medium text-xs text-zinc-600'>suggestion for you</h1>

                            <span
                                onClick={() => setSeeAllPopPro(prev => !prev)}
                                className='text-[13px] font-medium text-white cursor-pointer'>see all</span>
                        </div>
                    </div>

                    <div className='PopProfile max-h-58 w-full py-2  bg-zinc-600/0 overflow-y-scroll'>

                        {popPro.map((pop, idx) => (<div
                            key={idx}
                            className='chat flex gap-2 transition-all duration-100 ease-in-out hover:bg-zinc-300/5 px-2 '>
                            <div className=' profile h-12 min-w-12 max-w-12 bg-zinc-900/70 cursor-pointer border-2 border-zinc-800 rounded-full my-1 overflow-hidden'>
                                <div className='imgContainer w-full h-full'>
                                    <img className='h-full w-full object-cover' src={pop.image} />
                                </div>
                            </div>
                            <div className='detail w-full h-full flex justify-between'>
                                <div className='userInfo mt-3 w-full'>
                                    <h1
                                        className='text-xs text-white/90 font-medium capitalize leading-none'
                                    >
                                        {pop.name}
                                    </h1>
                                    <div className='flex justify-between  items-center w-full '>
                                        <p
                                            className='flex gap-1 text-[10px] text-white/60 font-normal lowercase'
                                        >
                                            @{pop.username}
                                            {pop.blueTick}
                                        </p>
                                        <div className='text-white flex items-center'>
                                            <button className='text-xs text-blue-500/90 font-semibold cursor-pointer'>
                                                {pop.follow}

                                            </button>
                                        </div>
                                    </div>


                                </div>

                                <div className=' flex  items-end'>
                                    <span
                                        onClick={() => { followHandler(idx); }}
                                        className='follow text-[12px] cursor-pointer font-semibold text-sky-600 mr-2'>
                                        {popPro.follow}
                                    </span>
                                </div>
                            </div>
                        </div>))}


                        {
                            seeAllPopPro ?
                                (
                                    <SeeAllPopPro />
                                )
                                :
                                (
                                    ''
                                )
                        }

                    </div>

                </div>

                <div className='pl-2  h-30 w-70 text-zinc-500  text-[12px] overflow-hidden'>
                    <div className='flex gap-1.5  leading-none mt-2'>
                        {
                            [
                                'about',
                                'help',
                                'press',
                                'API',
                                'jobs',
                                'privacy',
                                'terms',
                                'location',
                            ].map((elem, idx) => (
                                <a
                                    key={idx}
                                    className='cursor-pointer'
                                >
                                    {elem}
                                </a>
                            ))
                        }
                    </div>
                    <div className='leading-none text-[13.5px]'>
                        <button className='cursor-pointer'>Language</button>
                    </div>
                    <div className='leading-none text-[13.5px] mt-2'>
                        <p className='pointer-events-none'>© 2022 from Instagram</p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default SideBar