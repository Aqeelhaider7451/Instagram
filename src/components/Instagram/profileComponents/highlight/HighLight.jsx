import React, { useState } from 'react'
import AddNewHighlight from '../../svgComponents/AddNewHighlight'
import HighLight1 from './HighLight1';

const HighLight = () => {

    const highLightData = [
        {
            name: 'new year party',
            image: '/src/assets/dp/dp1.jpg',
        },
        {
            name: 'go to lahore',
            image: '/src/assets/dp/dp2.jpg',
        },
        {
            name: 'get together',
            image: '/src/assets/dp/dp4.jpg',
        },
        {
            name: 'sleepy',
            image: '/src/assets/dp/dp3.jpg',
        },
    ];

    const [openHighLight, setOpenHighLight] = useState(null)
    const highlightHandler = (index) => {
        setOpenHighLight(index)
    }
    const closeHighlightHandler = () => {
        setOpenHighLight(null)
    }

    return (
        <div className='h-50 w-full mt-10 flex '>
            <div className='h-full w-fit bg-red-100/0 pl-7 py-5'>
                <div className='h-full w-30 flex flex-col items-center gap-1'>
                    <div className='h-27 w-27 bg-zinc-800/80 rounded-full flex items-center justify-center'>
                        <div className='h-25 w-25 bg-zinc-950 rounded-full flex items-center justify-center'>
                            <div className='flex items-center justify-center h-23 w-23 bg-zinc-900 rounded-full text-zinc-800 cursor-pointer'>
                                <AddNewHighlight />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <p className='leading-none capitalize text-white'>new</p>
                    </div>
                </div>
            </div>

            <div className='highLightContainer h-full w-full flex gap-1 pt-5 overflow-y-scroll'>

                {highLightData.map((elem, idx) => (<div
                    onClick={() => highlightHandler(idx)}
                    className='h-full w-30 flex flex-col items-center gap-1 cursor-pointer'>
                    <div className='h-27 w-27 bg-zinc-800/80 rounded-full flex items-center justify-center'>
                        <div className='h-25 w-25 bg-zinc-950 rounded-full flex items-center justify-center'>
                            <div className='h-23 w-23 bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden'>
                                <div className='imgContainer h-full w-full rounded-full '>
                                    <img className='h-full w-full object-cover' src={elem.image} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <p className='leading-none capitalize text-white'>{elem.name}</p>
                    </div>
                </div>
                ))}
                {openHighLight !== null ?
                    (<HighLight1
                        setOpenHighLight={setOpenHighLight}
                        highLightContentData={highLightData[openHighLight]}
                        closeHighlightHandler={closeHighlightHandler} />)
                    : ('')}

            </div>
        </div>
    )
}

export default HighLight