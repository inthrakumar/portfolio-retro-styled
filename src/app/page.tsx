"use client"
import 'nes.css/css/nes.min.css'

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Atomic_Age } from 'next/font/google';
import localFont from 'next/font/local';
import Typed from 'typed.js';
import bg from '../../public/retro-bg.png';

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
    <main
      className="min-h-screen flex flex-col bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <section className="w-full mt-5 mr-7">
        <section className="icon-list flex w-fit gap-4 fixed top-4 left-2 max-sm:hidden ">
          <i className="nes-mario "></i>
          <i className="nes-charmander "></i>

        </section>
        <div className="w-full flex gap-3 max-sm:gap-1 items-center justify-end">
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
      <section className="mt-5 w-full flex-grow flex items-center justify-center max-sm:mt-3">
        <div className="bg-white nes-container max-w-[80vw] is-centered is-rounded flex flex-col gap-7">
          <p className={`text-6xl max-sm:text-3xl ${Nametext.className}`}>INTHRAKUMAR</p>
          <p className={`w-56 text-center max-sm:text-xl ${font.className} text-[2rem]`}>
            <span className='text-nowrap text-center' ref={el}></span>
          </p>
          <p className={` text-xl max-sm:text-base ${font.className} flex flex-col gap-2`}>pursing B.tech Cse in <span className='text-nowrap max-sm:text-[12px]'>Indian Institute of information technology</span><span className='max-sm:text-[12px]'>Sricity</span></p>
        </div>
      </section>
      <div className="social-buttons fixed bottom-3 right-3 "><p className='max-sm:text-[10px]'>Connect on SNS</p> <div className="share"><Link href="" target="_blank"><i className="nes-icon twitter  max-sm:is-small"></i></Link> <Link href="" target="_blank"><i className="nes-icon facebook"></i></Link> <Link href="" target="_blank"><i className="nes-icon linkedin"></i></Link> <Link href="" target="_blank"><i className="nes-icon github"></i></Link></div></div>
    </main>
  );
}
