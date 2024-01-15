import { combineReducers } from 'redux';
import StepState from './StepState';
import NormalSituationState from './NormalSituationState';
import ContentState from './ContentState';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  StepState,
  NormalSituationState,
  ContentState,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default rootReducer;
