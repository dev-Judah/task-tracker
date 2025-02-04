import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getRandomColors } from "../helpers/getRandomColors";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Tag {
  title: string;
  bg: string;
  text: string;
}

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTask: (taskData: any) => void;
}

const AddModal = ({
  isOpen,
  onClose,
  setOpen,
  handleAddTask,
}: AddModalProps) => {
  const initialTaskData = {
    id: uuidv4(),
    title: "",
    description: "",
    priority: "",
    deadline: 0,
    image: "",
    alt: "",
    tags: [] as Tag[],
  };

  const [taskData, setTaskData] = useState(initialTaskData);
  const [tagTitle, setTagTitle] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          setTaskData((prev) => {
            return { ...prev, image: e.target?.result as string };
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddTag = () => {
    if (tagTitle.trim() !== "") {
      const { bg, text } = getRandomColors();
      const newTag: Tag = { title: tagTitle.trim(), bg, text };
      setTaskData({ ...taskData, tags: [...taskData.tags, newTag] });
      setTagTitle("");
    }
  };

  const closeModal = () => {
    setOpen(false);
    onClose();
    setTaskData(initialTaskData);
  };

  const handleSubmit = () => {
    handleAddTask(taskData);
    closeModal();
  };
  return (
    <div
      className={`w-screen h-screen place-items-center fixed z-50 top-0 left-0 ${
        isOpen ? "grid" : "hidden"
      } `}
    >
      <div
        className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
        onClick={closeModal}
      ></div>
      <div className="md:w-[30vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
        <input
          type="text"
          name="title"
          value={taskData.title}
          onChange={handleChange}
          placeholder="Enter task title..."
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
        />

        <input
          type="text"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          placeholder="Enter task description..."
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
        />

        <select
          name="priority"
          className="w-full h-12 px-2 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
          onChange={handleChange}
          value={taskData.priority}
        >
          <option value="">Priority</option>
          <option value="low">Low </option>
          <option value="low">Meduim </option>
          <option value="high">High </option>
        </select>

        <input
          type="text"
          name="deadline"
          value={taskData.deadline}
          onChange={handleChange}
          placeholder="Enter task deadline..."
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
        />

        <input
          type="text"
          value={tagTitle}
          onChange={(e) => setTagTitle(e.target.value)}
          placeholder="Enter tags..."
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
        />

        <button
          className="w-full rounded-md h-9 bg-slate-500 tet-amber-50 font-medium"
          onClick={handleAddTag}
        >
          Add Tag{" "}
        </button>

        <div className="w-full">
          {taskData.tags && <span>Tags:</span>}
          {taskData.tags.map((tag, i) => (
            <div
              key={i}
              className=" inline-block py-1 mx-1 px-[10px] text-[13px] font-medium rounded-md"
              style={{ backgroundColor: tag.bg, color: tag.text }}
            >
              {tag.title}
            </div>
          ))}
        </div>

        <div className="w-full flex items-center gap-4 justify-between">
          <input
            type="text"
            name="alt"
            value={taskData.alt}
            onChange={handleChange}
            placeholder="Enter image alt..."
            className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
          />

          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>
        <button
          className="w-full mt-3 rounded-md h-9 bg-orange-500 text-blue-50 font-medium"
          onClick={handleSubmit}
        ></button>
      </div>
    </div>
  );
};

export default AddModal;
