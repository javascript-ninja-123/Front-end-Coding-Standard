import React from 'react';
import styled from 'styled-components';
import {DefaultCard} from '../card/card';

const GridWrapper = styled.div.attrs({
  columngap:props => props.columngap || '1rem',
  rowgap:props => props.rowgap || '1rem',
  minwidth:props => props.minwidth || '300px'
})`
  display:grid;
  grid-column-gap: : ${props => props.columngap};
  grid-row-gap: ${props => props.rowgap};
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minwidth},1fr));
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  justify-content: center;
  align-content: center;
  justify-items: center;
`


export const Grid = ({data,columnGap,rowGap,minWidth}) => (
  <GridWrapper
    minwidth={minWidth}
    columngap={columnGap} rowgap={rowGap}>
    {
      data.reduce((acc,val,i) => {
        val = <DefaultCard key={`${val[0]}${i}`} {...val}/>
        acc[i] = val;
        return acc;
      }, new Array(data.length))
    }
  </GridWrapper>
)
