import { fetchTickets } from "@/app/api/libs/data/tickets";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Tickets = async () => {
  const data = await fetchTickets();

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
