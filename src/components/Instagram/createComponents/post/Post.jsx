import React from 'react'

const Post = ({ setNewPost, closeNaviHandler }) => {
    return (
        <div className='absolute top-0 left-0 h-screen w-screen bg-zinc-900/60 flex items-center'>
            <div
                onClick={() => closeNaviHandler()}
                className='h-full w-full'></div>
            <div className='h-95 min-w-100 bg-zinc-900 overflow-hidden rounded-3xl border-1 border-zinc-800 border-t-0'>
                <div className='title capitalize py-2 px-3 flex items-center justify-center bg-zinc-950 text-white/95 border-b-1 border-zinc-800/90'>
                    <h1 className='text-sm font-medium'>create new post</h1>
                </div>
                <div className='h-85 w-full flex items-center justify-center'>
                    <div className='h-70 w-70  flex flex-col items-center justify-center gap-3 text-white/86'>
                        <div className='text-gray-300/70'>
                            <svg aria-label="" fill="currentColor" height="94" role="img" viewBox="0 0 24 24" width="94">
                                <title></title>
                                <path d="m18.509 14.757-4.285-2.474a.857.857 0 0 0-1.286.743v4.948a.857.857 0 0 0 1.286.742l4.285-2.474a.857.857 0 0 0 0-1.485ZM5.225 3.977a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25ZM19.5 7.5h-3v-3a4.004 4.004 0 0 0-4-4h-8a4.004 4.004 0 0 0-4 4v8a4.004 4.004 0 0 0 4 4h3v3a4.004 4.004 0 0 0 4 4h8a4.004 4.004 0 0 0 4-4v-8a4.004 4.004 0 0 0-4-4Zm-12 7h-3a1.997 1.997 0 0 1-1.882-1.349l2.607-2.607L7.5 12.819Zm.23-4.28L6.41 8.9a1.679 1.679 0 0 0-2.37 0L2.5 10.44V4.5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2v3h-3a3.992 3.992 0 0 0-3.77 2.72ZM21.5 19.5a2.003 2.003 0 0 1-2 2h-8a2.003 2.003 0 0 1-2-2v-8a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1>Drag photos and videos here</h1>
                        </div>
                        <div>
                            <button className='bg-blue-500/90 py-1 px-3 text-sm rounded-lg cursor-pointer active:scale-[.99]'>Select from your computer</button>
                        </div>
                    </div>
                </div>

            </div>
            <div
                onClick={() => closeNaviHandler()}
                className='h-full w-full '></div>

        </div>
    )
}

export default Post