import api from '..';
/**
{
  "isSuccess": true,
  "code": "COMMON200",
  "message": "성공입니다.",
  "result": [{...}, {...}]
}
*/
export const normalRecommendApi = async ({
  emotion,
  withWhom,
  contentType,
}) => {
  const { data } = await api.get(
    `contents/recommend/daily?emotion=${emotion}&withWhom=${withWhom}&contentType=${contentType}`
  );
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};

export const specificRecommendApi = async ({ contentId, contentType }) => {
  const { data } = await api.get(
    `contents/recommend/special/${contentId}?type=${contentType}`
  );
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};

/**
 "result": [
        {
            "food": "피자",
            "emotion": "EXCITED",
            "genre": "ROMANCE",
            "commentId": 3
        },
        {
            "food": "샤브샤브",
            "emotion": "GLOOMY",
            "genre": "DRAMA",
            "commentId": 37
        },
        {
            "food": "치킨",
            "emotion": "GLOOMY",
            "genre": "ACTION",
            "commentId": 4
        },
        {
            "food": "떡볶이",
            "emotion": "ANGRY",
            "genre": "ANIMATION",
            "commentId": 27
        }
    ]
  }
 */

export const getSpecificSituations = async () => {
  // return [
  //   {
  //     sentence: 'temp',
  //     commentId: 1,
  //   },

  //   {
  //     sentence: 'temp2jj',
  //     commentId: 2,
  //   },

  //   {
  //     sentence: 'tem3jp',
  //     commentId: 3,
  //   },

  //   {
  //     sentence: 'temp4',
  //     commentId: 4,
  //   },
  // ];

  // eslint-disable-next-line
  const { data } = await api.post(`comment/make/situation`);
  if (!data.isSuccess) {
    throw new Error(data.message);
  }

  const result = data.result.map((item) => {
    let emotion;
    switch (item.emotion) {
      case 'EXCITED':
        emotion = '즐거워서';
        break;
      case 'GLAD':
        emotion = '기뻐서';
        break;
      case 'GLOOMY':
        emotion = '우울해서';
        break;
      case 'ANGRY':
        emotion = '화나서';
        break;
      case 'SAD':
        emotion = '슬퍼서';
        break;
      default:
        break;
    }
    return {
      sentence: `${emotion} ${item.food}를 먹는 중`,
      commentId: item.commentId,
    };
  });
  return result;
};
