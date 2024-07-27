import { Box, Button, TextField } from '@mui/material';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createNewCategory } from '../../store/finaceThunks';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const initialInputState = {
  category: 'income',
  title: '',
};

interface Props {
  open: boolean,
  onCloseModal: VoidFunction,
}

const CategoryModal: React.FC<Props> = ({ open, onCloseModal }) => {
  const [userInputCategory, setUserInputCategory] = useState(initialInputState);
  const dispatch = useAppDispatch();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInputCategory(prevState => ({
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


  const handleClose = () => {
    onCloseModal();
  };

  const onSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    dispatch(createNewCategory(userInputCategory))
    onCloseModal();
  }

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Create Category'}</DialogTitle>
        <Box component="form" onSubmit={onSubmit}>
        <DialogContent className="px-5">
            <div className="form-group  mb-3">
              <select onChange={onChangeCategory} className="form-horizontal">
                <option value="income">Income</option>
                <option value="expenses">Expense</option>
              </select>
            </div>
            <div className="form-group">
              <TextField
                name="title"
                onChange={onChangeTitle}
                fullWidth id="standard-basic" label="title" variant="standard" />
            </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" type="submit">Add</Button>
        </DialogActions>
      </Box>
      </Dialog>
    </>
  );
};

export default CategoryModal;