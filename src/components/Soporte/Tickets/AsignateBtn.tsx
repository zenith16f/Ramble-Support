import { getUserByMail } from "@/app/api/libs/data/user";
import { IDTicketsProps as TicketProps } from "@/interfaces/Support";
import { UserType } from "@/types/support";
import { getServerSession } from "next-auth";
import { Toaster } from "sonner";
import AsignateForm from "./AsignateForm";

const AsignateBtn = async ({ id }: TicketProps) => {
  const session = await getServerSession();

  const [user] = (await getUserByMail(
    session?.user?.email as string
  )) as UserType[];

  return (
    <div className="w-1/2">
      <AsignateForm
        id={id}
        idUsuario={user.id}
      />
      <Toaster
        richColors
        position="top-center"
      />
    </div>
  );
};

export default AsignateBtn;
