import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import OwnerScreen from "./screens/OwnerScreen";
import TodoListScreen from "./screens/TodoListScreen";

function App() {
  // Decide which screen to display
  const [displayScreen, setDisplayScreen] = useState("owner"); // either "owner" or "todo"
  const [ownerId, setownerId] = useState(null);

  const switchScreen = (screen) => {
    setDisplayScreen(screen);
  };

  const setOwner = (id) => {
    setownerId(id);
  };

  return displayScreen === "owner" ? (
    <OwnerScreen switchScreen={switchScreen} setOwner={setOwner} />
  ) : (
    <TodoListScreen switchScreen={switchScreen} ownerId={ownerId} />
  );
}

export default App;
