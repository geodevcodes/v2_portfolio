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

