import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function Taskform() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { createTask } = useContext(TaskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto shadow-lg">
      <form
        className="p-10 border-solid border-2 border-pink-300 bg-pink-700 mb-4 rounded-lg flex flex-col items-center"
        onSubmit={HandleSubmit}
      >
        <h1 className="text-2xl font-extralight text-white mb-10 underline underline-offset-8 text-center ">📝 Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          className="bg-slate-300 mb-4 p-3 w-full rounded-lg"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe tu descripción"
          className="bg-slate-300 mb-4 p-3 w-full rounded-lg"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />
        <button className="bg-indigo-500 py-1 px-3 text-white font-bold rounded-lg w-28">Crear</button>
      </form>
    </div>
  );
}

export default Taskform;
