import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <h1>Todo App</h1>
      <Input input={input} setInput={setInput} />
      <Button
        input={input}
        tasks={tasks}
        setTasks={setTasks}
        setInput={setInput}
      />
      <ul>
        {tasks.map((t, i) => (
          <li
            key={i}
            style={{ textDecoration: t.done ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => {
                const updatedTasks = tasks.map((t, index) =>
                  index === i ? { ...t, done: !t.done } : t,
                );
                setTasks(updatedTasks);
              }}
            />
            {t.text}
            <button
              className="delete-btn"
              onClick={() => {
                const updatedTasks = tasks.filter((_, index) => index !== i);
                setTasks(updatedTasks);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Input({ input, setInput }) {
  return (
    <div>
      <input
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
}

function Button({ input, tasks, setTasks, setInput }) {
  function handleClick() {
    const newTasks = [...tasks, { text: input, done: false }];
    setTasks(newTasks);
    setInput("");
  }

  return (
    <div>
      <button className="add-btn" onClick={handleClick}>
        enter
      </button>
    </div>
  );
}

export default App;
