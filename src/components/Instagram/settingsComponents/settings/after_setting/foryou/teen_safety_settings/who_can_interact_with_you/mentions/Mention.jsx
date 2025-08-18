import React from 'react'

const Mention = () => {
    return (
        <div className='absolute top-0 left-0 text-white text-2xl h-screen w-full bg-zinc-950'>
            <div className='h-full w-full text-white p-8  flex flex-col gap-15' >
                <div className='font-bold'>
                    <h1>
                        Mentions
                    </h1>
                </div>
                <div className=' flex flex-col gap-2'>
                    <div>
                        <div className='text-[18px] font-normal'>
                            <h3>Who can @mention you</h3>
                        </div>
                    </div>
                    <div className='text-sm font-normal flex flex-col items-start text-zinc-500 '>
                        <p className=' leading-none'>Choose who can @mention you to link your account in their stories.notes ,comments,live videos</p>
                        <p className=''>and captions.When people try to to mention you. they w'll see if you dont allow</p>
                    </div>
                    <div className='mt-3 flex flex-col gap-1 w-full bg-amber-300/0 border-1 border-zinc-700 rounded-2xl py-4 px-5'>
                        {[
                            'Allow mentions for everyone',
                            'Allow mentions for everyone',
                            'Allow mentions for everyone',
                        ].map((elem, idx) => (
                            <div className='flex items-center justify-between  py-2'>
                                <h5 className={`text-[17px]  ${idx == 0 && 'text-white '} text-zinc-500`}>{elem}</h5>
                                <div className='h-5 w-5 flex  rounded-full border-2 border-white p-0.5'>
                                    <div className='h-full w-full bg-white rounded-full cursor-pointer'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Mention