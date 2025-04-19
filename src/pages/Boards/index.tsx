import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Columns } from '../../types';
import { useState } from 'react';
import { Board } from '../../data/board';
import Task from '../../Components/Task';
import { IoAddOutline } from 'react-icons/io5';
import AddModal from '../../Components/Modals/AddModal';

const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('');

  const openModal = (columnId: any) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleAddTask = (taskData: any) => {
      const newBoard = {...columns};
      newBoard[selectedColumn].items.push(taskData);
  };

  return (
    <>
     <DragDropContext onDragEnd={(result: any) => console.log(result)}>
      <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
        {Object.entries(columns).map(([columnId, column]: any) => (
          <div key={columnId} className="w-full flex flex-col">
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col md:w-[240px] w-[240px] gap-3 items-center py-5"
                >
                  <div className="flex items-center justify-center gap-1 py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                    {column.name}
                  </div>

                  {column.items.map((task: any, index: number) => (
                    <Draggable
                      key={task.id.toString()}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided: any) => (
                        <>
                         < Task provided={provided}
                          task = {task}
                         />
                        </>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <div onClick={() => openModal(columnId)} className="flex items-center justify-center gap-1 py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px] cursor-pointer">
              <IoAddOutline color={'#555'} />
              Add Task
            </div>
          </div>
        ))}
      </div>
    </DragDropContext>

    < AddModal isOpen = {modalOpen} onClose= {closeModal} setOpen={setModalOpen} handleAddTask={handleAddTask} />
    </>
   
  );
};

export default Boards;
