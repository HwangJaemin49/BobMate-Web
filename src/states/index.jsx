import { combineReducers } from 'redux';
import StepState from './StepState';
import NormalSituationState from './NormalSituationState';
import SpecificSituationState from './SpecificSituationState';
import ContentState from './ContentState';
import ResultState from './ResultState';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  StepState,
  NormalSituationState,
  SpecificSituationState,
  ContentState,
  ResultState,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default rootReducer;
