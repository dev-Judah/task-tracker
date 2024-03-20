/* eslint-disable @typescript-eslint/no-explicit-any */
import { TimeOutline, TrashBinOutline } from "react-ionicons";
import { TaskT } from "../types/types";

interface TaskProps {
  task: TaskT;
  provided: any;
  handleDeleteTask: (id: string, name: string) => void;
  name: string;
}
const Task = ({ name, task, provided, handleDeleteTask }: TaskProps) => {
  const { id, title, description, priority, deadline, image, alt, tags } = task;
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="w-full border  cursor-grab bg-slate-100 flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
    >
      {image && alt && (
        <img src={image} alt={alt} className="w-full h-[170px] rounded-lg" />
      )}
      <div className="flex items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag.title}
            className="px-[10px] py-[5px] text-[13px] font-medium rounded-md"
            style={{ backgroundColor: `${tag.bg}`, color: `${tag.text}` }}
          >
            {tag.title}
          </span>
        ))}
      </div>
      <div className="w-full flex items-start flex-col">
        <span className=" text-[15.5px] text-[#555] font-meduim">{title}</span>
        <span className=" text-[13.5px] text-gray-500">{description}</span>
      </div>
      <div className="w-full border border-dashed"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <TimeOutline color="#666" width={"19px"} height={"19px"} />
          <span className="text-[13px] text-gray-700 ">{deadline} mins</span>
        </div>
        <div
          className={`w-[60px] rounded-full h-[5px] ${
            priority === "high"
              ? "bg-red-500"
              : priority === "meduim"
              ? "bg-orange-500"
              : "bg-blue-500"
          }`}
        ></div>
        <div className="cursor-pointer">
          <TrashBinOutline
            onClick={() => {
              handleDeleteTask(id, name);
            }}
            color={
              priority === "high"
                ? "red"
                : priority === "meduim"
                ? "yellow"
                : "blue"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
