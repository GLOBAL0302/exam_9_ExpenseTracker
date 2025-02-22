import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCategories } from '../../store/financeSlice';
import { addRecordThunks, fetchAllCategories } from '../../store/finaceThunks';
import { IRecordState } from '../../types';

const initialState: IRecordState = {
  amount: 0,
  category: '',
  createDate: '',
};

const AddRecord = () => {
  const dispatch = useAppDispatch();
  const [record, setRecord] = useState(initialState);
  const [selectedCategory, setSelectedCategory] = useState('income');
  const allCategories = useAppSelector(selectCategories).filter(
    (item) => item.category === selectedCategory,
  );

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const onChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectingCategory = allCategories.find(
      (item) => item.title == e.target.value,
    );
    if (selectingCategory) {
      setRecord((prevState) => ({
        ...prevState,
        category: selectingCategory.id,
      }));
      console.log(selectingCategory.id);
    }
  };

  const onChangeMoneyData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecord((prevState) => ({
      ...prevState,
      amount: parseFloat(e.target.value),
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    dispatch(addRecordThunks({ ...record, createDate: now.toISOString() }));
  };

  return (
    <Box component="div" className="bg-white p-4">
      <Box
        onSubmit={onSubmit}
        component="form"
        className="d-flex gap-3 flex-column"
      >
        <div className="form-group">
          <select
            onChange={onChangeType}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="income">Income</option>
            <option value="expenses">Expense</option>
          </select>
        </div>
        <div className="form-group">
          <select
            onChange={onChangeCategory}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="">Select title</option>
            {allCategories &&
              allCategories.map((item: any) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <div className="input-group">
            <input
              onChange={onChangeMoneyData}
              type="number"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <span className="input-group-text">KGS</span>
          </div>
        </div>
        <div className="d-flex gap-3">
          <Button
            className="ms-auto"
            variant="outlined"
            type="submit"
            color="error"
          >
            Cancel
          </Button>
          <Button variant="outlined" type="submit" color="success">
            Save
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default AddRecord;
