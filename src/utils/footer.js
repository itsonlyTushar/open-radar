import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";

// footer pages navigation links
export const footerLinks = [
  { listName: "Home", link: "/home" },
  { listName: "About Us", link: "/about" },
  { listName: "Privacy Policy", link: "/policy" },
  { listName: "Contact", link: "/contact" },
];

// social media links
export const socialLinks = [
  {
    name: "Twitter",
    link: "https://x.com/ts28_7",
    icon: FaSquareXTwitter,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/tushar-soni-b0426022b/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tushar_28.7/",
    icon: AiFillInstagram,
  },
  {
    name: "Github",
    link: "https://github.com/itsonlyTushar",
    icon: FaGithubSquare,
  },
  {
    name: "Portfolio",
    link: "https://tusharsoni.site",
    icon: RiComputerFill,
  },
];
