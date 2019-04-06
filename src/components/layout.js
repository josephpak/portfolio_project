import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./Header/Header"
import "./reset.css"

const SiteWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
`

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
