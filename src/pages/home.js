import React from "react";
import "../styles/home.scss";
import Yosemite from "../media/yosemite.jpg";
import Saints from "../media/saintsbg.jpg";
import Schedule from "../media/santa-ana.png";
import Timer from "../components/timer";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <img className="home-background" src={Yosemite}/>
        <img className="home-background" src={Saints}/>
        <img className="home-background" src={Saints}/>
        <img id="schedule" src={Schedule}/>
        <Timer/>
      </div>
    );
  };
}

export default Home;
