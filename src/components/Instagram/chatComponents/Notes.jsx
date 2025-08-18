import React from 'react'

const Notes = ({ }) => {

    const user = [
        {
            username: "BMW",
            image: '/src/assets/f2.png',
            msgNum: 1,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5m',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'who you might know on Instagram',
            updateTime: '1d',
            updateAction: 'follow',
            handlerName: 'b.m.w' // Add handlerName to each user object
        },
        {
            username: "BMW",
            image: '/src/assets/f2.png',
            msgNum: 1,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5m',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'who you might know on Instagram',
            updateTime: '1d',
            updateAction: 'follow',
            handlerName: 'b.m.w' // Add handlerName to each user object
        },
        {
            username: "haider",
            image: '/src/assets/wllpr1.jpg',
            msgNum: 5,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '1d',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'who you might know on Instagram',
            updateTime: '10d',
            updateAction: 'follow',
            handlerName: 'haider_3324'
        },
        {
            username: "wasee",
            image: '/src/assets/dp3.jpg',
            msgNum: 10,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '12m',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'start following you',
            updateTime: '1h',
            updateAction: 'follow back',
            handlerName: "wasee_('')"
        },
        {
            username: "rehan",
            image: '/src/assets/dp4.jpg',
            msgNum: 4,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '1w',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'lked your story',
            updateTime: '23h',
            updateAction: 'check',
            handlerName: 'rehan_.'
        },
        {
            username: "meer",
            image: '/src/assets/f1.png',
            msgNum: 6,
            sendMsg: 'hi, r u ready ? ',
            sendAgo: '5s',
            online: '| online',
            whenActive: ': 1 hr ago',
            updateMessage: 'mentioned you in their story',
            updateTime: '10d',
            updateAction: 'check',
            handlerName: 'mee.r.|.'
        },


    ];


    const notes = [

        {
            note: "note...",
            image: '/src/assets/ghostDP.jpg',
            noteUser: 'Your note',

        },


        {
            note: "today is monday ",
            noteUser: 'haider',
            image: '/src/assets/dp5.jpg',



        },


        {
            note: "something new found in my story something new found in my story",
            noteUser: 'hadi_aesthetic',
            image: '/src/assets/f2.png',


        },
        {
            note: "something new found in my story something new found in my story",
            noteUser: 'meer_hadi',
            image: '/src/assets/wllpr1.jpg',

        },


        {
            note: "here and there",
            noteUser: 'meer_Rehan',
            image: '/src/assets/pdp.jpg',
        },

    ];




    return (
        <div>
            <div className='activtyStatus   flex items-center '>
                <div className='notesContainer w-95.5 overflow-x-scroll bg-amber-300/0 overflow-hidden flex items-center gap-7 text-[12px]  px-5 py-20 text-zinc-400/80 h-25'>
                    {notes.map((note, idx) => (<div
                        key={idx}
                        className='relative note profile flex flex-col  h-25 w-25 rou nded-full'>
                        <div className='absolute bottom-15 bg-red-500/0 flex items-end'>
                            <div className='h-full w-full   flex flex-col gap-[2px] '>
                                <div className=' w-full '>
                                    <div className={`${idx == 0 && 'min-w-10 h-5 ml-1 flex items-center'} flex items-start max-h-13 min-h-10 max-w-25 py-[3px] px-1.5 -ml-3  bg-zinc-800   text-zinc-700 rounded-xl overflow-hidden`}>
                                        <p className={`${idx == 0 && 'min-w-10  h-full flex items-center'} text-xs max-w-25 text-white/80`}>{note.note}</p>
                                    </div>
                                    <div className=''>
                                        <div className={`${idx == 0 && 'ml-3.5'} h-[5px] w-2 bg-zinc-800 rounded-full rounded-t-none -mt-[2px]  border-t-0`}></div>

                                    </div>
                                    <div className={` h-1 w-full  text-zinc-700 rounded-full  ml-[10px] `}>
                                        <div className={`${idx == 0 && 'ml-2.5'} h-full w-1 bg-zinc-800 rounded-full -ml-1`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='imgContainer h-20 w-20 rounded-full overflow-hidden text-white '>
                            <img className='h-full w-full object-cover' src={note.image} />
                        </div>

                        <div className='badge px-1 -mb-4.5 flex items-center justify-center  h-4 w-20 mt-1  rounded-full overflow-hidden'>
                            <p className='text-[12px] text-zinc-500 font-medium leading-none tracking-tighter'>{note.noteUser}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Notes