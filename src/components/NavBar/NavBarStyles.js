import styled from "styled-components";

import {
    mobile
} from "../Misc/media-points"

export const NavBarWrapper = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    height: 100px;
    min-width: 100px;
    justify-content: space-around;

    @media ${mobile} {
        flex-direction: row;
        padding-top: 20px;
    }

    a {
        font-size: 1.3rem;
        color: black;
        text-decoration: none;
        color: gray;
        font-family: Rubik;

        &:hover {
            color: black;
        }

        @media ${mobile} {
            padding: 0 10px;
        }
    }
`