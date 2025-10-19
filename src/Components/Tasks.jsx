import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import TaskItem from "./TaskItem";
import NoTaskCard from "./NoTaskCard";

function Tasks(props) {
  const { tasks, onTaskClicked, onTrashTask } = props;
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task-detail?${query.toString()}`);
  }

  return (
    <div>
      {tasks?.length === 0 ? (
        <NoTaskCard />
      ) : (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          {props?.tasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              goToSeeDetails={onSeeDetailsClick}
              onTaskClicked={onTaskClicked}
              onDeleteTask={onTrashTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onTaskClicked: PropTypes.func,
  onTrashTask: PropTypes.func,
};

export default Tasks;
