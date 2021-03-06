import React from "react";
import { Router } from "@reach/router"; // Router

// Pages
import Home from "./pages/home";
import Links from "./pages/links";
import About from "./pages/about";
import PageNotFound from "./pages/pagenotfound";

// Components
import NavBar from "./components/navbar";
import Footer from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <div className="App">
          <div>
            <NavBar />
            <Router>
              <Home path="/" />
              <Links path="/zoom-links"/>
              <About path="/about"/>
              <PageNotFound path="/page-not-found" default />
            </Router>
          </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
