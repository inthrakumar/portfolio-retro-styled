import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Timeline() {
    return (
        <div className='flex flex-col gap-2'>
            <VerticalTimeline className='visible'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education "
                    contentStyle={{ background: 'rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="March-April 2024"
                    dateClassName='!text-#000'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Celestial Trust</h3>
                    <h4 className="vertical-timeline-element-subtitle">FullStackApp</h4>
                    <p>
                        Celestial Trust is a web platform that provides a seamless experience for people to connect with trust and donate.
                        Trusts also promote their work and receive donations from all over the web.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}

                    contentStyle={{ background: 'rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                >
                    <h3 className="vertical-timeline-element-title">NewsBuzz</h3>
                    <h4 className="vertical-timeline-element-subtitle">Reactjs</h4>
                    <p>
                        NewsBuzz is a web platform that provides users with the latest news, breaking news, and opinion articles.
                        WorldNewsApi has been used.
                    </p>
                </VerticalTimelineElement><VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}

                    contentStyle={{ background: 'rgb(33, 150, 243)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                >
                    <h3 className="vertical-timeline-element-title">RetroStylePortfolio</h3>
                    <h4 className="vertical-timeline-element-subtitle">Nextjs</h4>
                    <p>
                        Portfolio website which was created followinf the retro style provided by nescss . Nextjs and Tailwind has been used.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>


        </div>
    )
}

export default Timeline
