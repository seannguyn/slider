import { combineReducers } from 'redux';
import userReducer from './userReducers';
import onDemandReducers from './onDemandReducers'

const rootReducer = combineReducers({
    user: userReducer,
    onDemand: onDemandReducers
});

export default rootReducer;