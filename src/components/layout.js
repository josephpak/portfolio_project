import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

import Header from "./header"
import "./reset.css"

const BodyWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  border: 2px solid green;
`

const FooterWrapper = styled.footer`
  border: 2px solid red;
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
