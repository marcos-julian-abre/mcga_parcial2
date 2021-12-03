import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { localsReducer } from './localsReducer';

export const rootReducer = combineReducers({
  locals: localsReducer,
  products: productsReducer
});
