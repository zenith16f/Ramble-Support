"use client";
import { fetchStatus } from "@/app/api/libs/data/tickets";
import { HeaderGlobalStyle as HeaderStyle } from "@/app/styles/taiwlindStyles";
import { ChangeStatusProps } from "@/interfaces/Support";
import { StatusType } from "@/types/support";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import AddSolution from "./AddSolution";

const ChangeStatusForm = ({ id, oldStatus }: ChangeStatusProps) => {
  const { register, handleSubmit } = useForm();

  const { data: session } = useSession();

  const [status, setStatus] = useState<StatusType[] | null | undefined>([]);

  const router = useRouter();
  useEffect(() => {
    const getStatus = async () => {
      const status = await fetchStatus();
      setStatus(status);
    };

    getStatus();
  });

  const onSubmit = handleSubmit(async (data) => {
    const { estado } = data;

    if (estado === "0") {
      return toast.error("Selecciona un nuevo estado", {
        duration: 2000,
      });
    }

    if (oldStatus === "resuelto") {
      return toast.error(
        "El ticket ya ha sido resuelto. No se puede cambiar su estado.",
        {
          duration: 2000,
        }
      );
    }

    if (estado === oldStatus) {
      return toast.error(
        "El estado seleccionado es igual al actual, selecciona otro.",
        {
          duration: 2000,
        }
      );
    }

    if (estado === "resuelto") {
      return toast(
        <div className="flex flex-col gap-4">
          <p>
            Para marcar el ticket como resuelto es necesario que escribas la
            descripcion de la solución.
          </p>

          <AddSolution
            id={id}
            estado={estado}
            email={session?.user?.email as string}
          />
        </div>,
        {
          important: true,
          duration: 8000,
          style: {
            width: "600px",
          },
        }
      );
    }

    const updateStatus = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado }),
      }
    );

    const updateStatusResponse = await updateStatus.json();

    if (updateStatusResponse.error) {
      return toast.error(updateStatusResponse.message, {
        duration: 2000,
      });
    }

    toast.success("El estado del ticket ha sido actualizado", {
      duration: 2000,
      onAutoClose: () => {
        router.push(`/support/asignacion/${id}`);
      },
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4"
    >
      <label
        htmlFor="estado"
        className={HeaderStyle}
      >
        Nuevo Estado
      </label>

      <select
        id="estado"
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none capitalize"
        {...register("estado", {
          required: {
            value: true,
            message: "El asunto es requerido",
          },
        })}
      >
        <option value="0">Seleccionar</option>

        {status?.map((status) => (
          <option
            key={status.id}
            value={status.tipoEstado}
          >
            {status.tipoEstado}
          </option>
        ))}
      </select>

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
