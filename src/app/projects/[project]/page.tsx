"use client";

import React, { useEffect, useRef } from 'react';
import map from '../../../projects_assests/details';
import { CldImage } from 'next-cloudinary';
import localFont from 'next/font/local';
import gsap from 'gsap';
const titleFont = localFont({ src: '../../../font/mickeymouse.woff2' });
const sidetitle = localFont({ src: "../../../font/Stickers-Regular.woff2" });
import Link from 'next/link';
import Project_Carousel from "../../../components/Project_Carousel"
const Content_font = localFont({
    src: [
        {
            path: '../../../font/Korean_Calligraphy.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
});

function Page({ params }: { params: { project: string } }) {
    const iconRefs = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        iconRefs.current.forEach((icon, index) => {
            gsap.to(icon, {
                repeat: -1,
                yoyo: true,
                rotation: 30,
                ease: 'elastic',
                duration: 1,
                delay: index * 0.1,
            });
        });
    }, []);

    const addIconRef = (el: HTMLElement | null) => {
        if (el && !iconRefs.current.includes(el)) {
            iconRefs.current.push(el);
        }
    };
    const projectDetails = map.get(params.project);

    if (!projectDetails) {
        return <div className='m-10 mt-20 flex items-center justify-center'>Project not found</div>;
    }

    const { name, about, my_role, learnt, TechIcons, Links, images } = projectDetails;

    return (
        <div className='m-10 mt-20 flex flex-col gap-8 items-center justify-center'>
            <div className='w-full flex justify-between text-6xl'>
                <h1 className={`${titleFont.className} tracking-[0.3rem] hover:tracking-[0.7rem]`}>{name}</h1>
                <div className='flex w-fit gap-4'>
                    <Link href={Links.Github} target='blank'>
                        <button type="button" className="nes-btn is-warning text-xs  max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[5px]">
                            Github
                        </button>
                    </Link>
                    <Link href={Links.Live} target='blank'>
                        <button type="button" className="nes-btn is-warning text-xs  max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[5px]">
                            Live
                        </button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <h2 className={`${sidetitle.className} hover:tracking-wide text-5xl font-bold  max-sm:text-lg`}>
                    TechStack
                </h2>
                <div className='flex max-w-[70vw] flex-wrap gap-8 max-sm:gap-4 m-5'>
                    {TechIcons.map((IconComponent, index) => (
                        <span ref={addIconRef} key={index} title={IconComponent.name}>
                            <IconComponent size={50} />
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div className={`${sidetitle.className} text-5xl hover:tracking-wide`}>
                    About
                </div>
                <div className={`${Content_font.className} text-4xl`}>
                    {about}
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div className={`${sidetitle.className} text-5xl hover:tracking-wide`}>
                    My Contribution
                </div>
                <div className={`${Content_font.className} text-4xl flex flex-col gap-3`}>
                    {my_role.map((content, index) => <div key={index}>{content}</div>)}
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div className={`${sidetitle.className} text-5xl hover:tracking-wide`}>
                    What I Learnt
                </div>
                <div className={`${Content_font.className} text-4xl flex flex-col gap-3`}>
                    {learnt.map((content, index) => <div key={index}>{content}</div>)}
                </div>
            </div>
            <div className='w-[80vw] flex items-center justify-center'>
                <Project_Carousel images={images} />

            </div>
        </div>
    );
}

export default Page;
