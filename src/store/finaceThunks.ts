import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { ICategoriesState, ICategory, IRecordsState, IRecordState } from '../types';
import { RootState } from '../app/store';

export const createNewCategory = createAsyncThunk<
  void,
  ICategory,
  { state: RootState }
>('createNewCategory', async (category) => {
  await axiosApi.post('/categories.json', category);
});

export const fetchAllCategories = createAsyncThunk<
  ICategoriesState[],
  void,
  { state: RootState }
>('fetchAllCategories', async () => {
  const { data } = await axiosApi.get('/categories.json');
  if (data) {
    return Object.keys(data).map((categoryId) => ({
      id: categoryId,
      ...data[categoryId],
    }));
  }
  return [];
});

export const deleteOneCategory = createAsyncThunk<
  void,
  string,
  { state: RootState }
>('deleteOneCategory', async (id) => {
  await axiosApi.delete(`/categories/${id}.json`);
});

export const updateCategoryInfo = createAsyncThunk<
  void,
  ICategoriesState,
  { state: RootState }
>('updateCategoryInfo', async (category) => {
  const UpdatedCategory = {
    title: category.title,
    category: category.category,
  };
  console.log(category);
  await axiosApi.put(`/categories/${category.id}.json`, UpdatedCategory);
});

export const fetchRecordsThunks = createAsyncThunk<IRecordsState[], void, {state:RootState}>(
  "fetchRecordsThunks",
  async()=>{
    const {data} = await axiosApi.get("/records.json");
    if(data){
      return Object.keys(data).map((recordId)=>({
        recordId,
        ...data[recordId]
      }));
    }
    return []
  }
)

export const addRecordThunks = createAsyncThunk<
  void,
  IRecordState,
  { state: RootState }
>('addRecordThunk', async (record) => {
  await axiosApi.post('/records.json', record);
});
