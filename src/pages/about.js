import React from "react";
import "../styles/about.scss";
import Waves from "../media/waves.jpg";
import Saints from "../media/saintsbg.jpg";

class About extends React.Component {
  render() {
    return (
      <div id="about-page">
          <img className="home-background" src={Waves}/>
          <div id="white-bg"/>
          <img className="home-background" src={Saints}/>
          <div id="about-author">Brandon Winn 2020</div>
      </div>
    );
  };
}

export default About;
