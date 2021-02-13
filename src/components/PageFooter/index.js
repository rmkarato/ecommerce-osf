import React from "react";

import FbIcon from "../../assets/images/footer-fb-icon.png";
import GoogleIcon from "../../assets/images/footer-google-icon.png";
import TwitterIcon from "../../assets/images/footer-twitter-icon.png";
import PinteresIcon from "../../assets/images/footer-pinterest-icon.png";

import {
  FooterWrapper
} from "./styled";

const PageFooter = () => {
  return (
      <FooterWrapper>
        <div>
          <ul>
            <li>© Copyright 2019.</li>
            <li>All Rights Reserved</li>
            <li><b>CONTACT</b></li>
            <li>Headquarters.</li>
            <li>5600, Blvd. des Galeries, Bur 530</li>
            <li>Québec, Québec G2K 2H</li>¨
            <li>contact@osf-global.com</li>
            <li>+1 (888) 548-4344</li>
          </ul>
        </div>

        <div>
          <ul>
            <li><b>CATEGORIEST</b></li>
            <li>Alcohol</li>
            <li>Art</li>
            <li>Books</li>
            <li>Drink</li>
            <li>Electronics</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Home</li>
            <li>Jewelry</li>
            <li>Kids & Baby</li>
            <li>Men's Fashion</li>
            <li>Mobile</li>
            <li>Motorcycles</li>
            <li>Movies</li>
            <li>Music</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Sport</li>
            <li>Toys</li>
            <li>Travel</li>
            <li>Women's Fashion</li>
          </ul>
        </div>

        <div>
          <ul>
            <li><b>ABOUT</b></li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <img src={FbIcon} alt="Facebook" />
          <img src={GoogleIcon} alt="Google" />
          <img src={TwitterIcon} alt="Twitter" />
          <img src={PinteresIcon} alt="Pinterest" />
        </div>
      </FooterWrapper>
  );
};

export default PageFooter;