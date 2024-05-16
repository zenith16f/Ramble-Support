import { getObservationsByTicket } from "@/app/api/libs/data/observations";
import ReturnBtn from "@/components/Soporte/buttons/ReturnBtn";
import { TicketObservationsProps } from "@/interfaces/Support";
import Link from "next/link";
import { columns } from "./column";
import { DataTable } from "./data-table";

const Observaciones = async ({ params }: TicketObservationsProps) => {
  const { idTicket } = params;

  const data = await getObservationsByTicket(idTicket);

  return (
    <section className="p-5 rounded-xl mt-5 mb-5 bg-neutral-400">
      <div className="container flex flex-col gap-4">
        <section className="flex justify-between w-full">
          <ReturnBtn enlace={`/support/asignacion/${idTicket}`} />
          <Link
            className="bg-emerald-500 flex items-center justify-center hover:bg-emerald-700 hover:text-white text-black py-2 px-4 rounded duration-3 duration-300 "
            href={`/support/observations/observacion/crear/${idTicket}`}
          >
            Añadir Observacion
          </Link>
        </section>
        <section>
          <DataTable
            columns={columns}
            data={data}
          />
        </section>
      </div>
    </section>
  );
};

export default Observaciones;
