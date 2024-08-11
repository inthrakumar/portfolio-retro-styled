import * as icons from 'react-icons/fa';
import * as siicons from 'react-icons/si';
import * as diicons from 'react-icons/di';
import type { IconType } from 'react-icons';
type arraytypes = {
  name: string;
  logo: string;
  about: string;
  my_role: string[];
  images: string[];
  TechIcons: IconType[];
  Links: {
    Github: string;
    Live: string;
  };
  learnt: string[];
};
const arr: arraytypes[] = [
  {
    name: 'CelestialTrust',
    logo: 'celestial_logo',
    about:
      'Celestial Trust is a web application that provides people the ability to connect with trusts and donate with trust management without worrying about legitimacy',
    my_role: [
      'Worked on the  AdminPanel for the trust verification process by the admins .Admins can verify the trusts through the initial verification documents provided by the trusts',
      'Worked on implementing the Account Page for the Users',
      'Implemented the Trust Contribution page for the Verified  Trusts to check about the received donations and volunteer work',
    ],
    learnt: [
      'I have learnt about interacting with the backend and about database connectivity',
      'Learnt and implemented the CRUD operations',
      'Learnt about leveraging the cloud services for file management(Aws)',
    ],
    images: ['userVolunteerPage_qfoqel', 'adminTrustVerifyPage_dijty3'],
    TechIcons: [
      icons.FaHtml5,
      icons.FaNodeJs,
      siicons.SiExpress,
      icons.FaAws,
      diicons.DiMongodb,
      icons.FaCss3,
      diicons.DiJavascript,
    ],
    Links: {
      Github: 'https://github.com/inthrakumar/Celestial_Trust',
      Live: '#',
    },
  },
  {
    name: 'News Buzz',
    logo: 'https://asset.cloudinary.com/dwux16io3/eaf64def8c049759b75f545a38f392ca',
    about:
      'News buzz is a web application which provides daily news articles and categorial articles from world news api',
    my_role: [
      'Implemented the news card and carousel which outline view about the news from world news api',
      'Displaying the Weather  details from openweather api',
    ],
    learnt: [
      'I have learnt about api fetching in react , used react query package for caching data to avoid unnecessary fetch requests ',
      'Implemented Zustand and Immer for persistent storage',
      'Used ShadCnUi library for ui designing  of the website',
    ],
    images: [
      'https://drive.google.com/uc?export=view&id=1LhGW92SsUQ6nJI1ce9c5vRp3X6axvskw',
      'https://drive.google.com/uc?export=view&id=1LhGW92SsUQ6nJI1ce9c5vRp3X6axvskw',
    ],
    TechIcons: [icons.FaHtml5, icons.FaNodeJs],
    Links: {
      Github: 'https://github.com',
      Live: '#',
    },
  },
  {
    name: 'Retro Style Portfolio',
    logo: 'https://asset.cloudinary.com/dwux16io3/eaf64def8c049759b75f545a38f392ca',
    about:
      'Personal Portfolio created in a retro style using Nextjs and nescss',
    my_role: [
      'Nextjs templated portfolio project with styling from tailwindcss and nescss',
      'Using Leetcode api  to display dynamic Leetcode details',
    ],
    learnt: [
      'Learnt about page routing in Nextjs and about SEO optimisation ',
      'Used gsap and typer.js libraries to implement the animation effects',
      'Explored about using the retro css formats',
    ],
    images: [
      'https://asset.cloudinary.com/dwux16io3/e862126e331e30986e26badafd432902',
      'https://asset.cloudinary.com/dwux16io3/73889fa638af0011aaec53301c037581',
    ],
    TechIcons: [icons.FaHtml5, icons.FaNodeJs],
    Links: {
      Github: 'https://github.com',
      Live: '#',
    },
  },
];

export default arr;

export type { arraytypes };
