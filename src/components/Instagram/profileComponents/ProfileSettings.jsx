import React from 'react'

const ProfileSettingsQuery = [
    {
        pageName: 'Apps and Websites'
    },
    {
        pageName: 'QR Code'
    },
    {
        pageName: 'Notification'
    },
    {
        pageName: 'Settings and Privacy'
    },
    {
        pageName: 'Meta Verified'
    },
    {
        pageName: 'Supervision'
    },
    {
        pageName: 'Login Activity'
    },
    {
        pageName: 'Logout'
    },
    {
        pageName: 'Cancel'
    },
]

const ProfileSettings = ({ setProfileSettings }) => {
    return (
        <div className='h-screen w-full flex items-center justify-center z-[1] bg-zinc-950/60 absolute  top-0 left-0 text-white text-2xl'>
            <div
                onClick={() => setProfileSettings(prev => !prev)}
                className='h-full w-full'></div>
            <div className=' min-w-170 ml-10 z-[5] bg-zinc-800 rounded-4xl overflow-hidden'>
                {[
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                    ProfileSettingsQuery,
                ].map((elem, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center justify-center border-b-1 border-zinc-700 transition-all duration-300 ease-in hover:bg-zinc-300/10 cursor-pointer
                    ${idx === 8 && 'border-none'}
                    `}>
                        <div className='py-4 transition-all duration-300 ease-in hover:translate-y-[2px]'>
                            <h1 className='text-[16px]'>{elem[idx].pageName}</h1>
                        </div>
                    </div>
                ))}

            </div>
            <div
                onClick={() => setProfileSettings(prev => !prev)}
                className='h-full w-full'></div>
        </div>
    )
}

export default ProfileSettings