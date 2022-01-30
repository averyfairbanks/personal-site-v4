import { AppBar, createTheme, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Link } from "react-router-dom";
import content from "../content/content";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c4c4c4",
    },
  },
});

const MainNav = () => {
  const isCurrentURL = (url: string) => {
    return window.location.pathname === url;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar className="flex-config fix-styles">
        {!isCurrentURL("/about") ? (
          <MenuItem>
            <Link className="clean-link menu-link" to="/about">
              {content.titles.about().toLowerCase()}
            </Link>
          </MenuItem>
        ) : (
          ""
        )}
        {!isCurrentURL("/work") ? (
          <MenuItem>
            <Link className="clean-link menu-link" to="/work">
              {content.titles.work().toLowerCase()}
            </Link>
          </MenuItem>
        ) : (
          ""
        )}
        {!isCurrentURL("/contact") ? (
          <MenuItem>
            <Link className="clean-link menu-link" to="/contact">
              {content.titles.contact().toLowerCase()}
            </Link>
          </MenuItem>
        ) : (
          ""
        )}
      </AppBar>
    </ThemeProvider>
  );
};

export default MainNav;
