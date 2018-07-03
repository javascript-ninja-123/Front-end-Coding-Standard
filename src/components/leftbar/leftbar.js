import React, {Fragment} from 'react';
import styled from 'styled-components';
//import resuable-recompose higher order component
import {withTheme} from '../../recomposes/theme';


const NavWrapper = styled.div.attrs({
  flex:props => props.flex || '30%',
  background:props => props.background || '#0277bd'
})`
  box-sizing:border-box;
  padding:1rem 1.2rem;
  flex: 0 0 ${props => props.flex};
  min-height:100vh;
  background-color:${props => props.background};
  color:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
`;



export const LeftBar = ({flex,onChangeTheme,toggleTheme,background}) => (
  <NavWrapper flex={flex} background={toggleTheme ? background : ''}>
    <p>This is a leftBar</p>
    <button onClick={onChangeTheme}>toggle me to change theme color</button>
  </NavWrapper>
)


export const WithTemeLeftBar = withTheme(LeftBar)
