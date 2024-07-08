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
    { id: "todo", name: "To do", color: "#136baa" },
    { id: "inProgress", name: "In Progress", color: "#efaa13" },
    { id: "done", name: "Done", color: "#13aa40" },
  ],
  columnOrder: ["todo", "inProgress", "done"],
};

function App() {
  const [tasksList, setTasksList] = useState(initialState.tasks);
  const [columns, setColumns] = useState(initialState.columns);

  function handleDragEnd(event: DragEndEvent) {
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
      <div className="flex flex-row justify-between gap-x-96">
        <h1 className="text-gray-800 text-xl md:text-3xl font-bold">
          Kanban Board
        </h1>
        <button className="flex bg-indigo-500 text-white hover:bg-indigo-600 items-center justify-center rounded-xl md:rounded-md text-xs font-bold md:text-sm md:font-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 px-3 md:px-3 md:py-1">
          Add new task
        </button>
      </div>
      <div className="flex flex-col md:flex-row lg:max-w-screen-lg">
        {columns.map((item) => {
          return <Column {...item} key={item.id} tasks={tasksList} />;
        })}
      </div>
    </DndContext>
  );
}

export default App;
