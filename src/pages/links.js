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
        <a href="https://sausd.zoom.us/j/97853388166?pwd=VUZKbk1ObVRYTnUwQkQ2Wnl4Nm5hQT09" className="white-box-link" id="link-box1">
          <div className="zoom-text">PERIOD 1</div>
          <div className="hidden-link" id="hidden-link1">Meeting ID: 978 5338 8166</div>
          <div className="hidden-link" id="hidden-link1">Passcode: 007157</div>
        </a>
        <a href="https://sausd.zoom.us/j/96787989997?pwd=SHJNcGxVN2tkeGZOU1IyM2RhMlRiQT09" className="white-box-link" id="link-box2">
          <div className="zoom-text">PERIOD 2</div>
          <div className="hidden-link" id="hidden-link2">Meeting ID: 967 8798 9997</div>
          <div className="hidden-link" id="hidden-link2">Passcode: 278827</div>
        </a>
        <a href="https://sausd.zoom.us/j/94755027810?pwd=bmNIYkFTTW9zU1U1Q3pWTXVXUU1odz09" className="white-box-link" id="link-box3">
          <div className="zoom-text">PERIOD 3</div>
          <div className="hidden-link" id="hidden-link3">Meeting ID: 947 5502 7810</div>
          <div className="hidden-link" id="hidden-link3">Passcode: 625973</div>
        </a>
        {/* <div href="/" className="white-box-link" id="link-box4">
          <div className="zoom-text">PERIOD 4</div>
          <div className="hidden-link" id="hidden-link4">No Class</div>
        </div> */}
        <a href="https://sausd.zoom.us/j/93965863436?pwd=TWR0d05JK3FqL0M5TVpqWkJ1a01DZz09" className="white-box-link" id="link-box5">
          <div className="zoom-text">PERIOD 5</div>
          <div className="hidden-link" id="hidden-link5">Meeting ID: 939 6586 3436</div>
          <div className="hidden-link" id="hidden-link5">Passcode: 115606</div>
        </a>
        <a href="https://sausd.zoom.us/j/92562562005?pwd=MERLdFJ1Z0l1REZkbVdGN2loV2NZUT09" className="white-box-link" id="link-box6">
          <div className="zoom-text">PERIOD 6</div>
          <div className="hidden-link" id="hidden-link6">Meeting ID: 925 6256 2005</div>
          <div className="hidden-link" id="hidden-link6">Passcode: 769845</div>
        </a>
      </div>
    );
  };
}

export default Links;
