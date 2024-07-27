import { Box, Button, Typography } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CategoryModal from './CategoryModal';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCategories } from '../../store/financeSlice';
import { fetchAllCategories } from '../../store/finaceThunks';
import OneCategory from './OneCategory';

const Categories = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Box component="div" className="bg-white p-2">
      {open && (
        <>
          <CategoryModal open={open} onCloseModal={() => setOpen(false)} />
        </>
      )}
      <Box className="d-flex items-center justify-between mb-3">
        <Typography variant="h4" component="h4">
          Categories
        </Typography>
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          color="inherit"
          className="ms-auto text-black"
        >
          Add
          <PlaylistAddIcon />
        </Button>
      </Box>
      {categories.map((category) => (
        <OneCategory key={category.id} category={category} />
      ))}
    </Box>
  );
};

export default Categories;
