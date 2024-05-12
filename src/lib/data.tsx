import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoBrototype from "/public/images/logos/LogoBrototype.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectGhub from "/public/images/ProjectGhub.png";
import ProjectCircle from "/public/images/ProjectCircle.png";
import ProjectNotetaker from "/public/images/ProjectNotetaker.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
     EducationDetails,
     ProjectDetails,
     TechDetails,
     TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
     GITHUB: "https://github.com/shahsagarm",
     GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
     TWITTER: "https://twitter.com/shahsagarm",
     FIGMA: "https://www.figma.com/@shahsagarm",
     LINKEDIN: "",
     FIGMA_FILE:
          "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
     {
          label: "About",
          href: "#about",
     },
     {
          label: "Projects",
          href: "#projects",
     },
     {
          label: "Contact",
          href: "#contact",
     },
];

export const SOCIAL_LINKS = [
     {
          icon: Github,
          url: "https://github.com/Sreesanjay",
     },
     {
          icon: Twitter,
          url: "https://twitter.com/sreesanjay_s",
     },
     {
          icon: Linkedin,
          url: "https://www.linkedin.com/in/sreesanjay-s/",
     },
     {
          icon: Instagram,
          url: "https://www.instagram.com/sreesanjay_/",
     },
];

export const TECHNOLOGIES: TechDetails[] = [
     {
          label: "Javascript",
          logo: LogoJavascript,
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
     },
     {
          label: "Typescript",
          logo: LogoTypescript,
          url: "https://www.typescriptlang.org/",
     },
     {
          label: "React",
          logo: LogoReact,
          url: "https://react.dev/",
     },
     {
          label: "Next.js",
          logo: LogoNextjs,
          url: "https://nextjs.org/",
     },
     {
          label: "Node.js",
          logo: LogoNodejs,
          url: "https://nodejs.org/en",
     },
     {
          label: "Express.js",
          logo: LogoExpress,
          darkModeLogo: LogoExpressLight,
          url: "https://expressjs.com/",
     },
     // {
     //   label: 'Nest.js',
     //   logo: LogoNest,
     //   url: 'https://nestjs.com/',
     // },
     {
          label: "Socket.io",
          logo: LogoSocket,
          darkModeLogo: LogoSocketLight,
          url: "https://socket.io/",
     },
     // {
     //   label: 'PostgreSQL',
     //   logo: LogoPostgreSQL,
     //   url: 'https://www.postgresql.org/',
     // },
     {
          label: "MongoDB",
          logo: LogoMongoDB,
          url: "https://www.mongodb.com/",
     },
     // {
     //   label: 'Sass/Scss',
     //   logo: LogoSass,
     //   url: 'https://sass-lang.com/',
     // },
     {
          label: "Tailwindcss",
          logo: LogoTailwindcss,
          url: "https://tailwindcss.com/",
     },
     {
          label: "Figma",
          logo: LogoFigma,
          url: "https://www.figma.com/",
     },
     // {
     //   label: 'Cypress',
     //   logo: LogoCypress,
     //   darkModeLogo: LogoCypressLight,
     //   url: 'https://www.cypress.io/',
     // },
     // {
     //   label: 'Storybook',
     //   logo: LogoStorybook,
     //   url: 'https://storybook.js.org/',
     // },
     {
          label: "Git",
          logo: LogoGit,
          url: "https://git-scm.com/",
     },
];

export const EXPERIENCES: EducationDetails[] = [
     {
          institution: "Brototype",
          course: "MERN Stack Development",
          startDate: new Date(2023, 6),
          currentlyWorkHere: true,
          summary: [
               "29 Weeks Program, Weekly reviewed by Industrial experts",
               "2 main projects and several mini projects built from scratch",
               "Completed a project in a short time span of 1 and a half month",
               "Intensive training program",
               "12 - 16 hrs daily workouts/ day night workouts",
               "Deadline management/ Time management",
               "Self learning, can get updated with the latest trends and technologies",
               "28 Weeks Program, Weekly reviewed by Industrial experts",
               "2 main projects and several mini projects built from scratch",
               "Completed a project in a short time span of 1 and a half month",
               "Intensive training program",
               "12 - 16 hrs daily workouts/ day night workouts",
               "Deadline management/ Time management",
               "Self learning, can get updated with the latest trends and technologies",
          ],
     },
     {
          institution: "Calicut University",
          course: "Bachelor of Computer Application",
          startDate: new Date(2020, 6),
          endDate: new Date(2023, 3),
          summary: [
               "WMO Arts and Science College",
               "6.7 CGPA",
               "3 year undergraduate program.",
               "IEDC Member",
               "Build 1 project from scratch",
          ],
     },
];

export const PROJECTS: ProjectDetails[] = [
     {
          name: "Circle",
          description:
               "A social media platform where users can connect with others, post their thoughts and imagination as       posts, stories and connect with individuals who share similar interests in the community section",
          url: "https://www.my-circle.online",
          previewImage: ProjectCircle,
          technologies: [
               "React",
               "Typescript",
               "Tailwind CSS",
               "Firebase",
               "Express.js",
               "MongoDB",
               "Socket.io",
               "Razorpay",
               "JWT",
               "OAuth",
               "Material UI",
               "Redux Toolkit",
               "Nodemailer",
          ],
     },
     {
          name: "GHub",
          description:
               "An E-Commerce platform that provides a seamless shopping experience for electronic gadget enthusiasts.",
          url: "https://ghub-c6o3.onrender.com/",
          previewImage: ProjectGhub,
          technologies: [
               "Node.js",
               "Express.js",
               "MongoDB",
               "HBS",
               "Bootstrap",
               "Razorpay",
               "JWT",
               "Nodemailer",
          ],
     },
     {
          name: "Note Taker",
          description:
               "A React note-taking app where users can create and manage notes, with options to customize font                sizes and formats.",
          url: "https://note-taker-1-llpq.onrender.com/",
          previewImage: ProjectNotetaker,
          technologies: [
               "React",
               "Typescript",
               "Tailwindcss",
               "Redux Toolkit",
               "MongoDB",
               "JWT",
          ],
     },
];
