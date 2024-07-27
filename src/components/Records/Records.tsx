import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchAllCategories,
  fetchRecordsThunks,
} from '../../store/finaceThunks';
import { selectRecords } from '../../store/financeSlice';
import OneRecord from './OneRecord';

const Records = () => {
  const dispatch = useAppDispatch();
  let allRecords = useAppSelector(selectRecords);

  useEffect(() => {
    dispatch(fetchRecordsThunks());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const total = allRecords.reduce((acc, current) => acc + current.amount, 0);
  return (
    <div className="bg-white p-3">
      <div className="w-25 border border-4 text-center  p-2 mb-2">
        <p className="m-0 p-0">
          <strong>Total:</strong> {total} KGS
        </p>
      </div>
      {allRecords.map((oneRecord) => (
        <OneRecord key={oneRecord.id} record={oneRecord} />
      ))}
    </div>
  );
};

export default Records;
