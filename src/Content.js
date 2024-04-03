// import images
import Hero_person from "./assets/images/Hero/hero_image.png";

import sql from "./assets/images/Skills/mysql.png";
import sketch from "./assets/images/Skills/sketch.png";
import java from "./assets/images/Skills/java.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";


import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";

import avatar1 from "./assets/images/Education//images.png";
import avatar2 from "./assets/images/Education/college.svg";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
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
      link: "#education",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Om",
    LastName: "Gore",
    btnText: "Resume",
    social_media: [
      {
        name:"linkedin",
        link:"https://www.linkedin.com/in/om-gore-5783a522a/",
      },
      {
        name:"github",
        link:"https://github.com/om9011/",
        
      },{
        name:"gmail",
        link:"mailto:omgore4307@gmail.com",
      }
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
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "MySQL",
        para: "Lorem ipsum text  dummy",
        logo: sql,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Java",
        para: "Lorem ipsum text  dummy",
        logo: java,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
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
        link:"https://github.com/om9011/SDSS_Portal",
        deploy:""
      },
      {
        title: "Jan गणना : Census System",
        image: project2,
        link:"https://github.com/siddhesh-desai/Janaganana",
        deploy:""
      },
      {
        title: "Dubwiz : Video Dubbing Platform",
        image: project3,
        link:"https://github.com/Om-Gujarathi/SIH_2023",
        deploy:""
      },
      {
        title: "Result 2024",
        image: project4,
        link:"https://github.com/Om-Gujarathi/SIH_2023",
        deploy:""
      },
      
    ],
  },
  education: {
    title: "Education",
    
    education_content: [
      {
        college:
          "Vishwakarma Institute of Technology, Pune",
        img: avatar1,
        name: "Artificial Intelligence and Data Science",
      },
      {
        college:
          "Laxmanrao Apte Prashala & Jr. College, Pune",
        img: avatar2,
        name: "12th Science",
      },
      {
        college:
          "Vishwakarma Vidyalaya Marathi Secondary, Pune",
        img: avatar2,
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
