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
  profilePictureStyle,
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
      <NightModeContainer 
      dark={themeState.dark}      
      alt="Dark Mode button" 
      onClick={e =>  themeState.toggle()}> 
      <p
      >{themeState.dark ? "Light" : "Dark"}</p>
      <img
        src={themeState.dark ? sun : moon} 

      >  
      </img>
      </NightModeContainer>
      <HeaderContent dark={themeState.dark}>
        <NavBar dark={themeState.dark}/>
        <Image 
          fixed={data.profile.childImageSharp.fixed} 
          alt="profile-pic"
          style={profilePictureStyle}
        />
        <p>
          Hi! I’m Joe. I'm currently a Product Manager at <a href="https://p72.vc" targe="_blank">Point72 <div>Ventures</div></a> - where I am helping entrepreneurs and visionary founders build world-class AI and ML businesses.
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
