import {
  CHANGE_INPUTVALUE,
  SEARCH_INPUTVALUE,
  FETCH_INITIAL_DATA,
  FETCH_INITIAL_DATA_FUFILLED,
  FETCH_INITIAL_DATA_FAILED
} from './type';


export const changeInputValue = text => ({
  type:CHANGE_INPUTVALUE,
  payload:text
})

export const searchInput = text => ({
  type:SEARCH_INPUTVALUE,
  payload:text
})

export const fetchData = () => ({
  type:FETCH_INITIAL_DATA
})

export const fetchDataFufilled = data => ({
  type:FETCH_INITIAL_DATA_FUFILLED,
  payload:data
})

export const fetchDataFailed = error => ({
  type:FETCH_INITIAL_DATA_FAILED,
  payload:error
})
