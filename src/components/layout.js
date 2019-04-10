import React from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header"
import "./reset.css"

import {
  SiteWrapper
} from "../page-styles/LayoutStyles"

import {
  ThemeContext,
  useEffectDarkMode
} from "../hooks/darkMode"

const Layout = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode() 

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark))
    setThemeState({
        ...themeState,
        dark
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        dark: themeState.dark,
        toggle: toggle
      }}
    >
      <SiteWrapper dark={themeState.dark}>
          <Header />
          <ThemeContext.Provider
            value={{
              dark: themeState.dark,
              toggle: toggle
            }}
          >
          {children}
          </ThemeContext.Provider>
      </SiteWrapper>
    </ThemeContext.Provider>
  )
          }  

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
