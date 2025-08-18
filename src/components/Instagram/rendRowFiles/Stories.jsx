import React, { useState } from 'react'
import OpenStory from '../storiesComponents/story/OpenStory';

const Stories = () => {


    const storyHandler = () => { }

    const storyIdx = [
        {
            username: "Aqeel_Haider",
            profile: '/src/assets/p1.jpg',
            image: '/src/assets/p2.jpg',
        },
        {
            username: "haider",
            profile: '/src/assets/p3.jpg',
            image: '/src/assets/p4.jpg',

        },
        {
            username: "wasee",
            profile: '/src/assets/p5.jpg',
            image: '/src/assets/p6.jpg',

        },
        {
            username: "rehan",
            profile: '/src/assets/p7.jpg',
            image: '/src/assets/p8.jpg',

        },
        {
            username: "meer",
            profile: '/src/assets/p1.jpg',
            image: '/src/assets/p5.jpg',
        },
        {
            username: "Aqeel_Haider_Wasee",
            profile: '/src/assets/p3.jpg',
            image: '/src/assets/p6.jpg',

        },
        {
            username: "Aqeel_Haider",
            profile: '/src/assets/p7.jpg',
            image: '/src/assets/f5.png',
        },
        {
            username: "WaseeHaider",
            profile: '/src/assets/p2.jpg',
            image: '/src/assets/p8.jpg',
        },
        {
            username: "Rehan_hadi",
            profile: '/src/assets/p8.jpg',
            image: '/src/assets/p9.jpg',
        },
        {
            username: "meer_Rehan",
            profile: '/src/assets/q1.jpg',
            image: '/src/assets/q2.jpg',
        },
    ];

    const [openStory, setOpenStory] = useState(false);

    const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

    const handleStoryClick = (index) => {
        setSelectedStoryIndex(index);
    };

    const closeStory = () => {
        setSelectedStoryIndex(null);
    };

    return (
        <div className=' storiesContainer flex items-center gap-1  w-full  pb-0 py-0'>

            <div className='relative stories w-full flex gap-1.5 overflow-x-scroll overflow-y-hidden bg-red-400/0  overflow-hidden pb-6 pt-3 pl-1.5 mr-7'>
                {storyIdx.map((story, idx) => (<div className='storiesBorder h-21.5 min-w-21.5 flex items-center justify-center rounded-full' key={idx}> {/* Add a unique key */}
                    <div
                        onClick={() => handleStoryClick(idx)}
                        className={`story relative h-20 w-20`}
                    >
                        <div className=' profile flex items-center justify-center p-1 h-full w-full bg-zinc-950 cursor-pointer  rounded-full  overflow-hidden'>
                            <div className='h-full w-full rounded-full'>
                                <div className='imgContainer w-full h-full rounded-full overflow-hidden '>
                                    <img className='h-full w-full object-cover rounded-full' src={story.image} alt={story.username} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='max-w-full px-1 flex justify-start bg-zinc-950 text-[10px] text-zinc-200/90 py-[1px]
                                        rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2
                                        leading-none tracking-tighter overflow-hidden'
                            >
                                {story.username}
                            </p>
                        </div>
                    </div>
                </div>))}
            </div>



            {selectedStoryIndex !== null ? (<OpenStory
                storyData={storyIdx[selectedStoryIndex]}
                storyIdx={storyIdx}
                closeStory={closeStory} />) : ('')}
        </div>
    )
}

export default Stories