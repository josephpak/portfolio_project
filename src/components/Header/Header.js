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
          fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
          }
        }
      }
    }  
  `)

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
          fixed={data.profile.childImageSharp.fixed} 
          alt="profile-pic"
          style={profilePictureStyle}
        />
        <p>
          Hi! I’m Joe. I'm currently a Product Manager at Samsara - where I help organizations across the world leverage technologies like sensors, computer vision and software to make fleets safer and more efficient.
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
