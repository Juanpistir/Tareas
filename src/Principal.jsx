import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";

function Principal() {
  return (
    <main className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen">
      <div className="container mx-auto">
        <Taskform />
        <Tasklist />
      </div>
    </main>
  );
}

export default Principal;
