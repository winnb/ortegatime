import React from "react";

class NavBar extends React.Component {

  render() {
    return (
        <nav className="nav-bar row fixed-top" >
          <a className="pooch-brand" id="pooch"  href="/">ORTEGA TIME</a>
          <div className="pooch-navbar-item row" id="nav-pages">
                <a id="your-pets" href="/your-pets">Your Pets</a>
                <a id="dog-walking" href="/dog-walking">Dog Walking</a>
                <a id="dog-boarding" href="/dog-boarding">Dog Boarding</a>
                <a id="dog-services" href="/dog-services">Dog Services</a>
                <a id="dog-meetup" href="/dog-meetup">Dog Meetups</a>
                <a id="dog-records" href="/dog-records">Dog Records</a> 
          </div>
        </nav>     
    );
  }
}

export default NavBar;
