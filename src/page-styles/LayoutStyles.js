import styled from 'styled-components';

import {
  black,
  white,
  gray
} from "../components/Misc/darkmode-colors"

export const SiteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.dark ? black : white}
`