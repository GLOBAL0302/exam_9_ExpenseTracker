import { Box, Button, TextField } from '@mui/material';

import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  createNewCategory,
  updateCategoryInfo,
} from '../../store/finaceThunks';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCategories } from '../../store/financeSlice';

const CategoryEdit: React.FC = () => {
  let initialInputState = {
    category: 'income',
    title: '',
  };
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const { id } = useParams();
  const navigate = useNavigate();
  const selected = categories.find((item) => item.id === id);
  if (id && selected) {
    initialInputState = {
      category: selected.category,
      title: selected.title,
    };
  }
  const [userInputCategory, setUserInputCategory] = useState(initialInputState);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInputCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserInputCategory((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      const updatedCategory = {
        category: userInputCategory.category,
        title: userInputCategory.title,
        id,
      };
      await dispatch(updateCategoryInfo(updatedCategory));
    } else {
      await dispatch(createNewCategory(userInputCategory));
    }
    navigate('/categories');
  };

  return (
    <>
      <div className="bg-white p-3">
        <h3>{id ? 'Edit Category' : 'Create Category'}</h3>
        <Box component="form" onSubmit={onSubmit}>
          <DialogContent className="px-2">
            <div className="form-group  mb-3">
              <select
                value={userInputCategory.category}
                onChange={onChangeCategory}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="income">Income</option>
                <option value="expenses">Expense</option>
              </select>
            </div>
            <div className="form-group">
              <TextField
                value={userInputCategory.title}
                name="title"
                onChange={onChangeTitle}
                fullWidth
                id="standard-basic"
                label="title"
                variant="standard"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" type="submit">
              {id ? 'Save Changes' : 'Create'}
            </Button>
          </DialogActions>
        </Box>
      </div>
    </>
  );
};

export default CategoryEdit;
