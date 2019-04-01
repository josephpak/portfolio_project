import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header/Header"
import "../reset.css"

import {
  BodyWrapper,
  FooterWrapper
} from "./LayoutStyles"

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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <BodyWrapper>
          <main>{children}</main>
        </BodyWrapper>
        <FooterWrapper>
          © {new Date().getFullYear()}
        </FooterWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
