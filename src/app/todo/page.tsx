import TaskList from "@/components/TaskList";
import Link from "next/link";

export default function Todo() {
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-8">
      <div className="flex items-center justify-center gap-4">
        <Link href='/' className="font-light border border-gray-300 rounded-lg p-2 hover:border-slate-400 hover:bg-slate-100 hover:bg-neutral-800/30 transition-transform duration-150 hover:scale-110">Volver</Link>
        <h1 className="text-4xl font-bold">Lista de tareas</h1>
      </div>
      <TaskList />
    </main>
  );
}; 