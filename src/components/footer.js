// React
import React from "react";
import "../styles/footer.scss";

class Footer extends React.Component {

render() {
  return (
    <div>
      <footer className="page-footer">
          <div className="row mx-5">
             <a className="footer-element" href="/">2020 ORTEGA TIME</a>
             <a className="footer-element" href="/">Made by Brandon Winn</a>
             <a className="footer-element" href="/">About</a>
             <a className="footer-element" href="/">FAQ</a>
             <a className="footer-element" href="/">Privacy Policy</a>
             <a className="footer-element" href="/">Social Media</a>
             <a className="footer-element" href="/">Terms of Service</a>
          </div>
        </footer> 
    </div>
  );
}
}
export default Footer;