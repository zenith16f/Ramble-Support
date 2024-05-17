"use client";
import { AsignateTicketProps } from "@/interfaces/Support";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AsignateForm = ({ id, idUsuario }: AsignateTicketProps) => {
  const { handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async () => {
    const ticketAssigned = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/asignate/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: idUsuario,
        }),
      }
    );

    const ticketAssignedRes = await ticketAssigned.json();

    if (!ticketAssignedRes) {
      toast.error("No se pudo asignar el ticket");
      return;
    }

    const estadoUpdated = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tickets/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: "pendiente",
        }),
      }
    );

    const estadoUpdatedRes = await estadoUpdated.json();

    if (!estadoUpdatedRes) {
      toast.error("No se pudo asignar correctamente el ticket");
      return;
    }

    toast.success("Ticket asignado correctamente", {
      duration: 1000,
      onAutoClose: () => router.push("/support/asignaciones"),
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <button
        className="flex justify-center items-center text-white bg-blue-900 p-3 rounded-md px-10 hover:bg-blue-400 hover:text-black transition-all duration-300 ease-in-out"
        type="submit"
      >
        Asignarme Ticket
      </button>
    </form>
  );
};

export default AsignateForm;
