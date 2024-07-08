import { ITask } from "../../types";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { RxDragHandleHorizontal } from "react-icons/rx";

interface TaskProps extends ITask {
  editTask: (id: string, updates: Partial<ITask>) => void;
  deleteTask: (id: string) => void;
}

export const Task = ({
  id,
  title,
  description,
  editTask,
  deleteTask,
}: TaskProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const handleBlur = () => {
    const updates: Partial<ITask> = {};
    if (newTitle !== title) updates.title = newTitle;
    if (newDescription !== description) updates.description = newDescription;

    if (Object.keys(updates).length > 0) {
      editTask(id, updates);
    }
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={`m-1 max-w-sm rounded-lg overflow-hidden bg-white drop-shadow-lg flex-grow w-full  ${
          transform ? "absolute" : ""
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex flex-row items-center justify-between">
            <input
              className="w-full h-[90%] resize-none font-semibold text-lg mb-2"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onBlur={handleBlur}
            />
            <span className="cursor-grab">
              <button onClick={handleDelete}>
                <GoTrash size="1em" />
              </button>
              <RxDragHandleHorizontal
                size="1em"
                {...listeners}
                {...attributes}
              />
            </span>
          </div>

          <textarea
            className="w-full resize-none text-gray-700 text-sm font-normal"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={handleBlur}
          />
        </div>
      </div>
      {transform && (
        <div className="m-1 rounded-lg overflow-hidden bg-white drop-shadow-lg flex-grow opacity-50 w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>

            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};
