import { Box, Button, TextField, Typography } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const Categories = () => {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box component="div" className="bg-white p-2">
      <Box className="d-flex items-center justify-between">
        <Typography variant="h4" component="h4">
          Categories
        </Typography>
        <Button
          onClick={handleClickOpen}
          variant="contained" color="inherit" className="ms-auto text-black">
          Add<PlaylistAddIcon/>
        </Button>
      </Box>
      {open && (<>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          className="text-center p-5"
        >
            <DialogTitle>{"Create Category"}</DialogTitle>
            <DialogContent className="px-5">
              <div className="form-group  mb-3">
                <select className="form-horizontal">
                  <option selected>Select Category</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div className="form-group">
                <TextField fullWidth id="standard-basic" label="title" variant="standard" />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
        </Dialog>
      </>)}
    </Box>
  );
};

export default Categories;