import makeAxiosInstance from '.';

export const checkToken = async () => {
  try {
    const { data } = await makeAxiosInstance().get(`members/edit`);
    if (!data.isSuccess) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
};
