import AddObservation from "@/components/Soporte/dashboard/observations/AddObservation";
import { TicketObservationsProps } from "@/interfaces/Support";
import { Toaster } from "sonner";

const Crear = ({ params }: TicketObservationsProps) => {
  const { idTicket } = params;

  return (
    <div className="p-5 rounded-xl mt-5 mb-5 bg-neutral-400">
      <AddObservation idTicket={idTicket} />
      <Toaster
        position="top-center"
        richColors
      />
    </div>
  );
};

export default Crear;
