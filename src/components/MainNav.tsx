import { AppBar, MenuItem, Slide, useScrollTrigger } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { content } from "../resources/content";
import "../styles/MainNav.css";
import "../styles/App.css";

interface NavProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<NavProps> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const MainNav: React.FC = () => {
  const isCurrentURL = (url: string) => {
    return window.location.pathname === url;
  };

  const { pathname } = useLocation();
  if (pathname === "/") {
    return null;
  }

  const { about, work, contact } = content;

  return (
    <HideOnScroll>
      <AppBar className="flex-config fix-styles">
        {!isCurrentURL("/about") && (
          <MenuItem>
            <Link className="clean-link menu-link" to="/about">
              {about.title.toLowerCase()}
            </Link>
          </MenuItem>
        )}
        {!isCurrentURL("/work") && (
          <MenuItem>
            <Link className="clean-link menu-link" to="/work">
              {work.title.toLowerCase()}
            </Link>
          </MenuItem>
        )}
        {!isCurrentURL("/contact") && (
          <MenuItem>
            <Link className="clean-link menu-link" to="/contact">
              {contact.title.toLowerCase()}
            </Link>
          </MenuItem>
        )}
      </AppBar>
    </HideOnScroll>
  );
};

export default MainNav;
