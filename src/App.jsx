import { useEffect, useState } from "react";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Title from "./Components/Title.jsx";

function App() {
  // State

  // State é uma variável, que quando é atualizado, atualiza a tela, o componente
  // faz com que o componente setja reenderizado
  // vc usa quando vc quer uma resposta a interação do usuário
  //const [message, setMessage] = useState("Ola Mundo!");

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskClicked(id) {
    setTasks(
      tasks.map((x) => (x.id == id ? { ...x, isCompleted: !x.isCompleted } : x))
    );
  }

  function onTrashTask(id) {
    setTasks(tasks.filter((x) => x.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // const fetchData = async () => {
    //   // Call the api to json placeholder
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     { method: "GET" },
    //     {
    //       Headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer token",
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   setTasks(
    //     data.map((item) => ({
    //       id: item.id,
    //       title: item.title,
    //       description: "This is a placeholder description",
    //       isCompleted: item.completed,
    //     }))
    //   );
    // };
    // take the return
    // chamando uma api
    // fetchData();
    // set the state
    console.log("Componente montado");
  }, []);

  function onAddedTask(title, description) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description,
        title,
        isCompleted: false,
      },
    ]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
        <AddTask onAddedTask={onAddedTask} />
        <Tasks
          tasks={tasks}
          onTaskClicked={onTaskClicked}
          onTrashTask={onTrashTask}
        />
      </div>
    </div>
  );
}

export default App;
