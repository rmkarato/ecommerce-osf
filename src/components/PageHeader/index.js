import React, { useState, useRef, useEffect } from "react";

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
import DropdownImg from "../../assets/images/dropdown-img.png";
import ArrowDropdownOpacity from "../../assets/images/arrow-dropdown.png";

import {
  HeaderWrapper,
  LinkTo,
  NavigationWrapper,
  ButtonMaterial,
  ButtonMaterialOpacity,
  IconsWrapper,
  LanguageWrapper,
  ArrowImage,
  ArrowServices
} from "./styled";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "378px",
    width: "99.5vw",
    marginTop: "20px",
    backgroundColor: "#262A32",
    color: "#FFF",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
  }
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
          <ButtonMaterial 
            ref={anchorRef}
            aria-controls={openDropdown ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleClickDropdown}
          >
            SERVICES
            <ArrowServices src={ArrowDropdownOpacity} alt="Arrow Dropdown" />
          </ButtonMaterial>
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
                    <MenuList className={classes.paper} autoFocusItem={openDropdown}>
                      <div>
                        <MenuItem onClick={handleClickOutside}><b>PRODUCT CATEGORIES</b></MenuItem>
                        <MenuItem onClick={handleClickOutside}>Accessories</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Alcohol</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Art</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Books</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Drink</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Electronics</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Flowers & Plants</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Food</MenuItem>
                      </div>
                      
                      <div>
                        <MenuItem onClick={handleClickOutside}>Gadgets</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Garden</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Grocery</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Home</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Jewelry</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Kids & Baby</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Men's Fashion</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Mobile</MenuItem>
                      </div>

                      <div>
                        <MenuItem onClick={handleClickOutside}>Motorcycles</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Movies</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Music</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Office</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Pets</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Romantic</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Sport</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Toys</MenuItem>
                      </div>

                      <div>
                        <MenuItem onClick={handleClickOutside}><b>SALE</b></MenuItem>
                        <MenuItem onClick={handleClickOutside}>Accessories</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Alcohol</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Art</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Books</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Drink</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Electronics</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Flowers & Plants</MenuItem>
                        <MenuItem onClick={handleClickOutside}>Food</MenuItem>
                      </div>

                      <div>
                        <img src={DropdownImg} alt="Dropdown Img" />
                      </div>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <ButtonMaterial>
            <LinkTo to="/company">
              COMPANY
            </LinkTo>
          </ButtonMaterial>
          
          <ButtonMaterial>
            <LinkTo to="/library">
              LIBRARY
            </LinkTo>
          </ButtonMaterial>
          
          <ButtonMaterial>
            <LinkTo to="/contactus">
              CONTACT US
            </LinkTo>   
          </ButtonMaterial>
        </NavigationWrapper>

        <LanguageWrapper>
          <ButtonMaterialOpacity>
            EN
            <ArrowImage src={ArrowDropdownOpacity} alt="Arrow Dropdown" />
          </ButtonMaterialOpacity>
          <ButtonMaterialOpacity>
            $US
            <ArrowImage src={ArrowDropdownOpacity} alt="Arrow Dropdown" />
          </ButtonMaterialOpacity>
        </LanguageWrapper>
        
        <IconsWrapper>
          <LinkTo to="/search">
            <img src={SearchIcon} alt="Search Icon" />
          </LinkTo>

          <LinkTo to="/profile">
            <img src={ProfileIcon} alt="Profile Icon" />
          </LinkTo>
          
          <LinkTo to="/like">
            <img src={HeartIcon} alt="Heart Icon" />
          </LinkTo>
          
          <LinkTo to="/cart">
            <img src={BagIcon} alt="Bag Icon" />
          </LinkTo>
        </IconsWrapper>
      </HeaderWrapper>
  );
};

export default PageHeader;