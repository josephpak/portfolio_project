import styled from "styled-components";

export const NavBarWrapper = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    height: 100px;
    min-width: 100px;
    justify-content: space-around;

    a {
        font-size: 1.2rem;
        color: black;
        text-decoration: none;
        color: gray;

        &:hover {
            color: black;
        }
    }
`