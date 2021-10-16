import "./App.css";
import "./components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sections/Home.css";
import "./sections/About.css";
import "./sections/Work.css";
import "./components/SocialButtons.css";
import "./components/Accordion.css";
import "./sections/Contact.css";
import "./sections/Built.css";
import Navigation from "./components/Navbar.js";
import theme from "./themes/theme1";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import About from "./sections/About.js";
import Home from "./sections/Home.js";
import Work from "./sections/Work.js";
import Contact from "./sections/Contact.js";
import Built from "./sections/Built.js";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container id="home" className="appContainer" fluid>
      <Navigation />
      <Container>
        <ThemeProvider theme={theme}>
          <div className="home">
            <Home />
          </div>

          <div id="about" className="about">
            <About />
          </div>

          <div id="work" className="sectionSeperator">
            <Work />
          </div>
          <div id="contact" className="sectionSeperator">
            <Contact />
          </div>
          <div className="builtSeperator">
            <Built />
          </div>
        </ThemeProvider>
      </Container>
    </Container>
  );
}

export default App;
