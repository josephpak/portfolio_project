import styled from "styled-components";

import {
  mobile,
  tablet
} from "../Misc/media-points"

import {
  black,
  white
} from "../Misc/darkmode-colors"

export const HeaderContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 95px;

  @media ${mobile} {
    width: 100%;
    margin: 0;
    height: 100%;
  }
`

export const HeaderContent = styled.div`
  margin: 0 95px;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  color: ${props => props.dark ? white : black};

  @media ${mobile} {
    flex-direction: column;
    margin: 0;
    height: 100%;
  }

  a {
    color: #3e4981;
    span {
      color: #eb4d96;
    }
  }

  a:hover {
    color: #3e4981;
  }

  p {
    padding: 0 25px;
    line-height: 2;
    font-size: 1.8rem;
    font-family: Feijoa;

    @media ${mobile} {
      font-size: 1.4rem;
      padding: 20px 30px;
      text-align: center;
    }

    @media ${tablet} {
      font-size: 1.4rem;
    }
  }
` 

export const NightModeContainer = styled.div`
  border: 3px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 20px;
  right: 20px;
  position: absolute;
  width: 78px;
  color: ${props => props.dark ? white : black};
  cursor: pointer;

  @media ${mobile} {
    flex-direction: column;
  }

  p {
    padding-top: 7px;
    font-family: Feijoa;
    font-size: 18px;
  }

  img {
    width: 25px;
    height: 25px;
  }
`

export const profilePictureStyle = {
    height: '100px',
    width: '100px',
    minWidth: '100px',
    minHeight: '100px',
    margin: '0 50px',
    borderRadius: '50%',
}