import styled from "styled-components"

import {
    mobile,
    tablet
} from "../Misc/media-points"

import {
    black,
    white,
    gray
} from "../Misc/darkmode-colors"

export const Book = styled.div`
    border: 2px solid ${props => props.dark ? gray : "#D3A722"};
    width: 100%;
    height: 70px;
    border-radius: 10px;
    font-family: Rubik;
    color: blue;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 10px 0;

    a {
        color: ${props => props.dark ? gray : "#1E3756"};
    }
`

export const Article = styled.div`
    border: 2px solid ${props => props.dark ? gray : "#D3A722"};
    width: 100%;
    height: 70px;
    border-radius: 10px;
    font-family: Rubik;
    color: brown;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 10px 0;

    a {
        color: ${props => props.dark ? gray : "#A23030"};
    }
`

export const BooksWrapper = styled.div`

    width: 45%;
    margin-right: 5px;

    hr {
        width: 20%;
        text-align: left;
        margin-left: 0;
        border-color: ${props => props.dark ? gray : "#1E3756"};
        border-width: 2px;
    }
`

export const NewsStand = styled.div`
    width: 45%;

    hr {
        width: 20%;
        text-align: left;
        margin-left: 0;
        border-color: ${props => props.dark ? gray : "#A23030"};
        border-width: 2px;
    }
`

export const LibraryWrapper = styled.div`
    @media ${mobile} {
        width: 100%;
        display: flex;
        justify-content: center;
        display: none;
    }

    @media ${tablet} {
        width: 100%;
    }

    display: flex;
    flex-wrap: wrap;
    width: 80%;

    h1 {
        font-family: Feijoa;
        font-size: 1.5rem;
        padding-bottom: 20px;

        color: ${props => props.dark ? white : black};

        @media ${mobile} {
            text-align: center;
        }
    }
`