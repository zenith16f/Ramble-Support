"use client";
import { AddObservationProps } from "@/interfaces/Support";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddObservation = ({ idTicket }: AddObservationProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const message = /^[a-zA-Z0-9\s\W\?]{10,}$/;

  const onSubmit = handleSubmit(async (data) => {
    const { descripcion } = data;

    if (!message.test(descripcion)) {
      return toast.error("El mensaje debe tener al menos 10 caracteres");
    }

    //: Send Data
    const addObservation = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/observaciones/create/${idTicket}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ descripcionObservacion: descripcion }),
      }
    );

    const addObservationResponse = await addObservation.json();

    if (addObservationResponse.error) {
      return toast.error(addObservationResponse.message);
    }

    toast.success("Observacion guardada exitosamente", {
      duration: 1500,
      onAutoClose: () => {
        router.push(`/support/observations/${idTicket}`);
      },
    });
  });

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={onSubmit}
    >
      <label
        htmlFor="descripcion"
        className="text-lg font-semibold"
      >
        Descripcion de la Observación
      </label>
      <textarea
        id="descripcion"
        className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        {...register("descripcion", {
          required: {
            value: true,
            message: "La descripcion de la observacion es requerida",
          },
        })}
      />
      {errors.descripcion && (
        <span className="text-red-800 text-sm">
          {String(errors.descripcion.message)}
        </span>
      )}

      <section className="w-full flex flex-row gap-5">
        <button
          type="submit"
          className="bg-emerald-500 flex items-center justify-center hover:bg-emerald-700 hover:text-white text-black py-2 px-4 rounded duration-3 duration-300  w-1/2"
        >
          Guardar
        </button>

        <Link
          href={`/support/observations/${idTicket}`}
          className="bg-slate-500 flex items-center justify-center hover:bg-slate-700 hover:text-white text-black py-2 px-4 rounded duration-3 duration-300 w-1/2 "
        >
          Cancelar
        </Link>
      </section>
    </form>
  );
};

export default AddObservation;
