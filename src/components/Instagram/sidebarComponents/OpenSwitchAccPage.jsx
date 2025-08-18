import React from 'react'
import SwitchAcc from '../switchAccountComponents/SwitchAcc'

const OpenSwitchAccPage = ({ closeSwitchAccount, setSwitchAccPage }) => {
    return (
        <div className='absolute flex items-center   w-full z-[2] h-screen bg-zinc-900/60 top-0 left-0   overflow-hidden'>
            <div
                className='h-screen w-full'></div>
            <SwitchAcc setSwitchAccPage={setSwitchAccPage} closeSwitchAccount={closeSwitchAccount}/>
            <div
                className='h-screen w-full'></div>
        </div>
    )
}

export default OpenSwitchAccPage