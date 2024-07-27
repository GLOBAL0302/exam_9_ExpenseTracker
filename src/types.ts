export interface ICategory {
  category: string;
  title: string;
}

export interface ICategoriesState extends ICategory {
  id: string;
}

export interface IRecordState {
  amount: number;
  category: string;
  createDate: string;
}

export interface IRecordsState extends IRecordState {
  id:string
}