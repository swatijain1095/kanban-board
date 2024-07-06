import { useState } from "react";
import Column from "./components/Column";
import { IKanbanState } from "./types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const initialState: IKanbanState = {
  tasks: {
    task1: {
      id: "task1",
      title: "task1",
      description: "this is task 1",
      columnId: "todo",
    },
    task2: {
      id: "task2",
      title: "task2",
      description: "this is task 2",
      columnId: "inProgress",
    },
    task3: {
      id: "task3",
      title: "task3",
      description: "this is task 3",
      columnId: "done",
    },
    task4: {
      id: "task4",
      title: "task4",
      description: "this is task 4",
      columnId: "inProgress",
    },
  },
  columns: [
    { id: "todo", name: "Todo" },
    { id: "inProgress", name: "In Progress" },
    { id: "done", name: "Done" },
  ],
  columnOrder: ["todo", "inProgress", "done"],
};

function App() {
  const [tasksList, setTasksList] = useState(initialState.tasks);
  const [columns, setColumns] = useState(initialState.columns);

  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
    const {
      over,
      active: { id: taskId },
    } = event;
    over &&
      setTasksList((prevState) => {
        return {
          ...prevState,
          [taskId]: {
            ...prevState[taskId],
            columnId: over.id as string,
          },
        };
      });
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row">
        {columns.map((item) => {
          return <Column {...item} key={item.id} tasks={tasksList} />;
        })}
      </div>
    </DndContext>
  );
}

export default App;
