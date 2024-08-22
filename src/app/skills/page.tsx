"use client"
import React, { useRef, useEffect } from 'react'
import { FaAws, FaLinux, FaPython, FaHtml5, FaCss3, FaReact, FaDocker, FaBootstrap, FaNpm, FaGitAlt, FaGithubSquare, FaGitlab, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiExpress, SiKubernetes, SiGooglecloud, SiGraphql, SiJest, SiCanva, SiDjango, SiPostgresql } from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { DiNodejs, DiNginx, DiMongodb, DiMysql, DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaGitkraken } from 'react-icons/fa6';
import { IconContext } from 'react-icons'
import gsap from 'gsap';

function Page() {
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


    return (
        <IconContext.Provider value={{ className: 'max-sm:w-[30px] max-sm:h-[30px] max-[380px]:w-[25px]' }} >
            <div className='flex flex-col gap-5 max-sm:gap-3 max-w-[100vw] max-[h-[730px]]: m-16 max-sm:m-10 overflow-x-hidden'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold max-lg:text-xl  max-sm:text-lg '>Languages</h2>
                    <div className='flex max-w-[70vw] flex-wrap gap-8 max-sm:gap-4 m-5'>
                        <span ref={addIconRef} title='javascript'><SiJavascript size={50} /></span>
                        <span ref={addIconRef} title='typescript'> <SiTypescript size={50} /></span>

                        <span ref={addIconRef} title='cpp'><TbBrandCpp size={50} /></span>
                        <span ref={addIconRef} title='python'> <FaPython size={50} /></span>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold max-lg:text-xl max-sm:text-base'>Technologies</h2>
                    <div className='flex max-w-[70vw] flex-wrap gap-8 max-sm:gap-4 m-5'>
                        <span ref={addIconRef} title='reactjs'><FaReact size={50} /></span>
                        <span ref={addIconRef} title='nextjs'><TbBrandNextjs size={50} /></span>
                        <span ref={addIconRef} className='-mt-4 max-sm:-mt-1' title='nodejs'> <DiNodejs size={70} /></span>
                        <span ref={addIconRef} title='expressjs'> <SiExpress size={50} /></span>
                        <span ref={addIconRef} title='docker'> <FaDocker size={50} /></span>
                        <span ref={addIconRef} title='kubernates'> <SiKubernetes size={50} /></span>
                        <span ref={addIconRef} className='-mt-8 max-sm:-mt-1' title='nginx'> <DiNginx size={120} /></span>
                        <span ref={addIconRef} title='aws'> <FaAws size={50} /></span>
                        <span ref={addIconRef} title='gcloud'> <SiGooglecloud size={50} /></span>
                        <span ref={addIconRef} title='tailwind'> <RiTailwindCssFill size={50} /></span>
                        <span ref={addIconRef} title='bootstrap'> <FaBootstrap size={50} /></span>
                        <span ref={addIconRef} title='npm'> <FaNpm size={50} /></span>
                        <span ref={addIconRef} title='graphql'> <SiGraphql size={50} /></span>
                        <span ref={addIconRef} title='mongodb'> <DiMongodb size={50} /></span>
                        <span ref={addIconRef} title='mysql'> <DiMysql size={50} /></span>
                        <span ref={addIconRef} title='jest'> <SiJest size={50} /></span>
                        <span ref={addIconRef} title='django'> <SiDjango size={50} /></span>
                        <span ref={addIconRef} title='postgres'> <SiPostgresql size={50} /></span>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold max-lg:text-xl max-sm:text-base'>Tools</h2>
                    <div className='flex max-w-[70vw] flex-wrap gap-8 max-sm:gap-4 m-5'>
                        <span ref={addIconRef} title='vscode'> <TbBrandVscode size={50} /></span>
                        <span ref={addIconRef} title='linux'> <FaLinux size={50} /></span>
                        <span ref={addIconRef} title='git'> <FaGitAlt size={50} /></span>
                        <span ref={addIconRef} title='github'> <FaGithubSquare size={50} /></span>
                        <span ref={addIconRef} title='gitkraken'> <FaGitkraken size={50} /></span>
                        <span ref={addIconRef} title='gitlab'> <FaGitlab size={50} /></span>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold max-lg:text-xl max-sm:text-base'>Design</h2>
                    <div className='flex max-w-[70vw] flex-wrap gap-8 max-sm:gap-4 m-5'>
                        <span ref={addIconRef} title='photoshop'> <DiPhotoshop size={50} /></span>
                        <span ref={addIconRef} title='illustrator'> <DiIllustrator size={50} /></span>
                        <span ref={addIconRef} title='canva'> <SiCanva size={50} /></span>
                        <span ref={addIconRef} title='figma'> <FaFigma size={50} /></span>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Page
