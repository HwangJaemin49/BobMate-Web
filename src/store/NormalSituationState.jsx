// Action Types
const SELECT_MOOD = 'NormalState/SELECT_MOOD';
const SELECT_MEMBER = 'NormalState/SELECT_MEMBER';
const RESET = 'NormalState/RESET';

// Action Creating functions
export const selectMood = (index) => ({
  type: SELECT_MOOD,
  index,
});

/**
 * @param {*} index: index number type , 0 <= index <= 3
 * @returns
 */
export const selectMember = (index) => ({
  type: SELECT_MEMBER,
  index,
});

export const resetNormalState = () => ({
  type: RESET,
});

// Declare Initial state
const initialState = {
  mood: {
    select: -1,
    moods: [
      { icon: '😊‍', content: '기쁨', key: 'GLAD' },
      { icon: '😆', content: '즐거움', key: 'EXCITED' },
      { icon: '😢', content: '슬픔', key: 'SAD' },
      { icon: '😔', content: '우울', key: 'GLOOMY' },
      { icon: '😡', content: '분노', key: 'ANGRY' },
    ],
  },
  member: {
    select: -1,
    members: [
      { icon: '🙋‍♀️', content: '혼자', key: 'ALONE' },
      { icon: '👨‍👩‍👧‍👦', content: '가족', key: 'FAMILY' },
      { icon: '👯', content: '친구', key: 'FRIEND' },
      { icon: '👫', content: '연인', key: 'LOVER' },
    ],
  },
};

// Declare Reducer
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_MOOD:
      const moodIndex = action.index;
      if (moodIndex < 0 || moodIndex > 4) {
        return state;
      }
      return { ...state, mood: { ...state.mood, select: moodIndex } };
    case SELECT_MEMBER:
      const memberIndex = action.index;
      if (memberIndex < 0 || memberIndex > 3) {
        return state;
      }
      return { ...state, member: { ...state.member, select: memberIndex } };
    case RESET:
      return {
        mood: {
          select: -1,
          moods: [
            { icon: '😊‍', content: '기쁨', key: 'joy' },
            { icon: '😆', content: '즐거움', key: 'pleasure' },
            { icon: '😢', content: '슬픔', key: 'sadness' },
            { icon: '😔', content: '우울', key: 'gloomy' },
            { icon: '😡', content: '분노', key: 'anger' },
          ],
        },
        member: {
          select: -1,
          members: [
            { icon: '🙋‍♀️', content: '혼자' },
            { icon: '👨‍👩‍👧‍👦', content: '가족' },
            { icon: '👯', content: '친구' },
            { icon: '👫', content: '연인' },
          ],
        },
      };
    default:
      return state;
  }
}
