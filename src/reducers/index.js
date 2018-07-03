import { combineReducers } from 'redux';
import AssetReducer from './asset';


const rootReducer = combineReducers({
 assets:AssetReducer
});

export default rootReducer;
