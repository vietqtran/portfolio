// rootReducer.js
import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducer';

export const store = createStore(rootReducer);