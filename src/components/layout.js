import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header/Header"
import "./reset.css"

import {
  SiteWrapper
} from "../page-styles/LayoutStyles"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <SiteWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        
        {children}
      </SiteWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
