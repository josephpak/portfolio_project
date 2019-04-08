import styled from "styled-components";

import {
    mobile,
    tablet
} from "../Misc/media-points"

import {
    white,
    gray,
    black
} from "../Misc/darkmode-colors"

export const BodyWrapper = styled.div`
    background-color: ${props => props.dark ? white : "#E9C3B8"};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 3%;

    @media ${mobile} {
        min-height: 800px;
    }

    @media ${tablet} {
        width: 100%;
        padding: 0 3%;
    }
`

export const Front = styled.img`
    height: 60px;
    cursor: pointer;
`

export const Back = styled.img`
    height: 60px;
    cursor: pointer;
`

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    background: ${props => props.dark ? gray : white};
    margin: 70px 0;
    width: 1200px;
    border-radius: 5px;
    box-shadow:  0 2px 4px rgba(0, 0, 0, 0.12);

    @media ${mobile} {
        width: 100%;
        height: 70%;
        margin: 0;
    }

    @media ${tablet} {
        width: 100%;
        
    }
`

export const ProjectWrapper = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    height: 400px;
    align-items: center;
    width: 100%;

    @media ${mobile} {
        flex-direction: column;
        justify-content: center;
    }
`

export const Technologies = styled.div`
    img {
        max-height: 35px;
    }
    min-width: 35px;
`

export const Demo = styled.div`
    img {
        max-height: 400px;
        position: relative;

        @media ${mobile} {
            width: 100%;
            max-height: 500px;
        }
    }    
`

export const Caption = styled.div`
    align-items: center;
    padding: 0 30px;
    width: 80%;
    max-width: 80%;

    @media ${mobile} {
        width: 100%;
    }

    h1 {
        font-size: 1.2rem;
        font-weight: 700;
        font-family: Feijoa;
    }

    p {
        padding: 5px 0;
        font-size: 1rem;
        line-height: 1.2;
        font-family: Rubik;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 550px;
    align-items: center;
    background-color: ${props => props.dark ? white : "#f4f8ff"};
    height: 95%;
    min-height: 95%;
    margin-left: 25px;
    flex-direction: column;
    border: 1px solid ${props => props.dark ? black : "none"};
    border-radius: ${props => props.dark ? "5px" : "none"};

    @media ${mobile} {
        width: 100%;
        margin: 0;
        justify-content: center;
        padding: 20px 0;
        height: 200px;
        min-height: 200px;
    }

    @media ${tablet} {
        width: 100%;
    }
`