import { combineReducers } from 'redux';

import jobCardsReducer from './jobCardsReducer';

const reducers = combineReducers({
  jobCards: jobCardsReducer,
});

export default reducers;
