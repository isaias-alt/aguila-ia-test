'use client'

import { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="name" className="text-lg font-bold">
          Nombre
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="border border-gray-300 rounded-lg px-5 py-4 text-lg"
        />
        <label htmlFor="email" className="text-lg font-bold">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-5 py-4 text-lg"
        />
        <label htmlFor="message" className="text-lg font-bold">
          Mensaje
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 rounded-lg px-5 py-4 text-lg"
        />
        <button className="text-xl border border-gray-300 rounded-lg px-5 py-4 hover:border-slate-400 hover:bg-slate-100 hover:bg-neutral-800/30 transition-transform duration-150 hover:scale-110">
          Enviar
        </button>
      </form>
      {submitted && (
        <p className="mt-4 text-green-500">Gracias por tu mensaje!</p>
      )}
    </div>
  );
};

export default ContactForm;