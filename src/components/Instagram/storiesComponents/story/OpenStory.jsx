import React from 'react'
import CloseSvg from '../../svgComponents/CloseSvg';

const OpenStory = ({ storyData, closeStory, storyIdx }) => {




    let idx = 0;
    return (
        <div className=' absolute top-0 left-0 z-[3] h-screen w-full bg-zinc-950'>

            <div className=' py-3 px-1 h-6 flex items-center bg-zinc-800/0 rounded-xl cursor-pointer '>
                <div
                    onClick={closeStory}
                    className='flex items-center pt-5 pl-5 cursor-pointer text-white rotate-45'>
                    <svg aria-label="New post" fill="currentColor" height="40" role="img" viewBox="0 0 24 24" width="40">
                        <title>close story</title>
                        <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                    </svg>
                </div>
            </div>
            <div className='h-full w-full  flex items-center justify-center'>
                <div className='  w-250 h-80  mb-10 '>
                    <div className='storyScroller flex gap-10 overflow-x-scroll h-full w-full '>
                        {storyIdx.map((story, idx) => (
                            <div>
                                <div className='relative flex-shrink-0 h-full w-42  rounded-xl overflow-hidden '>
                                    <div className='h-full storyContentContainer w-full absolute top-0 left-0 '></div>
                                    <img className=' h-full w-full object-cover ' src={story.image} />
                                    <div className='absolute top-0 left-0  h-full w-full flex items-center justify-center'>
                                        <div className='storiesBorder h-21.5 min-w-21.5 flex items-center justify-center rounded-full'> {/* Add a unique key */}
                                            <div
                                                className={`h-20 w-20`}
                                            >
                                                <div className=' profile flex items-center justify-center p-1 h-full w-full bg-zinc-950 cursor-pointer  rounded-full  overflow-hidden'>
                                                    <div className=' h-full w-full rounded-full'>
                                                        <div className='imgContainer w-full h-full rounded-full overflow-hidden '>
                                                            <img className='h-full w-full object-cover rounded-full' src={story.image} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='absolute bottom-0 left-0 w-full bg-zinc-800/50 text-white p-2 text-center'>
                                    <h1>Aqeel</h1>
                                </div>
                            </div>))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OpenStory