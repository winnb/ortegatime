import React from "react";
import "../styles/links.scss";

import Coral from "../media/coral.jpg";
import Saints from "../media/saintsbg.jpg";

class Links extends React.Component {
  render() {
    return (
      <div id="links-page">
        <img className="links-background" src={Coral} alt="abstract coral background" />
        <div className="white-bg"/>
        <img className="home-background" src={Saints}/>
        <div id="links-author">Brandon Winn 2020</div>
        <div id="links-title">
            <div id="zoom">Zoom Links</div>
            <div id="ortega-class">Mrs. Ortega's Class</div>
            <div id="environmental">Environmental Science</div>
        </div>
        <a href="https://zoom.us/" className="white-box-lg" id="link-box1">
          <div className="zoom-text">PERIOD 1 LINK</div>
          <a href="https://zoom.us/" className="hidden-link" id="hidden-link1">https://zoom.us/</a>
        </a>
        <a href="https://zoom.us/" className="white-box-lg" id="link-box2">
          <div className="zoom-text">PERIOD 2 LINK</div>
          <a href="https://zoom.us/" className="hidden-link" id="hidden-link2">https://zoom.us/</a>
        </a>
        <a href="https://zoom.us/" className="white-box-lg" id="link-box3">
          <div className="zoom-text">PERIOD 3 LINK</div>
          <a href="https://zoom.us/" className="hidden-link" id="hidden-link3">https://zoom.us/</a>
        </a>
        <a href="https://zoom.us/" className="white-box-lg" id="link-box4">
          <div className="zoom-text">PERIOD 4 LINK</div>
          <a href="https://zoom.us/" className="hidden-link" id="hidden-link4">https://zoom.us/</a>
        </a>
        <a href="https://zoom.us/" className="white-box-lg" id="link-box5">
          <div className="zoom-text">PERIOD 5 LINK</div>
          <a href="https://zoom.us/" className="hidden-link" id="hidden-link5">https://zoom.us/</a>
        </a>
        <a href="https://zoom.us/" className="white-box-lg" id="link-box6">
          <div className="zoom-text">PERIOD 6 LINK</div>
          <a href="https://zoom.us/" className="hidden-link" id="hidden-link6">https://zoom.us/</a>
        </a>
      </div>
    );
  };
}

export default Links;
