// contain initial and dispatch {type: action}
import {

} from '../reduxActions/types';

const initialState = {success:false};

export default function(state = initialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}