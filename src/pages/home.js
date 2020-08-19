import React from "react";
import "../styles/home.scss";
import Yosemite from "../media/yosemite.jpg";
import Saints from "../media/saintsbg.jpg";
import Schedule from "../media/schedule.png";
import Timer from "../components/timer";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <img id="home-background" src={Yosemite}/>
        <img id="home-background" src={Saints}/>
        <img id="schedule" src={Schedule}/>
        <Timer/>
      </div>
    );
  };
}

export default Home;
