import React from "react";

// import Layout from "../components/layout";
import SEO from "../components/seo";
import dennis from "../images/dennis.gif";
import styled from "styled-components";

const NotFoundContent = styled.div`
  border: 1px solid purple;
  img {
    max-width: 150px;
  }
`

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <NotFoundContent>
      <img src={dennis} alt="not-found"/>
      <h1>Ah ah ah</h1>
      <p>You didn't say the magic word</p>
    </NotFoundContent>
  </>  
)

export default NotFoundPage
