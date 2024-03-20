/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Columns } from "../../types/types";
import { Board } from "../../data/board";
import { AddOutline } from "react-ionicons";
import Task from "../../components/Task";
import AddModal from "../../components/AddModal";
import { onDragEnd } from "../../helpers/onDragEnd";
const Boards = () => {
  //   const [columns, setColumns] = useState<Columns>(Board);
  //   const [modalOpen, setModalOpen] = useState(false);
  //   const [selectedColumn, setSelectedColumn] = useState("");

  //   const openModal = (column: any) => {
  //     setSelectedColumn(column.id);
  //     setModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setModalOpen(false);
  //   };

  //   const handleAddTask = (taskData: any) => {
  //     const newBoard = { ...columns };
  //     newBoard[selectedColumn].items.push(taskData);
  //   };

  //   return (
  //     <>
  //       <DragDropContext
  //         onDragEnd={(result) => {
  //           onDragEnd(result, columns, setColumns);
  //         }}
  //       >
  //         <div className="w-full flex items-start justify-between  pb-5 md:gap-0 gap-5">
  //           {Object.entries(columns).map(([columnId, column]: any) => {
  //             return (
  //               <div key={columnId} className="w-full flex flex-col">
  //                 <Droppable droppableId={columnId} key={columnId}>
  //                   {(provided: any) => (
  //                     <div
  //                       ref={provided.innerRef}
  //                       {...provided.droppableProps}
  //                       className="flex flex-col md:w-[230px] w-[250px] gap-2 items-center py-5"
  //                     >
  //                       <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
  //                         {column.name}
  //                       </div>
  //                       {column.items.map((task: any, index: any) => {
  //                         <Draggable
  //                           key={task.id.toString()}
  //                           draggableId={task.id.toString()}
  //                           index={index}
  //                         >
  //                           {(provided: any) => {
  //                             return (
  //                               <>
  //                                 <Task provided={provided} task={task} />
  //                               </>
  //                             );
  //                           }}
  //                         </Draggable>;
  //                       })}
  //                       {provided.placeholder}
  //                     </div>
  //                   )}
  //                 </Droppable>
  //                 <div
  //                   onClick={() => openModal(columnId)}
  //                   className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-gray-300 rounded-lg shadow-sm text-[#555] font-medium text-[15px] "
  //                 >
  //                   <AddOutline color={"#555"} />
  //                   Add Task
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </DragDropContext>

  //       <AddModal
  //         isOpen={modalOpen}
  //         onClose={closeModal}
  //         setOpen={setModalOpen}
  //         handleAddTask={handleAddTask}
  //       />
  //     </>
  //   );
  // };

  const [columns, setColumns] = useState<Columns>(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");
  // const [emptyTask, setEmptyTask] = useState(true);

  const openModal = (columnId: any) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };

  const handleDeleteTask = (id: any, name: string) => {
    if (name === "To Do") {
      const container = "todo";
      let colItems = columns[container].items;
      colItems = colItems.filter((item: any) => item.id !== id);
      columns[container] = { ...columns[container], items: colItems };
      setColumns({ ...columns });
      console.log(colItems);
    }

    if (name === "Doing") {
      const container = "doing";
      let colItems = columns[container].items;
      colItems = colItems.filter((item: any) => item.id !== id);
      columns[container] = { ...columns[container], items: colItems };
      setColumns({ ...columns });
      console.log(colItems);
    }

    if (name === "Done") {
      const container = "done";
      let colItems = columns[container].items;
      colItems = colItems.filter((item: any) => item.id !== id);
      columns[container] = { ...columns[container], items: colItems };
      setColumns({ ...columns });
      console.log(colItems);
    }

    // console.log(id, name);
    // // if (!window.confirm(`Are you sure you want to delete this "${name}"?`)) {
    // //   return true;
    // // }
    // let colItems = columns[name].items;
    // colItems = colItems.filter((item: any) => item.id !== id);
    // console.log(colItems);
    // columns[name] = { ...columns[name], items: colItems };
    // setColumns({ ...columns });
    // console.log("done");
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}
      >
        <div className=" w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div className="w-full flex flex-col gap-0" key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                  >
                    <div className="flex border items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                      {column.name}
                    </div>
                    {column.items.map((task: any, index: any) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided: any) => (
                          <>
                            <Task
                              handleDeleteTask={handleDeleteTask}
                              provided={provided}
                              task={task}
                              name={column.name}
                            />
                          </>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnId)}
                className="flex border cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
              >
                <AddOutline color={"#555"} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      {/* {emptyTask && (
        <div className="w-full opacity-40 flex-col flex justify-center h-4/6 items-center">
          <FileTrayStackedOutline
            color="#999"
            width={"250px"}
            height={"250px"}
          />
          <p className="">You have No Outstanding Tasks.</p>
        </div>
      )} */}

      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Boards;
