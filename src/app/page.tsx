import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center gap-8">
      <Link href="/contact" className="text-xl border border-gray-300 rounded-lg px-5 py-4 hover:border-slate-400 hover:bg-slate-100 hover:bg-neutral-800/30 transition-transform duration-150 hover:scale-110">
        Formulario de contacto
      </Link>
      <Link href="/todo" className="text-xl border border-gray-300 rounded-lg px-5 py-4 hover:border-slate-400 hover:bg-slate-100 hover:bg-neutral-800/30 transition-transform duration-150 hover:scale-110">
        Lista de tareas
      </Link>
      <Link href="/users" className="text-xl border border-gray-300 rounded-lg px-5 py-4 hover:border-slate-400 hover:bg-slate-100 hover:bg-neutral-800/30 transition-transform duration-150 hover:scale-110">
        Listado de usuarios
      </Link>
    </main>
  );
}
