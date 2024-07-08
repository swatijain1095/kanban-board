import { ITask } from "../../types";
import { useDraggable } from "@dnd-kit/core";

export const Task = ({ id, title, description }: ITask) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={`m-1 max-w-sm rounded-lg overflow-hidden bg-white drop-shadow-lg flex-grow w-full ${
          transform ? "absolute" : ""
        }`}
      >
        <div className="px-6 py-4">
          <div className="font-semibold text-lg mb-2">{title}</div>
          <p className="text-gray-700 text-sm font-normal">{description}</p>
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
