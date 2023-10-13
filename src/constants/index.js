import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    swift,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    docker,
    python,
    java,
    tensorflow,
    meta,
    starbucks,
    tesla,
    shopify,
    cdnis,
    bostonUniversity,
    adtende,
    mahjongTileRecognizer,
    jobit,
    tripguide,
    threejs,
    mahjongTileScorer,
    appStore,
    rikkei_logo,
    typescript,
    imcomerceNhana,
    twitter,
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Nest JS",
      icon: swift,
    },
    {
      name: "MYSQL",
      icon: tensorflow,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
  ];
  
  const experiences = [
    {
      title: "University",
      company_name: "University of Economic Hochiminh City",
      icon: cdnis,
      iconBg: "#383E56",
      date: "August 2008 - May 2022",
      points: [
        "Auditing and Accountant",
      ],
    },
    {
      title: "Company",
      company_name: "RikkeiSoft",
      icon: rikkei_logo,
      iconBg: "#E6DEDD",
      date: "March 2023 - October 2023",
      points: [
        "Web Fullstack Developer",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nhana Fashion Shop",
      description:
        "Ecomerce Web App use HTML5, CSS3, JavaScript, Bootstrap",
      tags: [
        {
          name: "html, css, js",
          color: "orange-text-gradient",
        },
        {
          name: "ecommerce",
          color: "green-text-gradient",
        },
      ],
      image: imcomerceNhana,
      source_code_link: "https://project-rikkei-fashionshop-co8gx0c9a-ttnhandn-gmailcom.vercel.app",
      project_link_image: appStore,
    },
    {
      name: "Twitter with ExpressJS, ReactJS, Typescript, MongoDB",
      description:
        "Build a twitter app to post a tweet. This can realtime notification, post images...",
      tags: [
        {
          name: "ReactJS",
          color: "orange-text-gradient",
        },
        {
          name: "ExpressJS, MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: twitter,
      source_code_link: "https://github.com/https://github.com/Nhanthaithi/client-twitter-express-ts/tree/develop/MahjongTileScorer",
      project_link_image: github,
    },
    {
      name: "Twitter with NestJS, ReactJS, Typescript, MongoDB",
      description:
        "Build a twitter app to post a tweet. This can realtime notification, post images, login with Google, Paypal..",
      tags: [
        {
          name: "ReactJS",
          color: "orange-text-gradient",
        },
        {
          name: "NestJS, MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: twitter,
      source_code_link: "https://github.com/https://github.com/Thaithinhan/TWITTER-NESTJS/tree/dev",
      project_link_image: github,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };