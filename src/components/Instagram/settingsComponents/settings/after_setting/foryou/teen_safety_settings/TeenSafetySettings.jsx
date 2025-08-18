import React, { useState } from 'react'
import ParentOrGuardian from './guardian/ParentOrGuardian';
import AccountAndPrivacy from './Account_and_Privacy/AccountAndPrivacy';
import WhoCanInteractWithYou from './who_can_interact_with_you/WhoCanInteractWithYou';
import WhatYouSee from './what_you_see/WhatYouSee';

const TeenSafetySettings = () => {

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

    const teenSettData = [
        {
            pageName: 'Parent or guardian',
            svg: <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title></title>
                <path d="M12.931 4.132a3.5 3.5 0 1 1 2.575 5.871h-.06M22 17.546v-.688A3.858 3.858 0 0 0 18.143 13h-3.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path>
                <path d="M12.004 9.502a3.5 3.5 0 1 1-3.501-3.5 3.501 3.501 0 0 1 3.5 3.5Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                <path d="M14.997 20.546v-.687A3.858 3.858 0 0 0 11.139 16H5.858A3.858 3.858 0 0 0 2 19.859v.687" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>,
            knowMore: 'add',
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
        },
        {
            pageName: 'Account and Privacy',
            svg: <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title></title><path d="M6.71 9.555h10.581a2.044 2.044 0 0 1 2.044 2.044v8.357a2.044 2.044 0 0 1-2.043 2.043H6.71a2.044 2.044 0 0 1-2.044-2.044V11.6A2.044 2.044 0 0 1 6.71 9.555Zm1.07 0V6.222a4.222 4.222 0 0 1 8.444 0v3.333" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            ,
            knowMore: 'Public',
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
        },
        {
            pageName: 'Who can interact with you',
            svg: <svg aria-label="Messenger" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Messenger</title><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path>
            </svg>,
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
        },
        {
            pageName: 'Wnat you see',
            svg: <svg aria-label="Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Post</title><path d="m18.509 14.757-4.285-2.474a.857.857 0 0 0-1.286.743v4.948a.857.857 0 0 0 1.286.742l4.285-2.474a.857.857 0 0 0 0-1.485ZM5.225 3.977a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25ZM19.5 7.5h-3v-3a4.004 4.004 0 0 0-4-4h-8a4.004 4.004 0 0 0-4 4v8a4.004 4.004 0 0 0 4 4h3v3a4.004 4.004 0 0 0 4 4h8a4.004 4.004 0 0 0 4-4v-8a4.004 4.004 0 0 0-4-4Zm-12 7h-3a1.997 1.997 0 0 1-1.882-1.349l2.607-2.607L7.5 12.819Zm.23-4.28L6.41 8.9a1.679 1.679 0 0 0-2.37 0L2.5 10.44V4.5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2v3h-3a3.992 3.992 0 0 0-3.77 2.72ZM21.5 19.5a2.003 2.003 0 0 1-2 2h-8a2.003 2.003 0 0 1-2-2v-8a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2Z"></path>
            </svg>,
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
        },
    ];

    const [prntOrGrdn, setPrntOrGrdn] = useState(null);
    const prntOrGuardian = (index) => {
        setPrntOrGrdn(index);
    }

    return (
        <div className='absolute top-0 right-3 text-white text-3xl h-screen w-176.5 bg-zinc-950'>
            <div className='h-full w-full  py-7 px-10'>
                <div className=' flex items-center justify-between text-2xl tracking-tight font-bold'>Teen safety settings
                    <div>
                        <svg aria-label="Conversation information" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Conversation information</title><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                        </svg>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center gap-3 py-5'>
                        <div className='profile h-30 w-30 bg-zinc-900/70 cursor-pointer rounded-full overflow-hidden m-[3px]'>
                            <img className='w-full h-full object-cover' src={user[1].image} />
                        </div>
                        <div className='text-xl flex items-center justify-center w-full'>
                            <h1 className='leading-none lowercase'>{user[0].username}</h1>
                        </div>
                        <div className='flex flex-col items-center text-sm text-zinc-400 mt-5'>
                            <div className=''>
                                <p>Your teen account comes with built-in settings to keep you safe. You can review and adjust </p>
                            </div>
                            <div className='flex gap-1'>
                                <p>these settings to make sure they're right for you.</p>
                                <button className='text-blue-400'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-60 w-full px-5 text-lg'>
                    <div className='h-full w-full border-1 border-zinc-800 rounded-3xl px-5 py-3'>
                        {teenSettData.map((page, idx) => (
                            <div
                                onClick={() => prntOrGuardian(idx)}
                                className='flex justify-between items-center'>
                                <div

                                    className='flex gap-2 py-[13px] items-center '>
                                    <div>
                                        {page.svg}
                                    </div>
                                    <h1 className='text-[16px]'>{page.pageName}</h1>
                                </div>
                                <div

                                    className='flex gap-2 items-center text-zinc-500/80 cursor-pointer'>
                                    <span className='text-[16px]'>{page.knowMore}</span>
                                    <div className='rotate-90 text-[16px]'>
                                        {page.forward}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {prntOrGrdn == 0 ? (<ParentOrGuardian />) : ('')}
                {prntOrGrdn == 1 ? (<AccountAndPrivacy />) : ('')}
                {prntOrGrdn == 2 ? (<WhoCanInteractWithYou />) : ('')}
                {prntOrGrdn == 3 ? (<WhatYouSee />) : ('')}
            </div>
        </div>
    )
}

export default TeenSafetySettings