// contain initial and dispatch {type: action}
import {
    GET_CONTENT
} from '../reduxActions/types';

const initialState = {content: [], success:false};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONTENT:
            return {...state,content: action.payload,success:true}
        default:
            return state;
    }
}