// Action Types
const SELECT_SITUATION = 'SpecificState/SELECT_SITUATION';
const RESET = 'SpecificState/RESET';

// Action Creating functions
/**
 *
 * @param {*} index: index number type , 0 <= index <= 3
 * @returns
 */
export const SelectSituation = (index) => ({
  type: SELECT_SITUATION,
  index,
});

export const resetSpecificState = () => ({
  type: RESET,
});

// Declare Initial state
/**
 * select: index, 0 <= index <= 3
 *
 * situations : 길이가 4인 배열로 고정, 상황 문구들을 저장
 */
const initialState = {
  select: -1,
  situations: [
    '비 오는 날 혼술하는 중',
    '너무 짜증나서 야식 먹는 중',
    '자취방에서 친구들과 치킨 먹는 중',
    '시험 기간 기념 떡볶이 먹는 중',
  ],
};

// Declare Reducer
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SITUATION:
      const index = action.index;
      if (index < 0 || index > 3) {
        return state;
      }
      return { ...state, select: index };
    case RESET:
      return { ...state, select: -1 };
    default:
      return state;
  }
}
