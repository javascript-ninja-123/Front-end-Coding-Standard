import React from 'react';
import {compose,withState,withHandlers} from 'recompose';


export const withTheme  = compose(
  withState('toggleTheme','onClickToggle',false),
  withHandlers({
    onChangeTheme: props => event => props.onClickToggle(!props.toggleTheme)
  })
)
