import { useDroppable } from "@dnd-kit/core";
import { IColumn } from "../../types";
import Task from "../Task";

export function Column({ id, name, tasks }: IColumn) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <div className="flex flex-col justify-between px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="m-2">
          {tasks.map((task) => {
            return <Task {...task} key={task.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
