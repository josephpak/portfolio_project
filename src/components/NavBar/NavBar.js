import React from 'react'
import { Link } from "gatsby";

import {
    NavBarWrapper
} from "./NavBarStyles"


export default function NavBar() {
  return (
    <NavBarWrapper>
        <Link
            to="/"
            activeStyle={{ color: "black" }}
        >
            About me
        </Link>
        <Link
            to="/projects"
            activeStyle={{ color: "black" }}
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
