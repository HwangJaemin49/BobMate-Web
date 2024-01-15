import { combineReducers } from 'redux';
import StepState from './StepState';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  StepState,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true, // 기본은 true로 설정되어있다. 개발자 도구의 사용 여부를 정한다.
});

export default rootReducer;
