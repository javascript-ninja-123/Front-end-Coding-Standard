import { combineEpics } from 'redux-observable';
import axios from 'axios';
import {Observable,of,defer,from,getJSON,empty} from 'rxjs'
import {mergeMap,ignoreElements,tap,concatMap,catchError,map,switchMap,groupBy,debounceTime,toArray,filter} from 'rxjs/operators'
//import type from actions
import {
  FETCH_INITIAL_DATA,
  SEARCH_INPUTVALUE,
  fetchDataFufilled,
  fetchDataFailed
} from '../actions';

const fetchMap = url => Observable.create(async observer => {
  try{
    const {data} = await axios.get(url)
    observer.next(fetchDataFufilled(data))
  }
  catch(e){
    observer.error(e)
  }
})


const fetchDataEpic = action$ =>
action$.ofType(FETCH_INITIAL_DATA)
.pipe(
  switchMap(() => defer(() => fetchMap('https://jsonplaceholder.typicode.com/todos'))),
  catchError(error => of(fetchDataFailed(error)))
)






//export it
export const assetEpic = combineEpics(
fetchDataEpic
);
