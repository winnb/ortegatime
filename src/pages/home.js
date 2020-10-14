import React from "react";
import "../styles/home.scss";
import Purple from "../media/purple.jpg";
import Saints from "../media/saintsbg.jpg";
import Timer from "../components/timer";
import Clipboard from "../media/clipboard.jpg";
import ClipboardPu from "../media/clipboard-purple.jpg";
import ClipboardPi from "../media/clipboard-pink.jpg";
import Play from "../media/play.png";
import FAQ from "../media/faq.png";
import Orange from "../media/orange.jpg";
import MT from "../media/santa-ana mon-thur.png";
import TF from "../media/santa-ana tues-fri.png";
import Blue from "../media/blue.jpg";
import W from "../media/santa-ana wed.png";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <img className="home-background" src={Purple}/>
        <div id="white-bg"/>
        <img className="home-background" src={Orange}/>
        <div id="white-bg"/>
        <img className="home-background" src={Blue}/>
        <img className="home-background" src={Saints}/>
        <Timer/>
        <a href="#box7" className="white-box" id="box1">
          <img id="clipboard" src={Clipboard}/>
          <div className="box-text">Mon/Thurs Schedule</div>
        </a>
        <a href="#box8" className="white-box" id="box2">
          <img id="clipboard" src={ClipboardPu}/>
          <div className="box-text">Tues/Fri Schedule</div>
        </a>
        <a href="#box9" className="white-box" id="box3">
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
        <a className="white-box-xl" id="box6">
          <iframe id="quiz" src="https://quizlet.com/481289434/match/embed?i=1b80tu&x=1jj1" style={{border:0}}></iframe>
          <div className="box-text">Test your knowledge</div>
        </a>
        <div id="MT-title">Monday/Thursday Schedule</div>
        <a className="white-box-tall" id="box7">
          <img id="MT" src={MT}/>
        </a>
        <div id="TF-title">Tuesday/Friday Schedule</div>
        <a className="white-box-tall" id="box8">
          <img id="TF" src={TF}/>
        </a>
        <div id="W-title">Wednesday Schedule</div>
        <a className="white-box-tall" id="box9">
          <img id="W" src={W}/>
        </a>
        <div id="home-author">Brandon Winn 2020</div>
        </div>
    );
  };
}

export default Home;
