import React from "react";
import "../styles/navbar.scss"

class NavBar extends React.Component {

  render() {
    return (
        <nav className="nav-bar" >
            <a className="navbar-title" href="/">Home</a>
            <a className="navbar-block" href="/">Period 1</a>
            <a className="navbar-block" href="/">Period 2</a>
            <a className="navbar-block" href="/">Period 3</a>
            <a className="navbar-block" href="/">Period 4</a>
            <a className="navbar-block" href="/">Period 5</a>
            <a className="navbar-block" href="/">Period 6</a>
        </nav>
    );
  }
}

export default NavBar;
