import { IoTimeOutline } from 'react-icons/io5';
import {TaskT} from '../../types';

interface taskProps {
  task: TaskT;
  provided: any;
}

const Task = ({ task, provided}: taskProps) => {
  const {title, description, priority, deadline, image, alt, tags} = task;
  return (
    <div
    ref = { provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    className = "w-full cursor-grab bg-white flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl py-4"
    >
      {image && alt && (
        <img src={image} 
        alt={alt} 
        className="w-full h-auto rounded-md"
         />
      )}
      <div className='flex items-center gap-2'>
        {tags.map((tag) => (
          <span
          key = {tag.title}
          className='px-[10px] py-[2px] text-[13px] font-medium rounded-md'
          >
            {tag.title}
          </span>
        ))}
      </div>
        <div className='w-full flex items-start flex-col'>
          <span className='text-[15.5px] font-medium text-[#555]'>{title}</span>
          <span className='text-[13.5px] text-gray-500'>{description}</span>
        </div>
        <div className='w-full border border-dashed'></div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <IoTimeOutline
            color={'#666'}
            width={"19px"}
            height={"19px"}
            />
            <span className='text-[13px] text-gray-500'>{deadline} mins</span>
            </div>
            <div className= {`w-[60px] rounded-full h-[5px] ${
              priority === 'high' 
              ? 'bg-red-500' 
              : priority === 'medium' 
              ? 'bg-yellow-500'
              : 'bg-green-500'
              }`}
              ></div>
        </div>
    </div>
    
  )
};

export default Task