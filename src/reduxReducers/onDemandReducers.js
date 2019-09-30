// contain initial and dispatch {type: action}
import {
    GET_CONTENT,
    SLIDER_LEFT,
    SLIDER_RIGHT
} from '../reduxActions/types';

const initialState = {content: [], success:false};

export default function(state = initialState, action) {
    var newContent = [];
    switch (action.type) {
        case GET_CONTENT:
            return {...state,content: action.payload,success:true}
        case SLIDER_LEFT:
            newContent = state.content.map((obj) => {
                if(obj.title === action.payload) {
                    obj.status = obj.status - 1 < 0 ? 4 : obj.status - 1;
                    return obj;
                }else {
                    return obj;
                }
            })
            return {...state,content: newContent};
        case SLIDER_RIGHT:
            newContent = state.content.map((obj) => {
                if(obj.title === action.payload) {
                    obj.status = obj.status + 1 > 4 ? 0 : obj.status +1;
                    return obj;
                }else {
                    return obj;
                }
            })
            return {...state,content: newContent};
        default:
            return state;
    }
}