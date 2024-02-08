import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSpecificSituations } from '../services/FindPage/Recommend';

export const getSituation = createAsyncThunk(
  'SpecificState/GET_SITUATION',
  async (_dummy, { rejectWithValue }) => {
    try {
      const results = await getSpecificSituations();
      return results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
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
      state.situations.status = statusTypes.loading;
    });
    builder.addCase(getSituation.fulfilled, (state, { payload }) => {
      state.situations.status = statusTypes.success;
      state.situations.data = payload;
    });
    builder.addCase(getSituation.rejected, (state, action) => {
      state.situations.status = statusTypes.failed;
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
