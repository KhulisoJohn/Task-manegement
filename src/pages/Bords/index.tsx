import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Columns } from '../../types';
import { useState } from 'react';
import { Board } from '../../data/board';
import { IoAddOutline } from 'react-icons/io5';

const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board);

  return (
    <DragDropContext onDragEnd={(result: any) => console.log(result)}>
      <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
        {Object.entries(columns).map(([columnId, column]: any) => (
          <div key={columnId} className="w-full flex flex-col">
            {/* Droppable Column Area */}
            <Droppable droppableId={columnId}>
              {(provided): any => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col md:w-[240px] w-[240px] gap-3 items-center py-5"
                >
                  {/* Column Name */}
                  <div className="flex items-center justify-center gap-1 py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                    {column.name}
                  </div>

                  {/* Add Task Button */}
                  <div className="flex items-center justify-center gap-1 py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px] cursor-pointer">
                    <IoAddOutline color={'#555'} />
                    Add Task
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Boards;
