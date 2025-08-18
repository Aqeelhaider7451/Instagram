import React from 'react'

const HighLight2 = ({ highLightIndex, setShowHighLight, showHighLight }) => {


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
    const highLightData = [
        {
            name: 'new year party',
            image: '/src/assets/f3.png',
        },
        {
            name: 'go to lahore',
            image: '/src/assets/dp4.jpg',
        },
        {
            name: 'get together',
            image: '/src/assets/dp4.jpg',
        },
        {
            name: 'sleepy',
            image: '/src/assets/f1.png',
        },
    ];


    return (
        <div className='flex items-center justify-center  text-white text-2xl absolute top-0 left-0 h-screen w-full bg-zinc-950/50 backdrop-blur-[1px]'>
            <div
                onClick={() => setShowHighLight(null)}
                className='h-screen w-full '></div>
            <div className='h-screen min-w-120 bg-zinc-900/0 flex '>

                <div className='h-full w-20  flex items-center justify-center'>
                    <div>
                        <div className='h-12 w-12 bg-white/25 hover:bg-white/70 text-black flex items-center justify-center mr-30 rounded-full'>
                            <svg aria-label="" className='-rotate-90' fill="currentColor" height="25" role="img" viewBox="0 0 24 24" width="25">
                                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className=' h-[97vh] w-full mt-2 rounded-2xl  flex items-center bg-zinc-950 border-1 border-zinc-900 overflow-hidden'>
                    <div className='relative h-screen  flex items-center w-80 overflow-hidden'>
                        <div className='h-110 w-full '>
                            <img className='h-full w-full object-cover' src={highLightIndex.image} />
                        </div>

                        <div className='absolute top-0 left-0 w-full h-full bg-amber-300/0'>
                            <div className='flex flex-col  w-full bg-red-500/0 p-5'>
                                <div className='h-[3px] w-full rounded-full bg-white/20'>
                                    <div className='h-full w-10 rounded-full bg-white/80'></div>
                                </div>
                                <div className='flex justify-between py-5'>
                                    <div className='flex gap-3'>
                                        <div className='h-10 min-w-10 overflow-hidden rounded-full border-2 border-zinc-800'>
                                            <img className='h-full w-full object-cover' src={user[1].image} />
                                        </div>
                                        <div className='w-full flex flex-col gap-1'>
                                            <div className='flex items-center gap-1.5'>
                                                <h1 className='text-[13px]'>
                                                    {user[0].name}
                                                </h1>
                                                <span className='h-1 w-1 bg-zinc-700 mt-1 rounded-full'></span>
                                                <span className='text-xs font-medium text-zinc-700'>6w</span>
                                            </div>
                                            <div className='flex gap-1.5 cursor-pointer'>
                                                <div>
                                                    <svg aria-label="Reels" className="" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="15">
                                                        <title>Reels</title>
                                                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <span className='text-xs font-medium'>Watch full reel</span>
                                                <div>
                                                    <svg aria-label="" className="rotate-180 mt-[4px]" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
                                                        <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <svg aria-label="Audio is muted" className="cursor-pointer" fill="currentColor" height="16" role="img" viewBox="0 0 48 48" width="16"><title>Audio is muted</title><path clip-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fill-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg aria-label="Play" className="cursor-pointer" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Play</title><path d="M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg aria-label="Menu" className="cursor-pointer" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Menu</title><circle cx="12" cy="12" r="2.75"></circle><circle cx="19.5" cy="12" r="2.75"></circle><circle cx="4.5" cy="12" r="2.75"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='h-full w-20  flex items-center justify-center'>
                    <div>
                        <div className='h-12 w-12 bg-white/25 hover:bg-white/70 text-black flex items-center justify-center ml-30 rounded-full'>
                            <svg aria-label="" className='rotate-90' fill="currentColor" height="25" role="img" viewBox="0 0 24 24" width="25">
                                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div
                onClick={() => setShowHighLight(null)}
                className='h-screen w-full '></div>

        </div>
    )
}

export default HighLight2