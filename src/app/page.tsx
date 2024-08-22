"use client"
import 'nes.css/css/nes.min.css'

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Atomic_Age } from 'next/font/google';
import localFont from 'next/font/local';
import Typed from 'typed.js';
const font = Atomic_Age({ weight: '400', subsets: ["latin"] });
const Nametext = localFont({ src: '../font/fifties_movies/Fifties Movies.woff2' });
import gsap from 'gsap';
export default function Home() {



  const el = useRef(null);
  const nameRef = useRef(null);
  const mario = useRef(null);
  const dino = useRef(null);
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
  useEffect(() => {
    gsap.to(nameRef.current, {
      ease: 'power1.inOut',
      opacity: 1,
      y: 1,
    });

  }, []);

  return (
    <main
      className="min-h-[80vh] flex flex-col items-center justify-center"

    >
      <section className="mt-5 w-full flex-grow flex items-center justify-center max-sm:mt-3">
        <div className="bg-white nes-container max-w-[80vw] is-centered is-rounded flex flex-col gap-7">
          <p className={` name text-6xl max-sm:text-3xl ${Nametext.className} opacity-0`} ref={nameRef}>INTHRAKUMAR</p>
          <p className={`w-56 text-center max-sm:text-xl ${font.className} text-[2rem] flex w-full items-center justify-center`}>
            <span className='text-nowrap text-center' ref={el}></span>
          </p>
          <p className={` text-xl max-sm:text-base ${font.className} flex flex-col gap-2`}>pursing B.tech Cse in <span className='text-nowrap max-sm:text-[12px]'>Indian Institute of information technology</span><span className='max-sm:text-[12px]'>Sricity</span></p>
        </div>
      </section>
      <div className="social-buttons fixed bottom-3 right-3 "><p className='max-sm:text-[10px]'>Connect on SNS</p> <div className="share"><Link href="" target="_blank"><i className="nes-icon twitter  max-sm:is-small"></i></Link> <Link href="" target="_blank"><i className="nes-icon facebook"></i></Link> <Link href="" target="_blank"><i className="nes-icon linkedin"></i></Link> <Link href="" target="_blank"><i className="nes-icon github"></i></Link></div></div>
    </main>
  );
}
