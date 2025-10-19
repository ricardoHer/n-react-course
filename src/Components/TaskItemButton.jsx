import PropTypes from "prop-types";

function TaskItemButton(props) {
  return (
    <button
      className={`bg-slate-400 text-left text-white p-3 rounded-md w-full 
            ${props.task.isCompleted && "line-through"}
            ${props.className || ""}
            `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

TaskItemButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  task: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default TaskItemButton;
