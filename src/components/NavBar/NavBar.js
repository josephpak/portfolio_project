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
        >
            About me
        </Link>
        <Link
            to="/projects"
        >
            Projects
        </Link>
        <Link
            to="/writing"
        >
            Writing
        </Link>
    </NavBarWrapper>
  )
}
