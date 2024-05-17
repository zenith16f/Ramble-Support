"use client";
import { fetchStatus } from "@/app/api/libs/data/tickets";
import { ChangeStatusProps } from "@/interfaces/Support";
import { StatusType } from "@/types/support";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ChangeStatusForm = ({ id }: ChangeStatusProps) => {
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState<StatusType[] | null | undefined>([]);

  useEffect(() => {
    const getStatus = async () => {
      const status = await fetchStatus();
      setStatus(status);
    };

    getStatus();
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>Nuevo Estado</h1>
      {status?.map((s) => (
        <div key={s.id}>
          <h2>{s.tipoTicket}</h2>
        </div>
      ))}

      <section className="flex flex-row gap-5 justify-start">
        <button
          type="submit"
          className="bg-emerald-500 flex items-center justify-center hover:bg-emerald-700 hover:text-white text-black py-2 px-4 rounded duration-3 duration-300  w-1/2"
        >
          Confirmar
        </button>

        <Link
          className="bg-slate-500 flex items-center justify-center hover:bg-slate-700 hover:text-white text-black py-2 px-4 rounded duration-3 duration-300 w-1/2"
          href={`/support/asignacion/${id}`}
        >
          Cancelar
        </Link>
      </section>
    </form>
  );
};

export default ChangeStatusForm;
