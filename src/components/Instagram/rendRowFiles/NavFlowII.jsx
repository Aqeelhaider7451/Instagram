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
import HomePage from './HomePage';
import Feed from './Feed';



import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { CgClapperBoard } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import PreSettings from '../settingsComponents/settings/preSettings/PreSettings';

const NavFlowII = ({ allIcons, navi, setNavi, closeNaviHandler, home, user }) => {

    const navItems = [
        {
            pageName: 'home',
            icon: <GoHome className='inline-block text-[27px]' />,
        },
        {
            pageName: 'search',
            icon: <CiSearch className='inline-block text-[27px]' />,
        },
        {
            pageName: 'explore',
            icon: <MdOutlineExplore className='inline-block text-[27px]' />,
        },
        {
            pageName: 'reels',
            icon: <svg aria-label="Reels" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Reels</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>,
        },
        {
            pageName: 'message',
            icon: <svg aria-label="Messenger" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Messenger</title><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path></svg>,
        },
        {
            pageName: 'notification',
            icon: <svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>,
        },
        {
            pageName: 'create',
            icon: <svg aria-label="New post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>New post</title><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>,
        },
        {
            pageName: 'profile',
            icon: <img className='h-6 w-6 rounded-full object-cover' src='/src/assets/ghostDP.jpg' alt='profile' />,
        },
        {
            pageName: 'settings',
            icon: <svg aria-label="Settings" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Settings</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="4" y2="4"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="12" y2="12"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="20" y2="20"></line></svg>,
        },
    ];





    const [navFlowii, setNavFlowii] = useState(null);
    const openNavFlowIIHandler = (index) => {
        setNavFlowii(index);
    }

    const closeNavFlowIIHandler = () => {
        setNavFlowii(null)
    }



    return (
        <div className='navbar py-2 pb-10 min-w-16.5  bg-zinc-950  flex flex-col justify-between '>
            <div className=' flex flex-col text-zinc-200/95 mx-1'>
                <div class="text-zinc-200/95 flex items-center justify-center py-[33.5px] gap-3 bg-red-200/0 mx-1">
                    <IoLogoInstagram className='inline-block text-3xl -mt-1' />
                </div>
                {navItems.map((navi, idx) => (
                    <div
                        onClick={() => setNavi(idx)}
                        className=' w-full flex items-center justify-center cursor-pointer hover:bg-zinc-300/5 p-3 rounded-lg'>
                        <a className='capitalize flex items-center gap-3 active:font-semibold   transition-all duration-100 ease-linear  rounded-full'
                        >
                            {navi.icon}
                        </a>
                    </div>
                ))}
            </div>

            {navi == 0 ? (<HomePage
                closeNaviHandler={closeNaviHandler}
                home={home}
                allIcons={allIcons}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}


            {navi == 0 ? (<Search
                closeNaviHandler={closeNaviHandler}
                home={home}
                allIcons={allIcons}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}

            {navi == 2 ? (<Explore
                closeNaviHandler={closeNaviHandler}
                home={home}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}



            {navi == 3 ? (<Reels
                closeNaviHandler={closeNaviHandler}
                home={home}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}



            {navi == 4 ? (<Message
                closeNaviHandler={closeNaviHandler}
                home={home}
                navi={navi}
                setNavi={setNavi}
                user={user}
                chatCount={chatCount} />) : ('')}



            {navi == 5 ? (<Notification
                closeNaviHandler={closeNaviHandler}
                home={home}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}



            {navi == 6 ? (<Create
                closeNaviHandler={closeNaviHandler}
                home={home}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}



            {navi == 7 ? (<Profile
                closeNaviHandler={closeNaviHandler}
                home={home}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}



            {navi == 8 ? (<PreSettings closeNaviHandler={closeNaviHandler}
                home={home}
                navi={navi}
                setNavi={setNavi}
                user={user} />) : ('')}
        </div>
    )
}

export default NavFlowII