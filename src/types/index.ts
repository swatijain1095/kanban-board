export type Task = {
  id: number;
  title: string;
  description: string;
};

export type Column = {
  id: string;
  name: string;
  tasks: Task[];
};
