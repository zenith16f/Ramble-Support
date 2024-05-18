import { fetchTicketsByStatus } from "@/app/api/libs/data/tickets";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const dynamic = "force-dynamic";

const Tickets = async () => {
  const status = "en espera";
  const data = await fetchTicketsByStatus(status);

  return (
    <section className="p-5 rounded-xl mt-5 mb-5 bg-neutral-400">
      <div className="container">
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
    </section>
  );
};

export default Tickets;
