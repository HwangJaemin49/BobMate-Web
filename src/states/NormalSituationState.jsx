// Action Types
const SET_MOOD = 'NormalState/SET_MOOD';
const SELECT_MEMBER = 'NormalState/SELECT_MEMBER';
const RESET = 'NormalState/RESET';

// Action Creating functions
export const MoodTypes = {
  joy: 'joy',
  pleasure: 'pleasure',
  sadness: 'sadness',
  depression: 'depression',
  anger: 'anger',
};
export const setMood = (what) => ({
  type: SET_MOOD,
  what,
});

/**
 * @param {*} index: index number type , 0 <= index <= 3
 * @returns
 */
export const SelectMember = (index) => ({
  type: SELECT_MEMBER,
  index,
});

export const ResetNormalState = () => ({
  type: RESET,
});

// Declare Initial state
const initialState = {
  mood: {
    joy: false,
    pleasure: false,
    sadness: false,
    depression: false,
    anger: false,
  },
  member: {
    select: -1,
    members: ['혼자', '가족', '친구', '연인'],
  },
};

// Declare Reducer
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOOD:
      let newMood = { ...state.mood };
      newMood[action.what] = !state.mood[action.what];
      return { ...state, mood: newMood };
    case SELECT_MEMBER:
      const index = action.index;
      if (index < 0 || index > 3) {
        return state;
      }
      return { ...state, member: { ...state.member, select: index } };
    case RESET:
      return {
        mood: {
          joy: false,
          pleasure: false,
          sadness: false,
          depression: false,
          anger: false,
        },
        member: {
          select: -1,
          members: ['혼자', '가족', '친구', '연인'],
        },
      };
    default:
      return state;
  }
}
