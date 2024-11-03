import { AppBar, MenuItem, Slide, useScrollTrigger } from "@mui/material";
import React from "react";
import { Link, useNavigation } from "react-router-dom";
import { content } from "../resources/content";

const isCurrentURL = (url: string): boolean => {
  return window.location.pathname === url;
};

interface NavProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<NavProps> = ({ children }) => {
  const trigger = useScrollTrigger();

  return isCurrentURL("") ? (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  ) : (
    <>{children}</>
  );
};

const MainNav: React.FC = () => {
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
