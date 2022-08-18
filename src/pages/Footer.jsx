import React from "react";
import icon from "../assets/icons/instagram (1).png";
import icon2 from "../assets/icons/snapchat.png";
import icon3 from "../assets/icons/twitter (1).png";
import icon4 from "../assets/icons/youtube.png";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3 style={{ textAlign: "center" }}>Company Name</h3>
              <p style={{ textAlign: "center" }}>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                quis tristique lectus. Aliquam in arcu eget velit pulvinar
                dictum vel in justo.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <img style={{ width: "70%", fill: "white" }} src={icon} />
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <img style={{ width: "70%" }} src={icon2} />
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <img style={{ width: "70%" }} src={icon3} />
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <img style={{ width: "70%" }} src={icon4} />
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Company Name © 2018</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
