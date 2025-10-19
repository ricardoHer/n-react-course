import PropTypes from "prop-types";

function TaskItemButton({ onClick, children, task }) {
  return (
    <button
      className={`bg-slate-400 text-left text-white p-3 rounded-md w-full 
                ${task.isCompleted && "line-through"}`}
      onClick={() => onClick(task.id)}
    >
      {children}
    </button>
  );
}

TaskItemButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  task: PropTypes.object.isRequired,
};

export default TaskItemButton;
