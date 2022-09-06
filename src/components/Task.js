import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const Task = ({ todo, handleDelete, handleEdit }) => {
  console.log(todo);
  return (
    <div className="task">
      <div className="todo" key={todo.id}>
        <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
        <p>Duração: {todo.time}</p>
        <div className="actions">
          <span onClick={() => handleEdit(todo)}>
            {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
          </span>
          <BsTrash onClick={() => handleDelete(todo.id)} />
        </div>
      </div>
    </div>
  );
};

export default Task;
