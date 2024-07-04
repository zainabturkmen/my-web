import React from "react";
import {
  FaHome,
  FaServer,
  FaPen,
  FaFileContract,
  FaMobile,
} from "react-icons/fa";

const links = [
  {
    id: 1,
    text: "home",
    url: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "Services",
    url: "Services",
    icon: <FaServer />,
  },
  {
    id: 3,
    text: "about",
    url: "about",
    icon: <FaFileContract />,
  },
  {
    id: 4,
    text: "projects",
    url: "projects",
    icon: <FaPen />,
  },
  {
    id: 5,
    text: "contact",
    url: "contact",
    icon: <FaMobile />,
  },
];

export default links;

export const ServicesData = [
  {
    id: 1,
    title: "Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    title: " Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    title: "E-Commerce",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];
