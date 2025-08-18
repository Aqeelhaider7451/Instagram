import React, { useState } from 'react'
import MessageRequest from './messages/MessageRequest';
import Mention from './mentions/Mention';
import Tag from './tags/Tag';
import ContentRemixing from './content_remixing/ContentRemixing';

const WhoCanInteractWithYou = () => {

    const whoCanIntrctVU = [
        {
            pageName: 'Messages',
            svg: <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <title></title>
                <path d="M12.931 4.132a3.5 3.5 0 1 1 2.575 5.871h-.06M22 17.546v-.688A3.858 3.858 0 0 0 18.143 13h-3.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path>
                <path d="M12.004 9.502a3.5 3.5 0 1 1-3.501-3.5 3.501 3.501 0 0 1 3.5 3.5Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                <path d="M14.997 20.546v-.687A3.858 3.858 0 0 0 11.139 16H5.858A3.858 3.858 0 0 0 2 19.859v.687" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>,
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
        },
        {
            pageName: 'Tags',
            svg: <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title></title><path d="M6.71 9.555h10.581a2.044 2.044 0 0 1 2.044 2.044v8.357a2.044 2.044 0 0 1-2.043 2.043H6.71a2.044 2.044 0 0 1-2.044-2.044V11.6A2.044 2.044 0 0 1 6.71 9.555Zm1.07 0V6.222a4.222 4.222 0 0 1 8.444 0v3.333" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            ,
            knowMore: 'Public',
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,

        },
        {
            pageName: 'Mentions',
            svg: <svg aria-label="Messenger" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Messenger</title><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path>
            </svg>,
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
            knowMore: 'Everyone',

        },
        {
            pageName: 'Content remixing',
            svg: <svg aria-label="Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Post</title><path d="m18.509 14.757-4.285-2.474a.857.857 0 0 0-1.286.743v4.948a.857.857 0 0 0 1.286.742l4.285-2.474a.857.857 0 0 0 0-1.485ZM5.225 3.977a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25ZM19.5 7.5h-3v-3a4.004 4.004 0 0 0-4-4h-8a4.004 4.004 0 0 0-4 4v8a4.004 4.004 0 0 0 4 4h3v3a4.004 4.004 0 0 0 4 4h8a4.004 4.004 0 0 0 4-4v-8a4.004 4.004 0 0 0-4-4Zm-12 7h-3a1.997 1.997 0 0 1-1.882-1.349l2.607-2.607L7.5 12.819Zm.23-4.28L6.41 8.9a1.679 1.679 0 0 0-2.37 0L2.5 10.44V4.5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2v3h-3a3.992 3.992 0 0 0-3.77 2.72ZM21.5 19.5a2.003 2.003 0 0 1-2 2h-8a2.003 2.003 0 0 1-2-2v-8a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2Z"></path>
            </svg>,
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
            knowMore: 'No one',

        },
    ];
    const [woCanIntrctVU, setWoCanIntrctVU] = useState(null)
    const whoCanIntrctwithYou = (index) => {
        setWoCanIntrctVU(index)
    }

    return (
        <div className=' absolute top-0 left-0 text-white text-2xl h-screen w-full bg-zinc-950'>
            <div className='h-full w-full p-8'>
                <div className='px-3'>
                    <div>
                        <h1>Who can interact with you</h1>
                    </div>
                    <div className='py-10'>
                        <div className='h-full w-full border-1 border-zinc-800 rounded-3xl px-5 py-3'>
                            {whoCanIntrctVU.map((page, idx) => (
                                <div
                                    onClick={() => whoCanIntrctwithYou(idx)}
                                    className='flex justify-between items-center'>
                                    <div

                                        className='flex gap-2 py-[13px] items-center cursor-pointer'>
                                        
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
                    {woCanIntrctVU == 0 ? (<MessageRequest />) : ('')}
                    {woCanIntrctVU == 1? (<Tag />) : ('')}
                    {woCanIntrctVU == 2 ? (<Mention />) : ('')}
                    {woCanIntrctVU == 3 ? (<ContentRemixing />) : ('')}
                </div>
            </div>
        </div>
    )
}

export default WhoCanInteractWithYou