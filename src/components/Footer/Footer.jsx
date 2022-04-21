import React from "react";

import "./Footer.css";
import logo from "../../assest/flipkart.png";
import payment from "../../assest/payment.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container px-md-5">
        {/* <!-- footer-top --> */}
        <div className="row pt-5 pb-4 footer-top">
          <div className="col-md-6">
            <img src={logo} style={{ width: "150px" }} />
          </div>
          <div className="col-md-6 pt-4 pt-md-0">
            <div className="footer-social text-md-end">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- footer body --> */}
        <div className="footer-body row">
          <div className="col-lg-4 col-sm-6">
            <h5> Mail Us:</h5>
            <p>
              Flipkart Internet Private Limited, <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </p>
            <a href="#" className="text-white">
              Read more &#8594;
            </a>
          </div>
          <div className="col-lg-2 col-sm-3">
            <h5>ABOUT</h5>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Flipkart Stories</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-3">
            <h5>POLICY</h5>
            <ul>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Newsletter</h5>
            <p className="pe-sm-5">
              Videoprah is an award-winning, full-service production company
              specializing.
            </p>
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Footer bottom --> */}
        <div className="footer-bottom py-4">
          <p>
            Copyright &copy; 2022 All rights reserved | This template is made
            with &nbsp;
            <a
              href="https://www.linkedin.com/in/shubham-gupta-755690229/"
              target="_blank"
            >
              <i className="fa-solid fa-mug-saucer"></i>
            </a>{" "}
            &nbsp; by &nbsp;
            <a href="https://www.facebook.com/suvm.02" target="_blank">
              Suvm
            </a>
          </p>
          <img src={payment} alt="Payment Mode" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
