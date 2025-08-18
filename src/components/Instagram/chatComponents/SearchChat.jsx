import React from 'react'

import { CiSearch } from "react-icons/ci";


const SearchChat = () => {
    return (
        <div className=' search px-3 bg-zinc-800/0 py-1'>
            <div className='flex gap-1 p-2  text-[12px] bg-zinc-900/70 rounded-sm text-zinc-400/80 '>
                <button className='text-white/90 font-medium cursor-pointer'>
                    <CiSearch
                        className='text-xl font-medium'
                    />
                </button>
                <input className=' outline-none w-full placeholder:text-md' placeholder='lets find out your friend' />
            </div>
        </div>
    )
}

export default SearchChat