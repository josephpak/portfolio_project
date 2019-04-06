import styled from "styled-components";

export const BodyWrapper = styled.div`
    background-color: #E9C3B8;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
    background: white;
    margin: 70px 0;
    width: 1200px;
    border-radius: 5px;
    box-shadow:  0 2px 4px rgba(0, 0, 0, 0.12);
`

export const ProjectWrapper = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    height: 400px;
    align-items: center;
    width: 100%;
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
    }    
`

export const Caption = styled.div`
    align-items: center;
    padding: 0 30px;
    width: 80%;
    max-width: 80%;

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
    background-color: #f4f8ff;
    height: 95%;
    min-height: 95%;
    margin-left: 25px;
    flex-direction: column;
`





// const white = "#FFFFFF"
// const black = "#161617"
// const gray = "#F8f8f9"