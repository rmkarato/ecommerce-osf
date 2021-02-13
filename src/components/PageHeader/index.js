import React from "react";

import LogoHeader from "../../assets/images/header-logo.png";
import SearchIcon from "../../assets/images/header-search-information.png";
import ProfileIcon from "../../assets/images/header-profile-user.png";
import HeartIcon from "../../assets/images/header-heart.png";
import BagIcon from "../../assets/images/header-bag.png";

import {
  HeaderWrapper,
  LinkTo,
  NavigationWrapper
} from "./styled";

const PageHeader = () => {
  return (
      <HeaderWrapper>
        <LinkTo to="/">
          <img src={LogoHeader} alt="Logo OSF Academy" />
        </LinkTo>
        
        <NavigationWrapper>
          <LinkTo to="/services">
            SERVICES
          </LinkTo>
          <LinkTo to="/company">
            COMPANY
          </LinkTo>
          <LinkTo to="/library">
            LIBRARY
          </LinkTo>
          <LinkTo to="/contactus">
            CONTACT US
          </LinkTo>              
        </NavigationWrapper>
        
        <div>
          <img src={SearchIcon} alt="Search Icon" />
          <img src={ProfileIcon} alt="Profile Icon" />
          <img src={HeartIcon} alt="Heart Icon" />
          <img src={BagIcon} alt="Bag Icon" />
        </div>
      </HeaderWrapper>
  );
};

export default PageHeader;