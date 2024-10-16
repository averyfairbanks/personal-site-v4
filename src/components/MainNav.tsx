import { AppBar, MenuItem, Slide, useScrollTrigger } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { content } from "../resources/content";

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const MainNav = () => {
  const isCurrentURL = (url: string) => {
    return window.location.pathname === url;
  };

  return (
    <>
      <HideOnScroll>
        <AppBar className="flex-config fix-styles">
          {!isCurrentURL("/about") ? (
            <MenuItem>
              <Link className="clean-link menu-link" to="/about">
                {content.titles.about.toLowerCase()}
              </Link>
            </MenuItem>
          ) : (
            ""
          )}
          {!isCurrentURL("/work") ? (
            <MenuItem>
              <Link className="clean-link menu-link" to="/work">
                {content.titles.work.toLowerCase()}
              </Link>
            </MenuItem>
          ) : (
            ""
          )}
          {!isCurrentURL("/contact") ? (
            <MenuItem>
              <Link className="clean-link menu-link" to="/contact">
                {content.titles.contact.toLowerCase()}
              </Link>
            </MenuItem>
          ) : (
            ""
          )}
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default MainNav;
