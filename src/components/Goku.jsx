import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const Goku = () => {
    const { ContextSave } = useGSAP()
    const [circle, setCircle] = useState(0);
    const [yVlaue, setYVlaue] = useState(0)
    const [opac, setOpac] = useState(false)

    const imageRef = useRef();

    const randomx = gsap.utils.random(-300, 300, 10);
    const moveup = gsap.utils.random(-200, 200, 10);


    useGSAP(() => {
        gsap.to('.box', {
            x: circle,
            duration: .1,
            y: yVlaue,
        })
    }, [randomx, moveup])

    useGSAP(() => {
        gsap.to('.box', {
            x: circle,
            duration: 0.1,
            y: yVlaue,
            ease: "power2.out"
        });
    }, { scope: "main", dependencies: [circle, yVlaue] });

    useGSAP(() => {
        gsap.to(imageRef.current, {
            opacity: opac ? 0 : 1,
            duration: opac ? 0.01 : 0,
            ease: opac ? "power1.out" : "none"
        });
    }, { scope: "main", dependencies: [opac] });


    const handleClick = () => {
        setCircle(randomx);
        setYVlaue(moveup);

        setOpac(true);

        setTimeout(() => {
            setOpac(false);
        }, 1000);
    };



    return (
        <>
            {/* <main className='main h-screen w-[100%] p-3 flex items-center  justify-center flex-col'>

                <button className='bg-amber-300 px-4 py-1 rounded-lg mb-2 active:scale-[.98]'>animate</button>
                <div className='box h-[200px] w-[200px] bg-amber-500/0 '>
                    <img onMouseEnter={handleClick} ref={imageRef} src='public\goku.png'></img>
                </div>
            </main> */}
        </>
    )
}

export default Goku