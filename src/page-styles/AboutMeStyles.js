import styled from "styled-components"

import {
    mobile
} from "../components/Misc/media-points"

import {
    white,
    gray,
    black
} from "../components/Misc/darkmode-colors"

export const BodyWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const MainContentWrapper = styled.div`
    width: 100%;
    display: flex;

    @media ${mobile} {
        flex-direction: column;
        align-items: center
    }
`

export const Interests = styled.div`
    width: 50%;

    @media ${mobile} {
        width: 100%;
        
    }
`

export const ContactContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ContactContentCard = styled.div`
    width: 90%;
    display: flex;

    @media ${mobile} {
        flex-direction: column;
    }
`

export const ContactCardLeftWrapper = styled.div`
    width: 50%;
    padding: 40px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: ${props => props.dark ? gray : "#1F4955"};

    @media ${mobile} {
        width: 100%;
    }

    h1 {
        font-family: Feijoa;
        font-size: 2.4rem;
        color: ${props => props.dark ? black : white};
        width: 100%;
        padding-bottom: 25px;
    }

    h2 {
        font-family: Feijoa;
        font-size: 1.4rem;
        color: ${props => props.dark ? black : white};
        width: 100%;
        padding-bottom: 10px;
    }

    hr {
        width: 10%;
        text-align: left;
        margin-left: 0;
    }
`

export const ContactCardRight = styled.div`
    width: 50%;

    @media ${mobile} {
        width: 100%;
    }

    img {
        width: 100%;
    }
`
