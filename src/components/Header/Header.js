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
      <img src={profile}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
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
