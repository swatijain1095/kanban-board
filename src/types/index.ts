export interface ITask {
  id: string;
  title: string;
  description: string;
  columnId: string;
}

export interface IColumn {
  id: string;
  name: string;
}

export interface IKanbanState {
  tasks: { [key: string]: ITask };
  columns: IColumn[];
  columnOrder: string[];
}
