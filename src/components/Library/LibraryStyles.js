import styled from "styled-components"

import {
    mobile
} from "../Misc/media-points"

export const Book = styled.div`
    border: 2px solid blue;
    width: 100%;
    height: 70px;
    border-radius: 10px;
    font-family: Rubik;
    color: blue;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 10px 0;
`

export const Article = styled.div`
    border: 2px solid brown;
    width: 100%;
    height: 70px;
    border-radius: 10px;
    font-family: Rubik;
    color: brown;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 10px 0;
`

export const BooksWrapper = styled.div`
    width: 45%;
    margin-right: 5px;

    hr {
        width: 10%;
        text-align: left;
        margin-left: 0;
        border-color: blue;
        border-width: 2px;
    }
`

export const NewsStand = styled.div`
    width: 45%;

    hr {
        width: 10%;
        text-align: left;
        margin-left: 0;
        border-color: brown;
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

    h1 {
        font-family: Feijoa;
        font-size: 1.5rem;

        @media ${mobile} {
            text-align: center;
        }
    }
`