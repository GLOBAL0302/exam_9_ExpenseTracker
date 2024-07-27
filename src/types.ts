export interface ICategory {
  category: string;
  title: string;
}

export interface ICategoriesState extends ICategory {
  id: string;
}
