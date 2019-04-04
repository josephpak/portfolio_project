import styled from "styled-components";

export const CardWrapper = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    width: 100%;
`

export const TechnologiesWrapper = styled.div`
    img {
        max-height: 30px;
    }
    min-width: 35px;
`

export const DemoWrapper = styled.div`
    img {
        max-height: 250px;
        position: relative;
        top: -75px;
        align-self: flex-end;
    }    
`

export const CaptionWrapper = styled.div`
    align-items: center;
    padding: 0 30px;

    h1 {
        font-size: 1.2rem;
        font-weight: 700;
    }

    p {
        padding: 5px 0;
        font-size: 1rem;
        line-height: 1.2;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
    align-items: center;
`

export const Front = styled.img`
  height: 75px;
  right: 5%;
  position: absolute;
`

export const Back = styled.img`
  height: 75px;
  left: 5%;
  position: absolute;
  cursor: pointer;
`

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`