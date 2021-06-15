import TasksContainer from "../components/tasks/TasksContainer";

function TodoListScreen(props) {
  return (
    <>
      <button onClick={() => props.switchScreen("owner")}>
        Back to Owner Screen
      </button>
      <TasksContainer ownerId={props.ownerId} />
    </>
  );
}

export default TodoListScreen;
