import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function AddTask({ onAddedTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        placeholder={"Task Title"}
        value={taskTitle}
        onChange={(events) => setTaskTitle(events.target.value)}
      />
      <Input
        placeholder="Task description"
        value={taskDescription}
        onChange={(events) => setTaskDescription(events.target.value)}
      />
      <Button
        onClick={() => {
          if (!taskTitle.trim() || !taskDescription.trim()) {
            alert("Enter the task title and task description");
            return;
          }
          onAddedTask(taskTitle, taskDescription);
          setTaskTitle("");
          setTaskDescription("");
        }}
        className="rounded-md bg-slate-500 text-white px-4 py-2 font-medium"
      >
        Add Task
      </Button>
    </div>
  );
}

AddTask.propTypes = {
  onAddedTask: PropTypes.func,
};

export default AddTask;
