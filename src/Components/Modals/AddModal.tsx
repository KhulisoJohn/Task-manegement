
import {v4 as uuidv4} from "uuid";
import { getRandomColor } from "../../helpers/getRandomColors";

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


const AddModal = ({isOpen, isOpen, setOpen, handleAddTask}: AddModalProps) => {
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
        const {name, value} = e.target;
        setTaskData({...taskData, [name]: value});
    };

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (e.target) {
                    setTaskData({...taskData, image: e.target.result as string});
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleAddTag = () => {
        if (tagTitle.trim() !== "") {
            const { bg, text} = getRandomColor();
            const newTag: Tag = { title: tagTitle.trim(), bg, text};
            setTaskData({...taskData, tags: [...taskData.tags, newTag]});
            setTagTitle("";)
        }
    };

    const closeModal = () => {
        setOpen(false);
        onclose();
        setTaskData(initialTaskData);
    };

    const handleSubmit = () => {
        handleAddTask(taskData);
        closeModal()
    }
  return (
    <div>AddModal</div>
  )
}

export default AddModal