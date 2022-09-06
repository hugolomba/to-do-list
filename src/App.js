import "./App.css";

import { useState } from "react";

import loadingGif from "./img/loading.gif";
import Task from "./components/Task";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    setTodos((prevState) => [...prevState, todo]);

    setTitle("");
    setTime("");
  };

  const handleDelete = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    todo.done = !todo.done;

    console.log(todo.done);

    setTodos(todos);

    setTodos((prevState) =>
      prevState.map((t) => (t.id === todo.id ? (t = todo) : t))
    );
  };

  if (loading) {
    return (
      <p>
        <img src={loadingGif} />
      </p>
    );
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>To Do List</h1>
      </div>
      <div className="todo-form">
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O quer você vai fazer?</label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração</label>
            <input
              type="text"
              name="time"
              placeholder="Tempo Estimado (em horas)"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              required
            ></input>
          </div>
          <input type="submit" value="Criar Tarefa" />
        </form>
      </div>
      <div className="todo-list">
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
        {todos.map((todo) => (
          <Task
            key={todo.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
