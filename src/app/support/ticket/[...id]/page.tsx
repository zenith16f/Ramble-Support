import { fetchTicket } from "@/app/api/libs/data/tickets";
import { HeaderGlobalStyle as HeaderStyle } from "@/app/styles/taiwlindStyles";
import ReturnBtn from "@/components/Soporte/buttons/ReturnBtn";
import { TicketProps } from "@/interfaces/Support";
import { TicketType } from "@/types/support";
import AsignateBtn from "../../../../components/Soporte/Tickets/AsignateBtn";

const page = async ({ params }: TicketProps) => {
  const { id } = params;

  const ticket = (await fetchTicket(id)) as TicketType | null | undefined;

  const dateCreation = new Date(ticket?.fechaCreacion as Date);
  const formattedDateCreation = dateCreation.toLocaleDateString();

  return (
    <div className="bg-neutral-400 p-5 my-5 rounded-md w-full">
      <div className="font-body flex flex-col gap-5 p-5">
        <section className="flex justify-start">
          <ReturnBtn enlace={`/support/tickets`} />
        </section>
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Emisor</h1>
          <h2>{ticket?.emisor}</h2>
        </section>

        <section className="flex flex-row gap-10">
          <section className="flex flex-col gap-2">
            <h1 className={HeaderStyle}>Tipo de Ticket</h1>
            <h2>{ticket?.tema.tipoTicket}</h2>
          </section>
          <section className="flex flex-col gap-2">
            <h1 className={HeaderStyle}>Prioridad</h1>
            <h2>P{ticket?.prioridad}</h2>
          </section>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Fecha de creación del Ticket</h1>
          <h3>{formattedDateCreation}</h3>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Descripcion del Ticket</h1>
          <h3>{ticket?.descripcionTicket}</h3>
        </section>

        <section>
          <h1 className={HeaderStyle}>Estado del Ticket</h1>
          <h3>{ticket?.estado.tipoEstado}</h3>
        </section>

        <div>
          <AsignateBtn id={ticket?.id as string} />
        </div>
      </div>
    </div>
  );
};

export default page;
