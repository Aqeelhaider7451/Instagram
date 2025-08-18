import React from 'react'

const WhatYouSee = () => {

    const whatYouSee = [
        {
            pageName: 'Sensitive Content',
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
            pageName: 'Potentially offensive content',
            svg: <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title></title><path d="M6.71 9.555h10.581a2.044 2.044 0 0 1 2.044 2.044v8.357a2.044 2.044 0 0 1-2.043 2.043H6.71a2.044 2.044 0 0 1-2.044-2.044V11.6A2.044 2.044 0 0 1 6.71 9.555Zm1.07 0V6.222a4.222 4.222 0 0 1 8.444 0v3.333" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            ,
            forward: <svg aria-label="Parent or guardian" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title></title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
            </svg>,
            knowMore: 'Everyone',

        },
    ];
    return (
        <div className='absolute top-0 left-0 text-white text-2xl h-screen w-full bg-zinc-950'>
            <div className='h-full w-full p-8'>
                <div className='px-3'>
                    <div>
                        <h1>Who can interact with you</h1>
                    </div>
                    <div className='py-10'>
                        <div className='h-full w-full border-1 border-zinc-800 rounded-3xl px-5 py-3'>
                            {whatYouSee.map((page, idx) => (
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
                </div>
            </div>
        </div>
    )
}

export default WhatYouSee