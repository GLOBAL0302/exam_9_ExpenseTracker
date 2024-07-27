import { Box, Button, Typography } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCategories } from '../../store/financeSlice';
import { fetchAllCategories } from '../../store/finaceThunks';
import OneCategory from './OneCategory';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Box component="div" className="bg-white p-2">
      <Box className="d-flex items-center justify-between mb-3">
        <Typography variant="h4" component="h4">
          Categories
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          className="ms-auto text-black"
        >
          <NavLink to={'/categoryEdit'}>
            Add
            <PlaylistAddIcon />
          </NavLink>
        </Button>
      </Box>
      {categories.map((category) => (
        <OneCategory key={category.id} category={category} />
      ))}
    </Box>
  );
};

export default Categories;
