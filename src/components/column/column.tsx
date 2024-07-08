import { useDroppable } from "@dnd-kit/core";
import { IColumn, ITask } from "../../types";
import Task from "../Task";

interface ColumnProps extends IColumn {
  tasks: ITask;
  editTask: (id: string, updates: Partial<ITask>) => void;
  deleteTask: (id: string) => void;
}

export function Column({
  id,
  name,
  color,
  tasks,
  editTask,
  deleteTask,
}: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className="w-full mx-6 flex flex-col rounded-xl m-1 overflow-hidden bg-gray-200"
    >
      <div className="flex flex-col justify-between px-6 py-4">
        <div className="flex flex-row justify-between items-center md:shrink-0 ">
          <div className="font-bold text-xl mb-2 text-slate-800">{name}</div>
        </div>
        <hr
          style={{
            borderColor: color,
            borderWidth: "2px",
            filter:
              "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
          }}
        />

        <div className="m-2 flex flex-col items-center">
          {Object.values(tasks)
            .filter((task) => task.columnId === id)
            .map((task) => (
              <Task
                {...task}
                key={task.id}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
