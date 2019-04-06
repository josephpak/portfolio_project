import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* border: 2px dotted black; */
  height: 400px;
  display: flex;
  align-items: center;
`

export const HeaderContent = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  /* border: 1px solid black; */
  margin: 0 auto;
  margin: 0 95px;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;

  img {
    height: 100px;
    min-width: 100px;
    margin: 0 50px;
  }

  p {
    padding: 0 25px;
    line-height: 2;
    font-size: 1.8rem;
    font-family: Feijoa
  }
` 