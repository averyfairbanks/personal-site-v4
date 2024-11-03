import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Work from "./routes/Work";
import Home from "./routes/Home";
import { Box, createTheme , ThemeProvider} from "@mui/material";
import MainNav from "./components/MainNav";

const App: React.FC = () => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="centered">
        <BrowserRouter>
          <Routes>
            <MainNav>
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </>
            </MainNav>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
