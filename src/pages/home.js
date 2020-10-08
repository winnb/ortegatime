import React from "react";
import "../styles/home.scss";
import Yosemite from "../media/yosemite.jpg";
import Purple from "../media/purple.jpg";
import Saints from "../media/saintsbg.jpg";
import Schedule from "../media/santa-ana.png";
import Timer from "../components/timer";
import SA from "../media/sa logo.png";
import Clipboard from "../media/clipboard.jpg";
import ClipboardPu from "../media/clipboard-purple.jpg";
import ClipboardPi from "../media/clipboard-pink.jpg";
import Play from "../media/play.png";
import FAQ from "../media/faq.png";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <img className="home-background" src={Purple}/>
        <div id="white-bg"/>
        <img className="home-background" src={Saints}/>
        <img className="home-background" src={Saints}/>
        <img id="schedule" src={Schedule}/>
        <Timer/>
        <input/>
        <a id="ortegatime" href="https://www.sausd.us/sahs"><img id="sa" src={SA}/>Santa Ana</a>
        <a id="home-button" href="/">Home</a>
        <div id="menu-button">☰</div>
        <a href="#schedule" className="white-box" id="box1">
          <img id="clipboard" src={Clipboard}/>
          <div className="box-text">Mon/Thurs Schedule</div>
        </a>
        <a href="#schedule" className="white-box" id="box2">
          <img id="clipboard" src={ClipboardPu}/>
          <div className="box-text">Tues/Fri Schedule</div>
        </a>
        <a href="#schedule" className="white-box" id="box3">
          <img id="clipboard" src={ClipboardPi}/>
          <div className="box-text">Wed Schedule</div>
        </a>
        <a href="https://www.youtube.com/watch?v=kQoZch4pCtQ&feature=emb_logo" className="white-box-lg" id="box4">
          <img id="play" src={Play}/>
          <div className="box-text">Graduation 2020</div>
        </a>
        <a href="https://docs.google.com/document/d/e/2PACX-1vQYA4nziBQjgpq59JBdza65hOnJrGqeEPETU9MtqaCaXCJ0AV2OPTJJ64RuGdiROvbRJ4Z42PLMSGF6/pub" className="white-box-lg" id="box5">
          <img id="play" src={FAQ}/>
          <div className="box-text">Frequently Asked Questions</div>
        </a>
      </div>
    );
  };
}

export default Home;
