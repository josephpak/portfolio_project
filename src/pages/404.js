import React from "react";

import Layout from "../components/Layout/Layout";
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
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundContent>
      <img src={dennis} alt="not-found"/>
      <h1>Ah ah ah</h1>
      <p>You didn't say the magic word</p>
    </NotFoundContent>
  </Layout>
)

export default NotFoundPage
