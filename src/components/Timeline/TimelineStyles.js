import styled from "styled-components";

import {
    white,
    black
} from "../Misc/darkmode-colors"

export const TimelineWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    
    font-family: Rubik;

    .ant-timeline-item-head {
        background-color: ${props => props.dark ? black : white}
    }
    

    li {
        font-size: 1rem;
        color: ${props => props.dark ? white : black};
        
    }
`