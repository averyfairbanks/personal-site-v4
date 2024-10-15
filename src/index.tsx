import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import { Box } from "@mui/system";
import "./index.css";

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);
