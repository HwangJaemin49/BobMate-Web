// Action Types
const SET_SECOND = 'StepState/SET_SECOND';

const PLUS_STEP = 'StepState/PLUS_STEP';
const MINUS_STEP = 'StepState/MINUS_STEP';

// Action Creating functions
export const TYPES = { normal: 'normal', specific: 'specific', nil: null };

/**
 * @param {TYPES} secondStep :  TYPES의 요소를 인자로 받음.
 * normal: 일반 상황
 * specific: 특정 상황
 * nil: null, 초기화를 위해 사용.
 */
export const setSecond = (secondStep) => ({
  type: SET_SECOND,
  secondStep,
});

/**
 *
 * @returns PLUS_STEP
 * redux dispatch function: nowStep의 증가
 * nowStep이 증가하면, FindMatePage.jsx에서 step맞는 Screen으로 리렌더링이 발생됨
 */
export const plusStep = () => ({
  type: PLUS_STEP,
});

/**
 *
 * @returns MINUS_STEP
 * redux dispatch function: nowStep의 감소
 * nowStep이 감소하면, FindMatePage.jsx에서 step맞는 Screen으로 리렌더링이 발생됨
 */
export const minusStep = () => ({
  type: MINUS_STEP,
});

// Declare Initial state
const initialState = {
  secondStep: null,
  nowStep: 1,
};

// Declare Reducer
export default function Account(state = initialState, action) {
  switch (action.type) {
    case SET_SECOND:
      return { ...state, secondStep: action.secondStep };
    case PLUS_STEP:
      return { ...state, nowStep: state.nowStep + 1 };
    case MINUS_STEP:
      return { ...state, nowStep: state.nowStep - 1 };
    default:
      return state;
  }
}
