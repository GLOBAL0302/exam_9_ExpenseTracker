import { ICategoriesState} from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCategories } from './finaceThunks';

export interface financeSliceState{
  categories:ICategoriesState[]
}

const initialState: financeSliceState = {
  categories: [],
}

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers:{},
  extraReducers:(builder=>{
    builder
      .addCase(fetchAllCategories.pending, (state) => {
      })
      .addCase(fetchAllCategories.fulfilled, (state,{payload}) => {
        state.categories = payload
      })
      .addCase(fetchAllCategories.rejected, (state) => {
      })
  }),
  selectors:{
    selectCategories:(state)=> state.categories
  }
});

export const FinanceReducer = financeSlice.reducer;
export const{  } = financeSlice.actions;
export const{ selectCategories } = financeSlice.selectors;


