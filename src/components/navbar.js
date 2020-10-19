import React from "react";
import "../styles/navbar.scss"
import SA from "../media/sa logo.png";

class NavBar extends React.Component {

  componentDidMount() {
    document.getElementById("nav-menu").style.opacity = 0;
  }

  openMenu() {
      if (parseInt(document.getElementById("nav-menu").style.opacity) > 0) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                document.getElementById("nav-menu").style.display = 'none';
            }
            document.getElementById("nav-menu").style.opacity = op;
            document.getElementById("nav-menu").style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 5);
    }
    else {
      var op = 0.1;  // initial opacity
    document.getElementById("nav-menu").style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        document.getElementById("nav-menu").style.opacity = op;
        document.getElementById("nav-menu").style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
    }
  }

  render() {
    return (
        <nav className="nav-bar" >
          <a id="ortegatime" href="https://www.sausd.us/sahs"><img id="sa" src={SA}/>Santa Ana</a>
          <a id="home-button" href="/">Home</a>
          <div id="menu-button" onClick={this.openMenu} unselectable="on">☰</div>
          <div id="nav-menu">
            <div id="nav-menu-home"><a href="/" className="nav-item">•Home</a></div>
            <div id="nav-menu-zoom"><a href="/zoom-links" className="nav-item">•Zoom Links</a></div>
            {/* <div id="nav-menu-about"><a href="/about" className="nav-item">About</a></div> */}
          </div>
        </nav>
    );
  }
}

export default NavBar;
