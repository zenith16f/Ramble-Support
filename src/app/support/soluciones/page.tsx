import { fetchSolutions } from "@/app/api/libs/data/solutions";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const dynamic = "force-dynamic";

const Soluciones = async () => {
  const data = await fetchSolutions();

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

export default Soluciones;
