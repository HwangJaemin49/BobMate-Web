import { combineReducers } from 'redux';
import StepState from './StepState';
import NormalSituationState from './NormalSituationState';
import SpecificSituationState from './SpecificSituationState';
import ContentState from './ContentState';
import ResultState from './ResultState';
import { configureStore } from '@reduxjs/toolkit';
// import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  StepState,
  NormalSituationState,
  SpecificSituationState: SpecificSituationState.reducer,
  ContentState,
  ResultState,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default rootReducer;
