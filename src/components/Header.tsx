"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
function Header() {
    const mario = useRef(null);
    const dino = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        gsap.to(mario.current, {
            repeat: -1,
            yoyo: true,
            rotation: 30,
            ease: 'elastic'
        })
        gsap.to(dino.current, {
            repeat: -1,
            yoyo: true,
            rotation: 30,
            ease: 'elastic',
            delay: 1
        })
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="w-full mt-5 mr-7">
            <section className={`icon-list flex w-fit gap-4 max-lg:gap-1 fixed top-4 left-2 max-sm:hidden ${isScrolled ? 'hidden' : ''}`}>
                <i className="nes-mario" ref={mario}></i>
                <i className="nes-charmander" ref={dino}></i>
            </section>
            <div className="w-full flex gap-3 max-sm:gap-1 items-center justify-end">
                <Link href="/">
                    <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
                        Home
                    </button>
                </Link>
                <Link href="/leetcode">
                    <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
                        LeetCode
                    </button>
                </Link>
                <Link href="/projects">
                    <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
                        Projects
                    </button>
                </Link>
                <Link href="/skills">
                    <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
                        Skills
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Header;
