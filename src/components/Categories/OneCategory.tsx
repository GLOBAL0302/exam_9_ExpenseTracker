import { ICategoriesState } from '../../types';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Typography } from '@mui/material';

import { useAppDispatch } from '../../app/hooks';
import {
  deleteOneCategory,
  fetchAllCategories,
} from '../../store/finaceThunks';
import { NavLink } from 'react-router-dom';

interface Props {
  category: ICategoriesState;
}

const OneCategory: React.FC<Props> = ({ category }) => {
  const dispatch = useAppDispatch();

  const deleteCategory = async () => {
    await dispatch(deleteOneCategory(category.id));
    await dispatch(fetchAllCategories());
  };

  return (
    <div className="p-2 border border-1 d-flex align-items-center">
      <Typography component="p" variant="h5">
        {category.title}
      </Typography>
      <Typography
        className={`ms-auto ${category.category === 'income' ? 'text-success' : 'text-danger'}`}
        component="p"
        variant="body1"
      >
        {category.category}
      </Typography>
      <div className="d-flex gap-3 ms-2">
        <NavLink to={`/categories/${category.id}`}>
          <BorderColorIcon />
        </NavLink>
        <DeleteOutlineIcon color="error" onClick={() => deleteCategory()} />
      </div>
    </div>
  );
};

export default OneCategory;
