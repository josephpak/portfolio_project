import styled from "styled-components";

export const CardWrapper = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
`

export const TechnologiesWrapper = styled.div`
    img {
        max-height: 30px;
    }
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
    }

    p {
        padding: 5px 0;
        font-size: 1rem;
        line-height: 1.2;
    }
`