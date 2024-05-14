import { fetchTicketsByUser } from "@/app/api/libs/data/tickets";
import { getUserByMail } from "@/app/api/libs/data/user";
import { UserType } from "@/types/support";
import { getServerSession } from "next-auth";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const MisTicket = async () => {
  const session = await getServerSession();

  const [user] = (await getUserByMail(
    session?.user?.email as string
  )) as UserType[];

  const data = await fetchTicketsByUser(user.id);

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

export default MisTicket;
