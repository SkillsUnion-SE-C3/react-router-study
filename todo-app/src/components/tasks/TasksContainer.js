import { useState, useEffect } from "react";
import ListTasks from "./ListTasks";
import AddTask from "./AddTask";
import PostmanAPI from "../../axios/PostmanAPI";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([]);

  // OnMount, fetch tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  function fetchTasks() {
    PostmanAPI.get(`/owner/${props.ownerId}/task`).then((res) => {
      console.log("fetchTasks", res.data);
      setTasks(res.data);
    });
  }

  const addTask = (title, description) => {
    PostmanAPI.post(`/owner/${props.ownerId}/task`, {
      title,
      description,
    }).then((res) => {
      fetchTasks();
    });
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <ListTasks
        tasks={tasks}
        ownerId={props.ownerId}
        removeTask={removeTask}
      />
      <hr />
      <AddTask addTask={addTask} />
    </>
  );
}

export default TaskContainer;
