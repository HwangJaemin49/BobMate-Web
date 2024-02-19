import gladImage from '../assets/images/FindPage/glad-image.png';
import excitedImage from '../assets/images/FindPage/excited-image.png';
import sadImage from '../assets/images/FindPage/sad-image.png';
import gloomyImage from '../assets/images/FindPage/gloomy-image.png';
import angryImage from '../assets/images/FindPage/angry-image.png';

import aloneImage from '../assets/images/FindPage/alone-image.png';
import familyImage from '../assets/images/FindPage/family-image.png';
import friendImage from '../assets/images/FindPage/friend-image.png';
import loverImage from '../assets/images/FindPage/lover-image.png';

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
      { icon: gladImage, content: '기쁨', key: 'GLAD' },
      { icon: excitedImage, content: '즐거움', key: 'EXCITED' },
      { icon: sadImage, content: '슬픔', key: 'SAD' },
      { icon: gloomyImage, content: '우울', key: 'GLOOMY' },
      { icon: angryImage, content: '분노', key: 'ANGRY' },
    ],
  },
  member: {
    select: -1,
    members: [
      { icon: aloneImage, content: '혼자', key: 'ALONE' },
      { icon: familyImage, content: '가족', key: 'FAMILY' },
      { icon: friendImage, content: '친구', key: 'FRIEND' },
      { icon: loverImage, content: '연인', key: 'COUPLE' },
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
            { icon: gladImage, content: '기쁨', key: 'GLAD' },
            { icon: excitedImage, content: '즐거움', key: 'EXCITED' },
            { icon: sadImage, content: '슬픔', key: 'SAD' },
            { icon: gloomyImage, content: '우울', key: 'GLOOMY' },
            { icon: angryImage, content: '분노', key: 'ANGRY' },
          ],
        },
        member: {
          select: -1,
          members: [
            { icon: aloneImage, content: '혼자', key: 'ALONE' },
            { icon: familyImage, content: '가족', key: 'FAMILY' },
            { icon: friendImage, content: '친구', key: 'FRIEND' },
            { icon: loverImage, content: '연인', key: 'COUPLE' },
          ],
        },
      };
    default:
      return state;
  }
}
