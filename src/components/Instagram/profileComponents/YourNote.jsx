import React from 'react'

const YourNote = ({ setAddNote }) => {

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
            image: '/src/assets/ghostDP.jpg',
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


    return (
        <div className='absolute top-0 right-0 text-2xl text-white h-screen w-255 bg-zinc-950'>
            <div className='h-full w-full'>
                <div className='flex items-center justify-between w-full border-b-1 border-zinc-700/40 pt-2 pb-3 px-3'>
                    <div
                        onClick={() => setAddNote(false)}
                        className='flex items-center cursor-pointer text-white rotate-45'>
                        <svg aria-label="close" fill="currentColor" height="40" role="img" viewBox="0 0 24 24" width="40">
                            <title>close</title>
                            <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                        </svg>
                    </div>
                    <div>
                        <h1 className='text-[18px] font-medium'>New note</h1>
                    </div>
                    <div>
                        <button className='text-blue-500 text-[18px] cursor-pointer'>share</button>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full h-full'>
                    <div className=' flex flex-col gap-6 h-60 w-90 '>
                        <div className='flex flex-col items-center'>

                            <div>
                                <div className='imgContainer h-45 w-45 rounded-full overflow-hidden text-white text-9xl'>
                                    <img className='h-full w-full object-cover' src={user[1].image} />
                                </div>
                            </div>
                            <div className='h-40 w-50 -mt-50 mb-10'>
                                <div className='w-full h-18 bg-zinc-800 rounded-3xl overflow-hidden py-4 px-5'>
                                    <input className='h-full w-full outline-none text-[22px] tracking-tight text-zinc-400/80' placeholder='Share a thought...' />
                                </div>
                                <div className='h-2 w-4.5 bg-zinc-800 rounded-b-lg ml-7'></div>
                                <div className='h-2 w-2 bg-zinc-800 rounded-full ml-10 mt-1'></div>
                            </div>
                            <div>emoji</div>
                        </div>
                        <div className='flex items-center justify-center gap-1'>
                            <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="15"><title></title><path d="M12.931 4.132a3.5 3.5 0 1 1 2.575 5.871h-.06M22 17.546v-.688A3.858 3.858 0 0 0 18.143 13h-3.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><path d="M12.004 9.502a3.5 3.5 0 1 1-3.501-3.5 3.501 3.501 0 0 1 3.5 3.5Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M14.997 20.546v-.687A3.858 3.858 0 0 0 11.139 16H5.858A3.858 3.858 0 0 0 2 19.859v.687" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                            <p className='text-xs'>share with</p>
                            <h1 className='text-xs font-medium'>followers you follow back</h1>
                            <div className='rotate-180 mt-1 cursor-pointer'>
                                <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourNote