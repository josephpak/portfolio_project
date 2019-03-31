import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin-bottom: 1.45rem;
  border: 1px solid black;
  height: 250px;
  display: flex;
  align-items: center;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960;
  margin: 0 9.0rem;
  border: 1px solid black;
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
` 

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
        <Link
          to="/"
          style={{
            fontSize: `3rem`,
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
