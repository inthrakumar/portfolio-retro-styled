"use client"

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Atomic_Age } from 'next/font/google';
import localFont from 'next/font/local';
import Typed from 'typed.js';


const font = Atomic_Age({ weight: '400', subsets: ["latin"] });
const Nametext = localFont({ src: '../font/fifties_movies/Fifties Movies.woff2' });

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'Devops Enthusiast'],
      typeSpeed: 25,
      loop: true,
      startDelay: 200,
    });

    return () => {

      typed.destroy();
    };
  }, []);


  return (
    <main className="bg-no-repeat bg-cover min-h-screen flex flex-col">
      <section className="w-full mt-5 mr-7">
        <div className="w-full flex gap-3 items-center justify-end">
          <div>
            <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
              <Link href={'/leetcode'} className='text-white'>LeetCode</Link>
            </button>
          </div>
          <div>
            <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
              <Link href={'/projects'} className='text-white'>Projects</Link>
            </button>
          </div>
          <div>
            <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
              <Link href={'/skills'} className='text-white'>Skills</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="mt-5 w-full flex-grow flex items-center justify-center max-sm:mt-3">
        <div className="bg-white nes-container is-centered is-rounded flex flex-col gap-7">
          <p className={`text-6xl max-sm:text-3xl ${Nametext.className}`}>INTHRAKUMAR</p>
          <p className={`w-56 text-left max-sm:text-2xl ${font.className} text-[2rem]`}> <span className='text-nowrap' ref={el} ></span></p>
        </div>
      </section>
    </main>
  );
}
