import { useState } from "react";
import { Column } from "./components/column/column";
import { Column as IColumn } from "./types";

const initialState: IColumn[] = [
  {
    id: "todo",
    name: "Todo",
    tasks: [
      {
        id: 0,
        title: "task1",
        description: "this is task 1",
      },
    ],
  },
  {
    id: "inProgress",
    name: "In Progress",
    tasks: [
      {
        id: 1,
        title: "task2",
        description: "this is task 2",
      },
    ],
  },
  {
    id: "done",
    name: "Done",
    tasks: [
      {
        id: 2,
        title: "task3",
        description: "this is task 3",
      },
    ],
  },
];

function App() {
  const [columns, setColumns] = useState(initialState);
  return (
    <div>
      Kanban Board
      <Column />
    </div>
  );
}

export default App;
