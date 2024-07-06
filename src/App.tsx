import { useState } from "react";
import Column from "./components/Column";
import { IKanbanState } from "./types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Draggable } from "./components/DnD/Draggable";
import { Droppable } from "./components/DnD/Droppable";

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

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
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
