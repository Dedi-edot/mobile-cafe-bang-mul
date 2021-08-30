/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';

const init_state = {
  product: [],
  user: '',
};

const reducerProduct = (state = init_state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  product: reducerProduct,
});
