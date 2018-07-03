import { combineEpics } from 'redux-observable';
import {assetEpic} from './asset';


const rootEpic = combineEpics(
  assetEpic
);



export default rootEpic;
