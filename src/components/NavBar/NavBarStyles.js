import styled from "styled-components";

export const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100px;
    min-width: 100px;
    justify-content: space-between;

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