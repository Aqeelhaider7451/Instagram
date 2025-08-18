import React from 'react'
import { IoHeartOutline } from "react-icons/io5";





const Feed = () => {

    const user = [
        {
            username: "Aqeel_Haider_Wasee",
            image: '/src/assets/f3.png',
            video: '/src/assets/vid1.mp4',
            msgNum: 1,
            commentsNum: 21,
            uploadedDate: '1d'
        },
        {
            username: "haider",
            image: '/src/assets/f2.png',
            video: '/src/assets/vid2.mp4',
            msgNum: 5,
            commentsNum: 5,
            uploadedDate: '5d'

        },
        {
            username: "wasee",
            image: '/src/assets/dp3.jpg',
            video: '/src/assets/vid3.mp4',
            msgNum: 10,
            commentsNum: 10,
            uploadedDate: '1d'

        },
        {
            username: "rehan",
            image: '/src/assets/dp4.jpg',
            video: '/src/assets/vid1.mp4',
            msgNum: 4,
            commentsNum: 2,
            uploadedDate: '3d'

        },
        {
            username: "meer",
            image: '/src/assets/f1.png',
            video: '/src/assets/vid3.mp4',
            msgNum: 6,
            commentsNum: 1,
            uploadedDate: '1hr'

        },
    ];

    const feedData = [
        {
            para: 'jsbdjb jsdbhs  he bd hyshsh jhfsj jirojss kirhe yhe',
        }
    ]

    const feedIcons = [
        {
            icon: <svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>,
            // icon: <IoHeartOutline className='inline-block text-2xl ' />,
        },
        {
            icon: <svg aria-label="Direct" class="x1lliihq x1n2onr6 x1g9anri" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Direct</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
            </svg>
        },
        {
            icon: <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
            </svg>,
            // icon: <IoHeartOutline className='inline-block text-2xl ' />,
        },
        {
            icon: <svg aria-label="Save" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
            </svg>,
            // icon: <IoHeartOutline className='inline-block text-2xl ' />,
        },
    ];

    const storyIdx = [
        {
            username: "Aqeel_Haider",
            profile: '/src/assets/p1.jpg',
            image: '/src/assets/p2.jpg',
        },
        {
            username: "haider",
            profile: '/src/assets/p3.jpg',
            image: '/src/assets/p4.jpg',

        },
        {
            username: "wasee",
            profile: '/src/assets/p5.jpg',
            image: '/src/assets/p6.jpg',

        },
        {
            username: "rehan",
            profile: '/src/assets/p7.jpg',
            image: '/src/assets/p8.jpg',

        },
        {
            username: "meer",
            profile: '/src/assets/p1.jpg',
            image: '/src/assets/p5.jpg',
        },
        {
            username: "Aqeel_Haider_Wasee",
            profile: '/src/assets/p3.jpg',
            image: '/src/assets/p6.jpg',

        },
        {
            username: "Aqeel_Haider",
            profile: '/src/assets/p7.jpg',
            image: '/src/assets/f5.png',
        },
        {
            username: "WaseeHaider",
            profile: '/src/assets/p2.jpg',
            image: '/src/assets/p8.jpg',
        },
        {
            username: "Rehan_hadi",
            profile: '/src/assets/p8.jpg',
            image: '/src/assets/p9.jpg',
        },
        {
            username: "meer_Rehan",
            profile: '/src/assets/q1.jpg',
            image: '/src/assets/q2.jpg',
        },
    ];

    const saveHandler = (idx, elem) => {
        let save = elem[idx];
    }



    return (
        <div className='feedConatiner h-full w-3/4  '>
            {user.map((elem, idx) => (<div
                key={idx}
                className={` feed mt-10 bg-red-200/0
                        `}>
                <div className='content w-full  border-b-0 rounded-t-lg overflow-hidden'>
                    <div className='flex gap-2 justify-between items-center  p-2'>
                        <div className='flex gap-2 '>
                            <div className='storiesBorder h-13 w-13 flex items-center justify-center rounded-full'> {/* Add a unique key */}
                                <div
                                    className={`story relative h-12 w-12`}
                                >
                                    <div className=' profile flex items-center justify-center p-1 h-full w-full bg-zinc-950 cursor-pointer  rounded-full  overflow-hidden'>
                                        <div className='h-full w-full rounded-full'>
                                            <div className='imgContainer w-full h-full rounded-full overflow-hidden '>
                                                <img className='h-full w-full object-cover rounded-full' src={storyIdx[idx].image} alt={storyIdx[idx].username} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-1.5 text-white'>
                                <h1>{user[idx].username}</h1>
                                <div className='flex items-center gap-1.5'>
                                    <span className='h-1 min-w-1 bg-zinc-700 rounded-full mt-1'></span>
                                    <span className='text-xs'>{user[idx].uploadedDate}</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-zinc-500'>
                            <svg aria-label="Menu" class="" fill="currentColor" height="14" role="img" viewBox="0 0 24 24" width="14">
                                <title>Menu</title>
                                <circle cx="12" cy="12" r="2.75"></circle>
                                <circle cx="19.5" cy="12" r="2.75"></circle>
                                <circle cx="4.5" cy="12" r="2.75"></circle>
                            </svg>
                        </div>
                    </div>
                    <div className='imgContainer w-full h-[96vh] '>
                        <video className='h-full w-full object-cover' src={user[idx].video}>

                        </video>
                    </div>
                </div>

                <div className='reacth-8 z-[5] px-2 py-1  border-t-0 border-b-0 text-white/95 '>
                    <div className='flex'>
                        {feedIcons.map((feed, idx) => (

                            <a key={idx}
                                onClick={() => {
                                    saveHandler(idx)
                                }}
                                className={`
                                flex transition-all duration-150 ease-in hover:text-white hover:scale-[1] cursor-pointer
                                ${idx == 0 && ' mr-2'}
                                ${idx == 1 && ' mr-2'}
                                ${idx == 2 && ' mr-79'}
                                `}
                            >
                                <div>
                                    {feed.icon}
                                </div>

                            </a>
                        ))
                        }
                    </div>

                    {<div className='mb-1 -mt-[3px]'>
                        <span className=' font-medium text-xs  bg-zinc-900 z-[-1] pb-0.5 px-1 leading-none'>202 likes</span>
                    </div>}

                    {<div >
                        <div className='flex text-sm gap-2 items-center text-white/95'>
                            <h1 className='font-medium '>{user[idx].username}</h1>
                            <div className='feedDesc flex h-5 w-3/4 bg-red-300/0 overflow-x-hidden overflow-y-scroll'>
                                <p>hi, how are you ? what's new in this feed? commnet and let me get know...hi, how are you ? what's new in this feed? commnet and let me get know...hi, how are you ? what's new in this feed? commnet and let me get know...hi, how are you ? what's new in this feed? commnet and let me get know...</p>
                            </div>
                            <button ><span className='cursor-pointer'>more</span></button>
                        </div>
                        <div className='flex flex-col bg-red-300/0 border-b-1 border-zinc-700/70 pb-1'>
                            <span className='text-zinc-500 text-sm'>view all {user[idx].commentsNum} commnets</span>
                            <input className='text-white outline-none ' type='text' placeholder='Add a commnet' />
                        </div>
                    </div>}
                </div>
            </div>
            ))
            }
        </div>
    )
}

export default Feed