import { Link } from "react-router";
import Radar from "./Radar";
import { footerLinks, socialLinks } from "../utils/footer";
import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center py-16">
      <div className="flex flex-col items-center my-5 px-4 py-4">
        <Radar />
        <h1 className="mx-2 text-xs mt-5">Ⓒ Openradar</h1>
      </div>

      <div className="text-lg">
        <ul>
          {footerLinks.map((link) => (
            <Link key={link.listName} to={link.link}>
              <li>{link.listName}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="text-lg">
        <ul>
          {socialLinks.map((link) => (
            <Link
              key={link.link}
              className="flex gap-3 items-center"
              target="_blank"
              to={link.link}
            >
              <span className="text-lg">{React.createElement(link.icon)}</span>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
