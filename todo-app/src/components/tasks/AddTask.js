import { useRef } from "react";

function AddTask(props) {
  const titleInput = useRef(null);
  const descInput = useRef(null);

  const handleAddTask = () => {
    props.addTask(titleInput.current.value, descInput.current.value);
  };
  return (
    <>
      <input type="text" placeholder="Title of Task" ref={titleInput} />
      <input type="text" placeholder="Description of task" ref={descInput} />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}

export default AddTask;
