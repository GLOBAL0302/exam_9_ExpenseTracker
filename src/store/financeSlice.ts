import { ICategoriesState, IRecordsState } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCategories, fetchRecordsThunks } from './finaceThunks';

export interface financeSliceState {
  categories: ICategoriesState[];
  records: IRecordsState[];
  categoryLoading: boolean;
}

const initialState: financeSliceState = {
  categories: [],
  records: [],
  categoryLoading: false,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.categoryLoading = true;
      });

    builder
      .addCase(fetchRecordsThunks.pending, (state) => {})
      .addCase(fetchRecordsThunks.fulfilled, (state, { payload }) => {
        state.records = payload;
      });
  },
  selectors: {
    selectCategories: (state) => state.categories,
    selectRecords: (state) => state.records,
  },
});

export const FinanceReducer = financeSlice.reducer;
export const {} = financeSlice.actions;
export const { selectCategories, selectRecords } = financeSlice.selectors;
