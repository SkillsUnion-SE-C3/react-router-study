import { useState, useEffect } from "react";
import ListTasks from "./ListTasks";
import AddTask from "./AddTask";
import PostmanAPI from "../../axios/PostmanAPI";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([]);

  // OnMount, fetch tasks
  useEffect(() => {
    PostmanAPI.get(`/owner/${props.ownerId}/task`).then((res) => {
      setTasks(res.data);
    });
  }, []);

  const addTask = (title, description) => {
    let id = 1;
    if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    }

    const newTask = {
      id,
      title,
      description,
      ownerId: props.ownerId,
    };

    setTasks(tasks.concat([newTask]));
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
