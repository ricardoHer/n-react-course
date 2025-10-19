import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";
import SmallButton from "./SmallButton.jsx";
import TaskItemButton from "./TaskItemButton.jsx";

function TaskItem({ task, onTaskClicked, goToSeeDetails, onDeleteTask }) {
  return (
    <li className="flex gap-2" key={task.id}>
      <TaskItemButton
        onClick={() => onTaskClicked(task.id)}
        task={task}
        className="flex items-center gap-2 flex-1"
      >
        {task.isCompleted ? <CheckIcon /> : null}
        {task.title}
      </TaskItemButton>

      <SmallButton
        onClick={() => goToSeeDetails(task)}
        className="bg-slate-400 rounded-md p-2 text-white"
      >
        <ChevronRightIcon />
      </SmallButton>
      <SmallButton
        onClick={() => onDeleteTask(task.id)}
        className="bg-slate-400 rounded-md p-2 text-white"
      >
        <TrashIcon />
      </SmallButton>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onTaskClicked: PropTypes.func,
  onDeleteTask: PropTypes.func,
  goToSeeDetails: PropTypes.func,
};

export default TaskItem;
