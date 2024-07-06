import { useState } from "react";
import Column from "./components/Column";
import { IColumn } from "./types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Draggable } from "./components/DnD/Draggable";
import { Droppable } from "./components/DnD/Droppable";

const initialState: IColumn[] = [
  {
    id: "todo",
    name: "Todo",
    tasks: [
      {
        id: "task1",
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
        id: "task2",
        title: "task2",
        description: "this is task 2",
      },
      {
        id: "task4",
        title: "task4",
        description: "this is task 4",
      },
    ],
  },
  {
    id: "done",
    name: "Done",
    tasks: [
      {
        id: "task3",
        title: "task3",
        description: "this is task 3",
      },
    ],
  },
];

function App() {
  const [columns, setColumns] = useState(initialState);

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row">
        {columns.map((item) => {
          return <Column {...item} key={item.id} />;
        })}
      </div>
    </DndContext>
  );
}

export default App;
