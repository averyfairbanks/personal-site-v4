import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Work from "./routes/Work";
import Home from "./routes/Home";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";

const App = () => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="centered">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
