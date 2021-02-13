import React, { useState, useRef, useEffect } from "react";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "378px",
    width: "98vw",
    backgroundColor: "#262A32",
    fontFamily: "Lato",
    color: "#FFF"
  },
}));

const PageHeader = () => {
  const classes = useStyles();
  const [openDropdown, setOpenDropdown] = useState(false);
  const anchorRef = useRef(null);

  const handleClickDropdown = () => {
    setOpenDropdown((prevOpen) => !prevOpen)
  };

  const handleClickOutside = (event) => {
    if(anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenDropdown(false);
  };

  const prevOpen = useRef(openDropdown);
  useEffect(() => {
    if(prevOpen.current === true && openDropdown === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = openDropdown;
  }, [openDropdown]);

  return (
      <HeaderWrapper>
        <LinkTo to="/">
          <img src={LogoHeader} alt="Logo OSF Academy" />
        </LinkTo>
        
        <NavigationWrapper>
          <Button 
            ref={anchorRef}
            aria-controls={openDropdown ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleClickDropdown}
          >
            SERVICES
          </Button>
          <Popper 
            open={openDropdown}
            anchorEl={anchorRef.current}
            role={undefined}
            transition disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow className={classes.root}
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClickOutside}>
                    <MenuList autoFocusItem={openDropdown}>
                      <MenuItem onClick={handleClickOutside}>PRODUCT CATEGORIES</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Accessories</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Alcohol</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Art</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Books</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Drink</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Electronics</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Flowers & Plants</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Food</MenuItem>

                      <MenuItem onClick={handleClickOutside}>Gadgets</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Garden</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Grocery</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Home</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Jewelry</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Kids & Baby</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Men's Fashion</MenuItem>
                      <MenuItem onClick={handleClickOutside}>Mobile</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
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
          <button>EN</button>
          <button>$US</button>
        </div>
        
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