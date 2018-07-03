//import corresponding reducer here
import deepFreeze from 'deep-freeze';
import reducer from '../../reducers/asset';
import {
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_FUFILLED,
  FETCH_INITIAL_DATA_FAILED
} from '../../actions';


const state = {
  loading:false,
  data:[],
  error:null,
  inputValue:''
}


describe('asset reducer', () => {
  it('should return the initial state', () => {
      const actual = reducer(state, {});
      expect(actual).toEqual(state);
  })
  it('should initiate fetching data and update loading to true', () => {
    const action = {type:FETCH_INITIAL_DATA},
          expected = {...state, loading:true},
          actual = reducer(state, action);
    expect(actual).toEqual(expected)
  });
  it('should succefully fetched data and update loading to false and data', () => {
    const data = [{'userId':'yes', title:"what is going on"}],
          action = {type:FETCH_INITIAL_DATA_FUFILLED, payload:data},
          expected = {...state, loading:false, data},
          actual = reducer(state,action);
    expect(actual).toEqual(expected);
  })
  it('should fetch, but fail, update loading and error', () => {
    const error = {message:"was not able to fetch"},
          action = {type:FETCH_INITIAL_DATA_FAILED, payload:error},
          expected = {...state, loading:false, error},
          actual = reducer(state,action);
    expect(actual).toEqual(expected);
  })
  it('should not mutate', () => {
    const data = [{'userId':'yes', title:"what is going on"}],
          action = {type:FETCH_INITIAL_DATA_FUFILLED, payload:data},
          actual = reducer(deepFreeze(state),action),
          afterState = {...state, data};
    expect(actual).toEqual(afterState)
  })
})
