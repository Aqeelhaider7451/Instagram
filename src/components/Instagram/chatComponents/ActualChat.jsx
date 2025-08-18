import React from 'react'

const ActualChat = ({ allConversations, userData }) => {
    const callIncon = [
        {
            icon: <svg aria-label="Audio call" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="21.5" role="img" viewBox="0 0 24 24" width="21.5"><title>Audio call</title><path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path>
            </svg>,
        },
        {
            icon: <svg aria-label="Video call" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="21.5" role="img" viewBox="0 0 24 24" width="21.5"><title>Video call</title><rect fill="none" height="18" rx="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="16.999" x="1" y="3"></rect><path d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>,
        },
        {
            icon: <svg aria-label="Conversation information" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="21.5" role="img" viewBox="0 0 24 24" width="21.5"><title>Conversation information</title><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
            </svg>,
        },
    ];

    return (
        <div className='absolute top-0 right-0 mid w-202 h-full bg-zinc-950 flex flex-col'>
            {/* Top header for the chat - this part is rendered only once */}
            <div className='top h-20 bg-zinc-700/0 flex items-center justify-between p-3 border-b-1 border-zinc-800/50'>
                <div className='flex gap-1.5'>
                    <div className='profile h-12 w-12 bg-zinc-900/70 cursor-pointer rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src={userData.image} />
                    </div>
                    <div className='userInfo'>
                        <div className='flex items-center gap-1'>
                            <h1 className='font-medium'>{userData.username}</h1>
                            <div className='mt-1'>
                                <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12">
                                    <title>Verified</title>
                                    <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <p className='text-[12px] text-zinc-600 font-medium'>@{userData.handlerName}</p>
                    </div>
                </div>
                <div className='text-sm text-white flex items-center gap-3 mr-2'>
                    {callIncon.map((icon, idx) => (<button key={idx} className='cursor-pointer'>{icon.icon}</button>))}
                </div>
            </div>

            {/* Chat message box - this part is rendered only once */}
            <div className='chatBox min-h-[80vh] overflow-y-scroll flex flex-col'>
                <div className='w-fulll p-5 flex flex-col items-center gap-2'>
                    {/* User profile section - rendered only once */}
                    <div className='flex items-center justify-center'>
                        <div className='profile h-22 w-22 bg-zinc-900/70 cursor-pointer rounded-full overflow-hidden'>
                            <img className='w-full h-full object-cover' src={userData.image} />
                        </div>
                    </div>

                    {userData === 0 ? (<div className='flex items-center gap-1 justify-center'>
                        <div>
                            <h1 className='leading-none font-medium '>{userData.username}</h1>
                        </div>
                    </div>) : (<div className='flex items-center gap-1 justify-center'>
                        <div>
                            <h1 className='leading-none font-medium '>{userData.username}</h1>
                        </div>
                        <div className='mt-1'>
                            <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12">
                                <title>Verified</title>
                                <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>)}

                    <div className='flex items-center gap-1 text-[13px] text-zinc-500'>
                        <span className='leading-none'>{userData.handlerName}</span>
                        <span className='h-[3px] w-[3px] mt-1 bg-zinc-600 rounded-full'></span>
                        <span className='leading-none'>Instagram</span>
                    </div>
                    <div className='w-full flex items-center justify-center mt-3'>
                        <button className='px-3 py-1 bg-zinc-800 rounded-md text-[13px] font-medium'>view profile</button>
                    </div>
                </div>

                {/* Message rendering section - this is where we map over the messages */}
                <div className='p-5 pt-0'>
                    {allConversations.map((msg, idx) => (<div key={idx} className={`w-full flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mt-5`}>
                        <div className=''>
                            {msg.sender !== 'me' ? (<div className='flex gap-1'>
                                <div className='profile h-7 w-7 bg-zinc-900/70 cursor-pointer rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={userData.image} />
                                </div>
                                <div className={`py-2 px-3 max-w-60 rounded-2xl ${msg.sender === 'me' ? 'bg-blue-700 ' : 'bg-zinc-800'}`}>
                                    <p className='leading-3.5 text-[12px] font-medium text-white/97'>{msg.msg}</p>
                                </div>
                            </div>) : (<div className='flex gap-1'>

                                <div className={`py-2 px-3 max-w-60 rounded-2xl ${msg.sender === 'me' ? 'bg-blue-700 ' : 'bg-zinc-800 '}`}>
                                    <p className='leading-3.5 text-[12px] font-medium text-white/97'>{msg.msg}</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className='h-full w-full flex flex-col justify-between'>
                <div className='bottom w-full mb-2 flex items-center bg-zinc-950 py-3 justify-center '>
                    <div className='h-10 w-[90%] px-5 flex justify-between items-center bg-zinc-800/40 border-1 border-zinc-300/3 rounded-full'>
                        <input className='w-full outline-none placeholder:text-s2' type='text' placeholder='type message here ' />
                        <p>send</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActualChat