import { Home, User, Layers3, GlobeLock, Github, Linkedin, Mail, CircleUser } from "lucide-react";


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
      name: "My Profile",
      href: "/profile",
      key: "my-profile",
      icon: CircleUser,
      current: false,
    },
  ];


  // SideBar Contact  Route Links 
export const sidebarContactLinks = [
    {
      name: "Contact",
      href: "/contact",
      key: "contact",
      icon: Mail,
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

