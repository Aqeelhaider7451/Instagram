import React, { useState } from 'react'
import Navbar from './Navbar';
import NavII from './NavII';

import { IoSettingsOutline } from "react-icons/io5";
import ChatPaneFloater from './ChatPaneFloater';
import ProfileSettings from '../profileComponents/ProfileSettings';
import ProfileContent from '../profileComponents/ProfileContent';
import AddNewHighlight from '../svgComponents/AddNewHighlight';
import CloseSvg from '../svgComponents/CloseSvg';
import YourNote from '../profileComponents/YourNote';
import FollowersPage from '../profileComponents/FollowersPage';
import FollowingPage from '../profileComponents/FollowingPage';
import ArchivePage from '../profileComponents/ArchivePage';
import HighLight from '../profileComponents/highlight/HighLight';



const Profile = ({ setSettings, closeNaviHandler }) => {

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

    const user = [
        {
            username: "Aqeel_Haider_Wasee",
            image: '/src/assets/f3.png',
            msgNum: 1,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5min ago'


        },
        {
            username: "haider",
            image: '/src/assets/ghostDP.jpg',
            msgNum: 5,
            sendMsg: 'hi, r u ready ? i am just coming',
            sendAgo: '5s ago'
        },
        {
            username: "wasee",
            image: '/src/assets/dp3.jpg',
            msgNum: 10,
            sendMsg: 'hi, r u ready ? i am just coming in 5 minutes',
            sendAgo: '5 min ago'


        },
        {
            username: "rehan",
            image: '/src/assets/dp4.jpg',
            msgNum: 4,
            sendMsg: 'hi, r u ready ? i am just coming in 5 minutes. OK!',
            sendAgo: '5 min ago'


        },
        {
            username: "meer",
            image: '/src/assets/f1.png',
            msgNum: 6,
            sendMsg: 'hi, r u ready ? i am just coming in 5 minutes ? ',
            sendAgo: '5 min ago'


        },
    ];

    const notes = [

        {
            note: "hi, there . whats up?",
            noteUser: 'hadi'

        },


        {
            note: "today is monday ",
            noteUser: 'haider'

        },


        {
            note: "something new found in my story something new found in my story",
            noteUser: 'meer_hadi_aesthetic'

        },


        {
            note: "here and there",
            noteUser: 'meer_Rehan'
        }

    ];



    const settingsQueryNames = [

        {
            pageName: 'privacy'
        },
        {
            pageName: 'Switch Appearance'
        },
        {
            pageName: 'Your Activity'
        },
        {
            pageName: 'Switch Account'
        },
        {
            pageName: 'more settings'
        },
        {
            pageName: 'settings'
        },
        {
            pageName: 'logout'
        },
    ]

    const [profileSettings, setProfileSettings] = useState(null);

    const [selectedContentIndex, setSelectedContentIndex] = useState(null);
    const contentHandler = (index) => {
        setSelectedContentIndex(index);
    }

    const closeContentHandler = () => {
        setSelectedContentIndex(null);
    }

    const [addNote, setAddNote] = useState(false);
    const addYourNoteHandler = () => {
        setAddNote(true);
    }
    const closeYourNoteHandler = () => {
        setAddNote(false);
    }

    const [followersPageIn, setFollowersPageIn] = useState(false);
    const followinHandler = (index) => {
        setFollowersPageIn(index);
    }

    const closeFollowinHandler = () => {
        setFollowersPageIn(false);
    }

    const [openArchive, setOpenArchive] = useState(false);
    const openArchiveHandler = () => {
        setOpenArchive(true)
    }
    const closeArchiveHandler = () => {
        setOpenArchive(false)
    }

    return (
        <div className='absolute top-0 left-0 flex  UserProfile  w-full  h-screen  overflow-hidden '>
            <NavII setSettings={setSettings} />

            <div className='Pofile h-full w-full p-1 text-white bg-zinc-950 overflow-y-scroll'>
                <div className='w-full px-2 pb-3 '>
                    <div
                        className='cursor-pointer'
                        onClick={() => closeNaviHandler()}
                    >
                        <svg aria-label="Back" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Back</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                        </svg>
                    </div>
                </div>
                <div className='preQuery w-full h-100 '>
                    <div className='flex h-2/5 bg-red-200/0'>
                        <div className='w-1/3 flex justify-center'>
                            <div
                                className='note  profile flex flex-col items-center justify-start h-37 w-37 rounded-full'>
                                <div className='imgContainer h-37 w-37 mt-5 rounded-full overflow-hidden'>
                                    <img className='h-full w-full object-cover' src={user[1].image} />
                                </div>
                                <div className='-mt-25 w-fit h-10 bg-zinc-900/0'>
                                    <div className='h-full w-full  flex flex-col gap-[2px]'>
                                        <div className=' w-full'>
                                            <div
                                                onClick={() => addYourNoteHandler()}
                                                className='flex items-center -mt-18.5 min-h-12 max-w-12 max-h-10 py-[3px] px-1.5  bg-zinc-800 rounded-xl border-1 border-zinc-800/60  border-b-0 overflow-hidden  cursor-pointer'>
                                                <p className='text-[.7rem] w-13 leading-3  text-zinc-400 capitalize'>note...</p>
                                            </div>
                                            {addNote ? (<YourNote setAddNote={setAddNote} />) : ('')}
                                        </div>
                                        <div className=''>
                                            <div className='h-[5px] w-2.5 bg-zinc-800 text-zinc-900 rounded-sm rounded-t-none -mt-[29px] ml-[8px] border-1 border-zinc-800/0 border-t-0'></div>

                                        </div>
                                        <div className=''>
                                            <div className='h-[5.5px] w-[5.5px] bg-zinc-800 text-zinc-700 rounded-full  ml-[15px] -mt-[24px] border-1 border-zinc-800/60'></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 bg-red-50/0 flex flex-col text-white'>
                            <div className='flex items-center pb-4'>
                                <div className=' w-1/3 text-xl lowercase'>{user[0].username}</div>
                                <div className='flex items-center  w-1/2 gap-2'>
                                    <button className='py-1.5 px-3 bg-zinc-700/50 rounded-md cursor-pointer font-medium67'>edit profile</button>
                                    <button
                                        onClick={() => openArchiveHandler()}
                                        className='py-1.5 px-3 bg-zinc-700/50 rounded-md cursor-pointer font-medium67'>view archieve</button>
                                    {openArchive ? (<ArchivePage closeArchiveHandler={closeArchiveHandler} userData={user} />) : ('')}
                                    <IoSettingsOutline
                                        onClick={() => setProfileSettings(prev => !prev)}
                                        className='text-xl cursor-pointer'
                                    />

                                    {profileSettings ? (
                                        < ProfileSettings setProfileSettings={setProfileSettings} />

                                    )
                                        :
                                        (
                                            ''
                                        )
                                    }
                                </div>
                            </div>

                            <div className='w-1/2 flex items-center justify-between py-5'>
                                {['post', 'followers', 'following'].map((elem, idx) => (
                                    <div
                                        onClick={() => followinHandler(idx)}
                                        className='flex gap-1'>
                                        <h1>1</h1>
                                        <span
                                            className={`cursor-pointer text-zinc-400 ${idx == 0 && 'cursor-text'}`}
                                        >
                                            {elem}
                                        </span>
                                    </div>
                                ))}

                                {followersPageIn == 1 ? (<FollowersPage closeFollowinHandler={closeFollowinHandler} />) : ('')}
                                {followersPageIn == 2 ? (<FollowingPage closeFollowinHandler={closeFollowinHandler} />) : ('')}
                            </div>

                            <div className='py-5'>
                                <p>gulon se khar ache hain jo daman tham lete hain</p>
                            </div>

                        </div>
                    </div>
                    <HighLight />
                </div>

                <div className='secQuery  text-zinc-600'>
                    <div className='flex justify-between'>
                        {
                            [
                                'post',
                                'save',
                                'taged',
                            ].map((elem, idx) => (
                                <div className='flex items-center justify-center w-full p-2 cursor-pointer'>
                                    <a>{elem}</a>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex gap-1 flex-wrap w-full border-t-1 border-zinc-700 text-white'>
                        {
                            user.map((content, idx) => (
                                <div
                                    onClick={() => contentHandler(idx)}
                                    key={idx}
                                    className='h-[235px] w-[231.75px] bg-zinc-900 cursor-pointer'>
                                    <div className='imgContainer h-full w-full overflow-hidden'>
                                        <img className='h-full w-full object-cover' src={content.image} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {selectedContentIndex !== null ? (
                        <ProfileContent
                            contentData={user[selectedContentIndex]}
                            closeContent={closeContentHandler}
                        />
                    )
                        :
                        (
                            ''
                        )
                    }
                </div>
            </div>
            <div className='absolute right-12 bottom-8'>
                <ChatPaneFloater />
            </div>
        </div>
    )
}

export default Profile
