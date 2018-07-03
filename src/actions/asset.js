import {
  CHANGE_INPUTVALUE
} from './type';


export const changeInputValue = text => ({
  type:CHANGE_INPUTVALUE,
  payload:text
})
