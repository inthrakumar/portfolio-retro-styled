import * as icons from 'react-icons/fa';
import type { IconType } from 'react-icons';
type arraytypes = {
  name: string;
  logo: string;
  about: string;
  my_role: string[];
  image1: string;
  image2: string;
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
    logo: 'https://asset.cloudinary.com/dwux16io3/eaf64def8c049759b75f545a38f392ca',
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
    image1: '#',
    image2: '#',
    TechIcons: [icons.FaHtml5, icons.FaNodeJs],
    Links: {
      Github: 'https://github.com',
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
      'Implemented zustand for persistent storage',
      'Used ShadCn library for ui components',
    ],
    image1: '#',
    image2: '#',
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
      'Personal Portfolio created in a retro style using nescss and nextjs',
    my_role: [
      'Nextjs templated portfolio project with styling from tailwindcss and nescss',
      'Using leetcode api to display dynamic leetcode details',
    ],
    learnt: [
      'Learnt about page routing in Nextjs and about SEO optimisation ',
      'Used gsap and typer.js libraries to implement the animation effects',
    ],
    image1: '#',
    image2: '#',
    TechIcons: [icons.FaHtml5, icons.FaNodeJs],
    Links: {
      Github: 'https://github.com',
      Live: '#',
    },
  },
];

export default arr;

export type { arraytypes };
