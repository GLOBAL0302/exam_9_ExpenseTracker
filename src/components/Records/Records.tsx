import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { fetchRecordsThunks } from '../../store/finaceThunks';

const Records = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecordsThunks());
  }, [dispatch]);
  return (
    <div className="bg-white p-3">
      <h4>Records</h4>

    </div>
  );
};

export default Records;