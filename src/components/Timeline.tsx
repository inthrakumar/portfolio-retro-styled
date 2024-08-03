import React from 'react';
import { DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbBrandNextjs } from 'react-icons/tb';
import Link from 'next/link';
function Timeline() {
    return (
        <div className='flex flex-col w-full  gap-2 items-center justify-center'>
            <VerticalTimeline className='visible'>
                <VerticalTimelineElement

                    className="vertical-timeline-element--education "
                    contentStyle={{ background: '#FFD700', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFD700' }}
                    date="March-April 2024"
                    dateClassName='!text-#000 max-sm:!text-[8px]'
                    iconStyle={{ background: '#FFF', color: '#000' }}
                    icon={<DiNodejs size={30} />}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title whitespace-nowrap text-2xl max-sm:text-xs">Celestial Trust</h3>
                    <h4 className="vertical-timeline-element-subtitle whitespace-nowrap text-xl max-sm:text-[10px]">FullStackApp</h4>
                    <p className='text-lg max-sm:!text-[6px]'>
                        Celestial Trust is a web platform that provides a seamless experience for people to connect with trust and donate.
                        Trusts also promote their work and receive donations from all over the web.
                    </p>
                    <p><span><Link className='!text-[#000] max-sm:!text-[6px] max-sm:!mt-2' href={'/projects/celestial-trust'}>More</Link></span></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work  w-fit"
                    date="June 2024"
                    dateClassName='!text-#000 max-sm:!text-[8px]'
                    contentStyle={{ background: '#FF4500', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
                    iconStyle={{ background: '#FFF', color: '#000' }}
                    icon={<FaReact size={30} />} visible={true}
                >
                    <h3 className="vertical-timeline-element-title whitespace-nowrap text-2xl max-sm:text-xs">NewsBuzz</h3>
                    <h4 className="vertical-timeline-element-subtitle whitespace-nowrap text-xl max-sm:text-[10px]">Reactjs</h4>
                    <p className='text-lg max-sm:!text-[8px]'>
                        NewsBuzz is a web platform that provides users with the latest news, breaking news, and opinion articles.
                        WorldNewsApi has been used.
                    </p>
                    <p><span><Link className='!text-[#000] max-sm:!text-[6px]' href={'/projects/news-buzz'}>More</Link></span></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work  w-fit"
                    date="July 2024"
                    dateClassName='!text-#000 max-sm:!text-[8px]'
                    contentStyle={{ background: '#8A2BE2', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #8A2BE2' }}
                    iconStyle={{ background: '#FFF', color: '#000' }}
                    icon={< TbBrandNextjs size={30} />} visible={true}
                >
                    <h3 className="vertical-timeline-element-title whitespace-nowrap text-2xl max-sm:text-xs">RetroStylePortfolio</h3>
                    <h4 className="vertical-timeline-element-subtitle whitespace-nowrap text-xl max-sm:text-[10px]">Nextjs</h4>
                    <p className='text-lg max-sm:!text-[8px]'>
                        Portfolio website which was created by using react framework nextjs. Nescss and Tailwind have been used for styling and providing the retro effect.
                    </p>
                    <p><span><Link className='!text-[#000] max-sm:!text-[6px]' href={'/projects/portfolio'}>More</Link></span></p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
