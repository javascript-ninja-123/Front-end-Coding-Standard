import {
  CHANGE_INPUTVALUE
} from '../actions';


const INITIAL_STATE = {
  inputValue:''
}

export default (state = INITIAL_STATE, {type,payload}) => {
  switch(type){
    case CHANGE_INPUTVALUE:
    //this is how you return your state
    // we are not mutating at all
    return {...state, inputValue:payload}
    default:
    return state;
  }
}
