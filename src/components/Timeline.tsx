import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <div className='flex flex-col w-full  gap-2 items-center jusitfy-center'>
            <VerticalTimeline className='visible'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education "
                    contentStyle={{ background: '#FFD700', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFD700' }}
                    date="March-April 2024"
                    dateClassName='!text-#000 max-sm:!text-[8px]'
                    iconStyle={{ background: '#FFD700', color: '#000' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title whitespace-nowrap text-2xl max-sm:text-xs">Celestial Trust</h3>
                    <h4 className="vertical-timeline-element-subtitle whitespace-nowrap text-xl max-sm:text-[10px]">FullStackApp</h4>
                    <p className='text-lg max-sm:!text-[6px]'>
                        Celestial Trust is a web platform that provides a seamless experience for people to connect with trust and donate.
                        Trusts also promote their work and receive donations from all over the web.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    date="June 2024"
                    dateClassName='!text-#000 max-sm:!text-[8px]'
                    contentStyle={{ background: '#FF4500', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FF4500' }}
                    iconStyle={{ background: '#FF4500', color: '#000' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title whitespace-nowrap text-2xl max-sm:text-xs">NewsBuzz</h3>
                    <h4 className="vertical-timeline-element-subtitle whitespace-nowrap text-xl max-sm:text-[10px]">Reactjs</h4>
                    <p className='text-lg max-sm:!text-[8px]'>
                        NewsBuzz is a web platform that provides users with the latest news, breaking news, and opinion articles.
                        WorldNewsApi has been used.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    date="July 2024"
                    dateClassName='!text-#000 max-sm:!text-[8px]'
                    contentStyle={{ background: '#8A2BE2', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #8A2BE2' }}
                    iconStyle={{ background: '#8A2BE2', color: '#000' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title whitespace-nowrap text-2xl max-sm:text-xs">RetroStylePortfolio</h3>
                    <h4 className="vertical-timeline-element-subtitle whitespace-nowrap text-xl max-sm:text-[10px]">Nextjs</h4>
                    <p className='text-lg max-sm:!text-[8px]'>
                        Portfolio website which was created by using react framework nextjs. Nescss and Tailwind have been used for styling and providing the retro effect.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
