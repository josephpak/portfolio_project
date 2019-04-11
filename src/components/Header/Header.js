import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import NavBar from "../NavBar/NavBar";

import sun from "../../images/icons/sun.png"
import moon from "../../images/icons/moon.png"

import {
  HeaderContainer,
  HeaderContent,
  NightModeContainer,
  darkModeLogoStyle,
  profilePictureStyle
} from "./HeaderStyles"

import {
  useTheme
} from "../../hooks/darkMode"

const Header = () => {
  const themeState = useTheme();

  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "images/profile.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
          }
        }
      }
    }  
  `)

  const profile = data.profile.childImageSharp.fixed

  return (
    <HeaderContainer>
      <NightModeContainer>
      <img
        src={themeState.dark ? sun : moon} 
        alt="Dark Mode button" 
        onClick={e =>  themeState.toggle()}
        style={darkModeLogoStyle}
      />
      </NightModeContainer>
      <HeaderContent dark={themeState.dark}>
        <NavBar dark={themeState.dark}/>
        <Image 
          fixed={profile} 
          alt="profile-pic"
          style={profilePictureStyle}
        />
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
