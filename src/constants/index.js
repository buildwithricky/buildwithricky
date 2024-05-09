import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    lvd
  } from "../assets";
  import img from "./lax.png";
  import img1 from "./vic.jpg";
  import img2 from "./nic.jpeg"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web App Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Hybrid Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "CSS 3",
      icon: css,
    },
  ];
  
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Sivvar Comm",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Crafting and sustaining web applications utilizing React.js alongside complementary technologies.",
        "Working closely with diverse teams including designers, product managers, and fellow developers to create outstanding products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Contributing to code reviews and furnishing valuable feedback to fellow developers for continual improvement.",
        "Additionally, instrumental in enhancing video and voice call functionalities through adept utilization of Sip.js."
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Verivo",
      icon: tesla,
      iconBg: "#fff",
      date: "November 2023 - Present",
      points: [
        "Utilize React.js alongside tools like Redux or MobX for state management, and leverage MongoDB for efficient data persistence. Experience with Express.js for server-side rendering or API development is a plus.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        " Ensure applications adapt seamlessly to different screen sizes and devices, creating a smooth user experience for everyone. Prioritize accessibility best practices to make applications usable for users with disabilities.",
        "Actively participate in code reviews, providing constructive feedback to improve code maintainability and catch potential issues early on. Be open to feedback and strive for continuous improvement. Additionally, explore cutting-edge technologies like three.js to create immersive 3D experiences within your web applications",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "CI Finesser",
      icon: shopify,
      iconBg: "#E88901",
      date: "Jan 2022 - Feb 2023",
      points: [
        "I Leverage React Native's framework to create intuitive and performant mobile applications for iOS and Android. This includes writing clean, reusable code and staying up-to-date with the latest React Native advancements and libraries.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Ensure your mobile apps provide a seamless and intuitive user experience across different device sizes and operating systems.",
        "Actively participate in code reviews, providing constructive feedback to improve code maintainability, catch potential issues early on, and optimize app performance for a smo",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Incognito Tech",
      icon: meta,
      iconBg: "#fff",
      date: "Jan 2023 - Present",
      points: [
        "I Utilized React.js and its ecosystem of libraries on the front-end to create user-friendly and interactive interfaces. On the back-end, leverage technologies like Express.js, Node.js, or Python frameworks (Django/Flask) to handle server-side logic and API development. Maintain and optimize databases like MongoDB or PostgreSQL to ensure efficient data storage and retrieval.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Ensure applications adapt seamlessly to different screen sizes and devices, creating a smooth user experience for everyone. Prioritize accessibility best practices to make applications usable for users with disabilities.",
        "I Actively participate in code reviews, providing constructive feedback on both front-end and back-end code to improve maintainability and catch potential issues early on. Be open to feedback and strive for continuous improvement. Explore new technologies and libraries to enhance the application's functionality and user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I'm thoroughly impressed by Patrick My Music site; it was executed exceptionally and delivered well ahead of schedule.",
      name: "LAX",
      designation: "Musical Artist",
      // company: "Acme Co",
      image: img,
    },
    {
      testimonial:
        "His dedication, coding expertise, and problem-solving skills have greatly contributed to our success. Patrick's commitment to quality and meeting deadlines makes him an invaluable asset.",
      name: "Uwadia Victor",
      designation: "COO",
      company: "Incognito Tech Solutions",
      image: img1,
    },
    {
      testimonial:
        "After Patrick optimized our app, our traffic increased by 50%. We can't thank him enough!",
      name: "Femi Akinbote ",
      designation: "Coperate Strategist",
      company: "CI finesser",
      image: img2,
    },
  ];
  
  const projects = [
    {
      name: "Incognito-Razer",
      description:
        "This web app, using React JS, Tailwind CSS, Syncfusion, and Redux, is a Dashboard for managing online operations. It provides dynamic Graphs, Pie charts, and Bar charts for real-time monitoring of orders, employees, and customers, improving business efficiency.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "syncFusion",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://incognito-razer.netlify.app/",
    },
    {
      name: "Sapphire",
      description:
        "Embodying the essence of the sapphire, a beacon of wisdom and clarity, our team is dedicated to providing strategic insights and a serene approach to help you overcome growth challenges.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://sapphires-radical-site-d80611.webflow.io/",
    },
    {
      name: "brianholdingltd",
      description:
        "Brian Gale Holdings, established on January 28, 2021, is a private limited company (registration number 13163975) operating under SIC code 64209. Specializing in managing subsidiary companies and their assets, the company prioritizes discretion and flexibility. ",
      tags: [
        { 
          name: "Native",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://brianholdingltd.com/",
    },
    {
      name: "LVD Store",
      description:
        "LVD Store is a React Native app that seamlessly integrates with RESTful APIs, offering a smooth shopping experience. Styled with Tailwind CSS, it combines functionality with sleek design for a modern e-commerce platform.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: lvd,
      source_code_link: "https://lvdstore.store/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };