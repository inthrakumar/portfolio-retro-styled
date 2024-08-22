import React, { useEffect, useRef } from 'react'
import localFont from 'next/font/local';
import Typed from 'typed.js';
import { SiLeetcode } from "react-icons/si";
import { IconContext } from 'react-icons'
import gsap from 'gsap'

const Loadingtext = localFont({ src: '../font/Holligate Signature Demo.woff2' });

function Loading() {
    const el = useRef(null);
    const leetCodeRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["...."],
            typeSpeed: 75,
            loop: true,
            startDelay: 200,
        });

        if (leetCodeRef.current) {
            gsap.to(leetCodeRef.current, {
                repeat: -1,
                yoyo: true,
                rotation: 30,
                ease: 'elastic',
                duration: 1,
            });
        }

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <IconContext.Provider value={{ className: 'max-sm:w-[30px] max-sm:h-[30px] max-[380px]:w-[25px]' }}>
            <div className='flex flex-grow gap-3'>
                <span ref={leetCodeRef}><SiLeetcode size={50} /></span>
                <div className={`${Loadingtext.className} text-5xl max-lg:text-3xl max-sm:text-2xl flex gap-1`}>
                    <span>Loading</span>
                    <span className='text-nowrap text-center' ref={el}></span>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Loading;
