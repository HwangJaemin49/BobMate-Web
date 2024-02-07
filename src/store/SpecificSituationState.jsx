import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSpecificSituations } from '../services/FindPage/Recommend';

export const getSituation = createAsyncThunk(
  'SpecificState/GET_SITUATION',
  async () => {
    try {
      const results = await getSpecificSituations();
      return results;
    } catch (err) {}
  }
);

export const statusTypes = {
  loading: 'loading',
  success: 'success',
  failed: 'failed',
  none: 'none',
};

const initialState = {
  select: -1,
  situations: {
    status: 'none',
    data: [null, null, null, null],
    error: null,
  },
};

const slice = createSlice({
  name: 'specificState',
  initialState,
  reducers: {
    selectSituation: (state, action) => {
      const index = action.payload;
      console.log(action);
      if (index < 0 || index > 3) {
        return;
      }
      state.select = index;
    },
    reset: (state) => {
      state.select = -1;
      state.situations = {
        status: 'none',
        data: [null, null, null, null],
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSituation.pending, (state) => {
      state.situations.status = 'loading';
    });
    builder.addCase(getSituation.fulfilled, (state, { payload }) => {
      state.situations.status = 'success';
      state.situations.data = payload;
    });
    builder.addCase(getSituation.rejected, (state, action) => {
      state.situations.status = 'failed';
      state.situations.error = action.payload;
    });
  },
});
export default slice;

export const specificStateActions = slice.actions;

/**
    '비 오는 날 혼술하는 중',
    '너무 짜증나서 야식 먹는 중',
    '자취방에서 친구들과 치킨 먹는 중',
    '시험 기간 기념 떡볶이 먹는 중',
 */
