import { TaskContext } from "../context/TaskContext";
import { useContext, useState } from "react";
import MyModal from "./Modal";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  const eliminarTarea = () => {
    deleteTask(task.id);
    cerrarModal(); // Cerrar el modal después de eliminar la tarea
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-md border-solid border-2 border-blue-600 shadow-lg">
        <h1 className="text-xl font-bold capitalize">{task.tarea}</h1>
        <h2>{task.descripcion}</h2>
        <button
          className="bg-red-600 rounded-md mt-2 py-1 px-2 hover:bg-red-500 font-bold "
          onClick={abrirModal}
        >
          Eliminar
        </button>
      </div>

      <MyModal isOpen={mostrarModal} onClose={cerrarModal} eliminarTarea={eliminarTarea} />
    </div>
  );
}

export default TaskCard;
