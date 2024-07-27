import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { ICategoriesState, ICategory } from '../types';
import { RootState } from '../app/store';

export const createNewCategory = createAsyncThunk<void, ICategory, {state:RootState}>(
  "createNewCategory",
  async (category)=>{
    await axiosApi.post("/categories.json", category)
  }
)

export const fetchAllCategories = createAsyncThunk<ICategoriesState[], void, {state:RootState}>(
  "fetchAllCategories",
  async()=>{
    const {data} = await axiosApi.get("/categories.json");
    if(data){
      return Object.keys(data).map((categoryId) => ({
        id: categoryId,
        ...data[categoryId],
      }));
    }
    return [];
  }
)