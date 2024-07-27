import { IRecordState } from '../../types';
import { useAppSelector } from '../../app/hooks';
import { selectCategories } from '../../store/financeSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
interface Props {
  record: IRecordState;
}
const parseISOString = (s: string) => {
  let date = new Date(s);
  return (
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    '-' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds()
  );
};

const OneRecord: React.FC<Props> = ({ record }) => {
  const oneCategory = useAppSelector(selectCategories).find(
    (item) => item.id === record.category,
  );

  return (
    <div className="border border-2 p-2 d-flex justify-content-between mb-2">
      <p>{parseISOString(record.createDate)}</p>
      <p>{oneCategory && oneCategory.title}</p>
      <p>{record.amount} KGS</p>
      <EditIcon />
      <DeleteIcon />
    </div>
  );
};

export default OneRecord;
