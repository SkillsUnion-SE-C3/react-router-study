import { useEffect, useState } from "react";
import PostmanAPI from "../../axios/PostmanAPI";

function ListTask(props) {
  const [tasks, setTasks] = useState([]);

  // on mount
  useEffect(() => {
    listTasks();
  }, []);

  const listTasks = () => {
    PostmanAPI.get(`/owner/${props.ownerId}/task`).then((res) => {
      setTasks(res.data);
    });
  };

  const RenderTasks = () => {
    if (tasks.length === 0) {
      return <div>No tasks found</div>;
    }

    return tasks.map((t) => {
      return (
        <div>
          {t.title} - {t.description}{" "}
          <button onClick={() => props.removeTask(t.id)}>Remove</button>
        </div>
      );
    });
  };

  return (
    <>
      <h3>List of tasks belonging to Owner (ID:{props.ownerId})</h3>
      <RenderTasks />
    </>
  );
}

export default ListTask;
