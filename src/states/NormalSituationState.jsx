// Action Types
const SET_MOOD = 'NormalState/SET_MOOD';
const SET_MEMBER = 'NormalState/SET_MEMBER';

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

export const MemberTypes = {
  alone: 'alone',
  family: 'family',
  friend: 'friend',
  lover: 'lover',
};
export const setMember = (who) => ({
  type: SET_MEMBER,
  who,
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
    alone: false,
    family: false,
    friend: false,
    lover: false,
  },
};

// Declare Reducer
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOOD:
      let newMood = { ...state.mood };
      newMood[action.what] = !state.mood[action.what];
      return { ...state, mood: newMood };
    case SET_MEMBER:
      let newMember = { ...state.member };
      newMember[action.who] = !state.member[action.who];
      return { ...state, member: newMember };
    default:
      return state;
  }
}
