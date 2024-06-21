import { Home, User, Layers3, GlobeLock, Github, Linkedin, Mail, Settings, ReceiptIndianRupee } from "lucide-react";


// SideBar Route Links 
export const sidebarRouteLinks = [
    {
      name: "Home",
      href: "/",
      key: "home",
      icon: Home,
      current: false,
    },
    {
      name: "Projects",
      href: "/projects",
      key: "projects",
      icon: GlobeLock,
      current: false,
    },
    {
        name: "About",
        href: "/about",
        key: "about",
        icon: User,
        current: false,
      },
      {
        name: "Stack",
        href: "/stack",
        key: "stack",
        icon: Layers3,
        current: false,
      },
    {
      name: "Settings",
      href: "/profile",
      key: "my-profile",
      icon: Settings,
      current: false,
    },
  ];


  // SideBar Contact  Route Links 
export const sidebarContactLinks = [
    {
      name: "Email",
      href: "mailto:olatunde336@gmail.com",
      key: "email",
      icon: Mail,
      current: false,
    },
    // {
    //   name: "Location",
    //   href: "/contact",
    //   key: "contact",
    //   icon: GlobeLock,
    //   current: false,
    // },
    {
      name: "Resume",
      href: "https://docs.google.com/document/d/1Fjw3pDT47_9YiRT5JzQibfWbfDyMNRLTZttOeBeULpo/edit?usp=sharing",
      key: "contact",
      icon: ReceiptIndianRupee,
      current: false,
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/olatunderasheed",
        key: "linkedin",
        icon: Linkedin,
        current: false,
      },
      {
        name: "Github",
        href: "https://www.github.com/olatunde1998",
        key: "youtube",
        icon: Github,
        current: false,
      },
  ];


    // Project Cards Links
export const projectLinks = [
  { id:1,
    name: "lms",
    href: "https://online-learning-application.vercel.app/",
    imageUrl: "/lms-2.png"
  },
  {
      id: 2,
      name: "e-commerce",
      href: "https://geodevcodes-ecommerce.vercel.app/",
      imageUrl: "/project-6.png"
    },
    {
      id:3,
      name: "blog",
      href: "https://geodevcodes-blog.vercel.app/",
      imageUrl: "/project-2.png"
    },
    {
      id:4,
      name: "getLinked-tech",
      href: "https://getlinked-tech.vercel.app/",
      imageUrl: "/project-3.png"
    }, 
    {
      id:5,
      name: "careFinder-app",
      href: "https://carefinder-app.vercel.app/",
      imageUrl: "/project-4.png"
    },
    {
      id: 6,
      name: "lis-pendens",
      href: "https://lis-pendens.vercel.app/",
      imageUrl: "/project-5.png"
    },  
    {
      id: 7,
      name: "survey-engine",
      href: "https://devcentral.d1gey7pwcnhqp2.amplifyapp.com/",
      imageUrl: "/project-7.png"
    },
    {
      id: 8,
      name: "in-coming",
      href: "#",
      imageUrl: "/sass.webp"
    },
];

