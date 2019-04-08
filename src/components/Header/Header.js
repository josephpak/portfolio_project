import PropTypes from "prop-types";
import React from "react";

import profile from "../../images/profile.jpg";
import moon from "../../images/moon-logo.png"
import sun from "../../images/sun.png"

import NavBar from "../NavBar/NavBar";

import {
  HeaderContainer,
  HeaderContent,
  NightModeContainer
} from "./HeaderStyles"

import {
  useTheme
} from "../../hooks/darkMode"

const Header = ({ siteTitle }) => {
  const themeState = useTheme()

  return (
    
    <HeaderContainer>
      <NightModeContainer>
      <img src={themeState.dark ? sun : moon} alt="Dark Mode button" onClick={e =>  themeState.toggle()}/>
      </NightModeContainer>
      <HeaderContent dark={themeState.dark}>
        <NavBar dark={themeState.dark}/>
        <img src={profile} alt="profile-pic"/>
        <p>
          Hi! I’m Joe. I was most recently a product manager at FiscalNote where I led research and development for the company’s relationship management software and data products.
        </p>
      </HeaderContent>
    </HeaderContainer>
  )
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
