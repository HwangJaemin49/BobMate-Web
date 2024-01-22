// Action Types
const SET_CONTENT = 'ContentState/SET_CONTENT';

// Action Creating functions
export const TYPES = {
  videoContent: 'videoContent',
  textContent: 'textContent',
  nil: null,
};

export const setContent = (content) => ({
  type: SET_CONTENT,
  content,
});

// Declare Initial state
const initialState = {
  content: null,
};

// Declare Reducer
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTENT:
      return { ...state, content: action.content };
    default:
      return state;
  }
}
