import {
  CHANGE_INPUTVALUE,
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_FUFILLED,
  FETCH_INITIAL_DATA_FAILED
} from '../actions';


const INITIAL_STATE = {
  inputValue:'',
  loading:false,
  data:[],
  error:null
}

export default (state = INITIAL_STATE, {type,payload}) => {
  switch(type){
    case CHANGE_INPUTVALUE:
    //this is how you return your state
    // we are not mutating at all
    return {...state, inputValue:payload};
    case FETCH_INITIAL_DATA:
    return {...state, loading:true};
    case FETCH_INITIAL_DATA_FUFILLED:
    return {...state, loading:false, data:payload};
    case FETCH_INITIAL_DATA_FAILED:
    return {...state, loading:false, error:payload}
    default:
    return state;
  }
}
