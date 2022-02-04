import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import { Box } from "@mui/system";
import "./index.css";


ReactDOM.render(
  <Box className="centered">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  </Box>,
  document.getElementById("root")
);
