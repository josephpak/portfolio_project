import React from 'react'
import { Link } from "gatsby";

import {
    NavBarWrapper
} from "./NavBarStyles"

import {
    useTheme
} from "../../hooks/darkMode"

export default function NavBar() {
  const themeState = useTheme()  

  return (
    <NavBarWrapper>
        <Link
            to="/"
            activeStyle={{color: themeState.dark ? "white" : "black"}}
        >
            About me
        </Link>
        <Link
            to="/projects"
            activeStyle={{color: themeState.dark ? "white" : "black"}}
        >
            Projects
        </Link>
        {/* <Link
            to="/writing"
        >
            Writing
        </Link> */}
    </NavBarWrapper>
  )
}
