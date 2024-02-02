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
  // 해당 api가 아닌 듯 하지만, 일단 임의로 연결해두었습니다
  const { data } = await api.get(
    // `contents/recommend/daily?emotion=${emotion}&withWhom=${withWhom}&contentType=${contentType}`
    'contents/top3?section=0'
  );
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.result;
};
