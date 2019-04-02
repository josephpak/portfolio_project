import PropTypes from "prop-types";
import React from "react";

import profile from "../../images/profile.jpg";

import NavBar from "../NavBar/NavBar";

import {
  HeaderContainer,
  HeaderContent
} from "./HeaderStyles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <NavBar/>
      <img src={profile} alt="profile-pic"/>
      <p>
        Hi! I’m Joe. I was most recently a product manager at FiscalNote where I led research and development for the company’s relationship management software and data products.
      </p>
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
