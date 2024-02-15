import makeAxiosInstance from '..';

export const normalRecommendApi = async ({
  emotion,
  withWhom,
  contentType,
}) => {
  const { data } = await makeAxiosInstance().get(
    `contents/recommend/daily?emotion=${emotion}&withWhom=${withWhom}&contentType=${contentType}`
  );
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};

export const specificRecommendApi = async ({ contentId, contentType }) => {
  const { data } = await makeAxiosInstance().get(
    `contents/recommend/special/${contentId}?type=${contentType}`
  );
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};

export const getSpecificSituations = async () => {
  const { data } = await makeAxiosInstance().post(`comment/make/situation`);
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
