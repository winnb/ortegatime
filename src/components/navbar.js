import React from "react";
import "../styles/navbar.scss"
import SA from "../media/sa logo.png";

class NavBar extends React.Component {

  componentDidMount() {
    document.getElementById("nav-menu").style.display = "none";
  }

  openMenu() {
    if (document.getElementById("nav-menu").style.display === "block")
      document.getElementById("nav-menu").style.display = "none";
    else
      document.getElementById("nav-menu").style.display = "block";
  }

  render() {
    return (
        <nav className="nav-bar" >
          <a id="ortegatime" href="https://www.sausd.us/sahs"><img id="sa" src={SA}/>Santa Ana</a>
          <a id="home-button" href="/">Home</a>
          <div id="menu-button" onClick={this.openMenu} unselectable="on">☰</div>
          <div id="nav-menu">
            <div id="nav-menu-home"><a href="/" className="nav-item">Home</a></div>
            <div id="nav-menu-zoom"><a href="/zoom-links" className="nav-item">Zoom Links</a></div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
