const SET_TOKEN = 'TokenState/SET_TOKEN';
const DELETE_TOKEN = 'TokenState/DELETE_TOKEN';

const initialState = localStorage.getItem('accessToken');

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
});

// Declare Reducer
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    case DELETE_TOKEN:
      return null;
    default:
      return state;
  }
}
