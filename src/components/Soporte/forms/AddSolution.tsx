"use client";
import { fetchTicket } from "@/app/api/libs/data/tickets";
import { getUserByMail } from "@/app/api/libs/data/user";
import { AddSolutionProps } from "@/interfaces/Support";
import { TicketType, UserType } from "@/types/support";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddSolution = ({ id, estado, email }: AddSolutionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const descripcion = /^[a-zA-Z0-9\s\W\?]{10,}$/;

  const onSubmit = handleSubmit(async (data) => {
    const { descripcionSolucion } = data;

    if (!descripcion.test(descripcionSolucion)) {
      return toast.error(
        "La descripción de la solución debe tener al menos 10 caracteres",
        {
          duration: 2000,
          style: {
            width: "600px",
          },
        }
      );
    }

    const ticket = (await fetchTicket(id)) as TicketType | null | undefined;

    const [user] = (await getUserByMail(email)) as UserType[];

    const addSolution = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/solution/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          solucionador: user.email,
          descripcionSolucion,
          descripcionProblema: ticket?.descripcionTicket,
          fechaProblema: ticket?.fechaCreacion,
          tipoTicket: ticket?.tema.tipoTicket,
        }),
      }
    );

    const solutionResponse = await addSolution.json();

    if (solutionResponse.error) {
      console.log(solutionResponse.message, solutionResponse.error);
      return toast.error("Error al agregar la solución", {
        duration: 2000,
        style: {
          width: "600px",
        },
      });
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
        style: {
          width: "600px",
        },
      });
    }

    toast.success("El ticket ha sido marcado como resuelto.", {
      duration: 2000,
      style: {
        width: "600px",
      },
      onAutoClose: () => {
        router.push(`/support/soluciones`);
      },
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2"
    >
      <label
        htmlFor="descripcionSolucion"
        className="font-semibold"
      >
        Descripcion de la Solucion
      </label>
      <textarea
        id="descripcionSolucion"
        className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        {...register("descripcionSolucion", {
          required: {
            value: true,
            message: "La solución es requerida",
          },
        })}
      />

      {errors.descripcionSolucion && (
        <span className="text-red-500 text-xs">
          {String(errors.descripcionSolucion.message)}
        </span>
      )}

      <section className="flex justify-end">
        <button
          type="submit"
          className="bg-emerald-500 flex items-center justify-center hover:bg-emerald-700 hover:text-white text-black py-2 px-4 rounded duration-3 duration-300"
        >
          Confirmar
        </button>
      </section>
    </form>
  );
};

export default AddSolution;
