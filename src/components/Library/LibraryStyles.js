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
    border: 2px solid ${props => props.dark ? gray : "blue"};
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
        color: ${props => props.dark ? gray : "blue"};
    }
`

export const Article = styled.div`
    border: 2px solid ${props => props.dark ? gray : "brown"};
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
        color: ${props => props.dark ? gray : "brown"};
    }
`

export const BooksWrapper = styled.div`
    width: 45%;
    margin-right: 5px;

    hr {
        width: 20%;
        text-align: left;
        margin-left: 0;
        border-color: ${props => props.dark ? gray : "blue"};
        border-width: 2px;
    }
`

export const NewsStand = styled.div`
    width: 45%;

    hr {
        width: 20%;
        text-align: left;
        margin-left: 0;
        border-color: ${props => props.dark ? gray : "brown"};
        border-width: 2px;
    }
`

export const LibraryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;

    @media ${mobile} {
        width: 100%;
        display: flex;
        justify-content: center;
        display: none;
    }

    @media ${tablet} {
        width: 100%;
    }

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