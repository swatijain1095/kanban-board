export interface ITask {
  id: string;
  title: string;
  description: string;
}

export interface IColumn {
  id: string;
  name: string;
  tasks: ITask[];
}
