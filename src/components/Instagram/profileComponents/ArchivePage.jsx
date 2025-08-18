import React from 'react'

const ArchivePage = ({ closeArchiveHandler, userData }) => {
    return (
        <div className='w-255 h-screen absolute top-0 right-0  overflow-x-hidden'>
            <div className='ArchivedStoriesContainer w-255 h-full px-25 pt-6 bg-zinc-950  overflow-hidden overflow-y-scroll text-white text-2xl'>
                <div className='h-full w-full bg-zinc-950 flex flex-col mb-20'>
                    <div className='flex flex-col justify-between h-1/4 w-full bg-red-300/0 border-b-1 border-zinc-700/50'>
                        <div className='w-full flex items-center gap-2'>
                            <div
                                onClick={() => closeArchiveHandler()}
                                className=' flex items-center mt-1'>
                                <svg aria-label="Back" className="cursor-pointer" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Back</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                                </svg>
                            </div>
                            <h1>Archive</h1>
                        </div>
                        <div className='flex justify-center w-full'>
                            <div className='flex items-center gap-1 border-b-[1.75px] border-white px-1 pb-3'>
                                <div>
                                    <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><path d="M3.915 5.31q.337-.407.713-.779m-3.121 7.855Q1.5 12.194 1.5 12a10.505 10.505 0 0 1 .516-3.265m3.243 11.338a10.55 10.55 0 0 1-2.89-3.864m14.482 5.108a10.547 10.547 0 0 1-8.163.65M12.002 1.5a10.504 10.504 0 0 1 7.925 17.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                    </svg>
                                </div>
                                <h1 className='text-[14px] font-semibold uppercase'>Stories</h1>
                            </div>

                        </div>
                    </div>
                    <div className=' h-full w-full'>
                        <div className='h-1/6  flex items-center'>
                            <p className='text-[13px] text-zinc-400'>Only you can see your archived stories unless you choose to share them. </p>
                        </div>
                        <div className='flex'>
                            <div className=' h-100 w-full pb-20 flex gap-1 flex-wrap '>
                                {userData.map((user,idx)=>(
                                    <div className='relative h-100 w-67.5  '>
                                    <div className='imgContainer h-full w-full  cursor-pointer overflow-hidden'>
                                        <img className='h-full w-full object-cover' src={user.image} />
                                    </div>

                                    <div className='flex justify-between absolute top-0 left-0 p-3 h-full w-full text-white '>
                                        <div className='p-1 w-9 h-12 rounded-md flex flex-col gap-0.5 items-center bg-white'>
                                            <h1 className='text-xs text-zinc-950 font-bold leading-none'>23</h1>
                                            <p className='text-xs text-zinc-950 font-[450] leading-none'>Jul</p>
                                            <span className='text-xs text-zinc-950 font-[450] leading-none'>2025</span>
                                        </div>
                                        <div>
                                            <svg aria-label="Story exists in a highlight" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Story exists in a highlight</title><path d="M3.915 5.31q.337-.407.713-.779m-3.121 7.855Q1.5 12.194 1.5 12a10.505 10.505 0 0 1 .516-3.265m3.243 11.338a10.55 10.55 0 0 1-2.89-3.864m14.482 5.108a10.547 10.547 0 0 1-8.163.65M12.002 1.5a10.504 10.504 0 0 1 7.925 17.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M12.002 9.201c-.005.003-.006.001-.008 0a2.555 2.555 0 0 0-2.201-1.157A2.92 2.92 0 0 0 7 11.072c0 1.528 1.122 2.504 2.207 3.447q.198.171.396.346l.473.424c.918.821 1.369 1.223 1.584 1.362a.628.628 0 0 0 .68 0c.205-.133.58-.465 1.633-1.406l.424-.38c.137-.122.275-.24.412-.36 1.077-.935 2.191-1.9 2.191-3.433a2.92 2.92 0 0 0-2.793-3.028 2.544 2.544 0 0 0-2.205 1.157Z" fill-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ArchivePage