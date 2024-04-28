// import images
import Hero_person from "./assets/Hero/hero_image.png";

import sql from "./assets/Skills/mysql.png";
import java from "./assets/Skills/java.png";
import reactjs from "./assets/Skills/react.png";
import nodejs from "./assets/Skills/node.png";
import python from "./assets/Skills/python.png";
import mongoDB from "./assets/Skills/MongoDB.png";
import figma from "./assets/Skills/figma.png";

import project1 from "./assets/Projects/project1.png";
import project2 from "./assets/Projects/project2.png";
import project3 from "./assets/Projects/project3.png";
import project4 from "./assets/Projects/project4.png";

import avatar1 from "./assets/Education/images.png";
import avatar2 from "./assets/Education/college.svg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#education",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Om ",
    LastName: "Gore",
    btnText: "Resume",
    social_media: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/om-gore-5783a522a/",
      },
      {
        name: "github",
        link: "https://github.com/om9011/",
      },
      {
        name: "gmail",
        link: "mailto:omgore4307@gmail.com",
      },
    ],
    image: Hero_person,
    hero_content: [
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    skills_content: [
      {
        name: "React Js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "MySQL",
        para: "Lorem ipsum text  dummy",
        logo: sql,
      },
      {
        name: "Node JS",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Java",
        para: "Lorem ipsum text  dummy",
        logo: java,
      },
      {
        name: "MongoDB",
        para: "Lorem ipsum text  dummy",
        logo: mongoDB,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  Projects: {
    title: "Projects",

    project_content: [
      {
        title: "SDSS : Student Portal",
        image: project1,
        link: "https://github.com/om9011/SDSS_Portal",
        deploy: "",
      },
      {
        title: "Jan गणना : Census System",
        image: project2,
        link: "https://github.com/siddhesh-desai/Janaganana",
        deploy: "",
      },
      {
        title: "Dubwiz : Video Dubbing Platform",
        image: project3,
        link: "https://github.com/Om-Gujarathi/SIH_2023",
        deploy: "",
      },
      {
        title: "Result 2024",
        image: project4,
        link: "https://github.com/Om-Gujarathi/SIH_2023",
        deploy: "",
      },
    ],
  },
  education: {
    title: "Education",

    education_content: [
      {
        college: "Vishwakarma Institute of Technology, Pune",
        img: avatar1,
        name: "Artificial Intelligence and Data Science",
        percentage: "8.9 CGPA",
      },
      {
        college: "Laxmanrao Apte Prashala & Jr. College, Pune",
        img: avatar2,
        percentage: "90 %",
        name: "12th Science",
      },
      {
        college: "Vishwakarma Vidyalaya Marathi Secondary, Pune",
        img: avatar2,
        percentage: "88.80%",
        name: "10th",
      },
    ],
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "omgore4307@gmail.com",
        icon: GrMail,
        link: "mailto:omgore4307@gmail.com",
      },
      {
        text: "+91 8669480758",
        icon: MdCall,
        link: "https://wa.me/8669480758",
      },
      {
        text: "Github : OM GORE",
        icon: FaGithub,
        link: "https://www.github.com/om9011/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
