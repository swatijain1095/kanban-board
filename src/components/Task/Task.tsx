import { ITask } from "../../types";
import { useDraggable } from "@dnd-kit/core";

export const Task = ({ id, title, description }: ITask) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 100px)`,
      }
    : undefined;

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={`max-w-sm rounded overflow-hidden shadow-lg ${
          transform ? "absolute" : ""
        }`}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
      {transform && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg opacity-50">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};
