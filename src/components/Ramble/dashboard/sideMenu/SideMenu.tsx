import { userMenuOptions } from "@/app/styles/taiwlindStyles";
import { deleteUserProps as UserProps } from "@/interfaces/userInterfaces";
import Link from "next/link";
import DeleteBtn from "../buttons/DeleteBtn";

const SideMenu = ({ userId }: UserProps) => {
  return (
    <div>
      <section className="flex flex-col bg-stone-300 h-lvh w-full font-body text-2xl">
        <h1 className="text-center py-5 font-bold ">Configuración</h1>

        <h1 className="py-5 bg-zinc-200 duration-300 items-center flex justify-center">
          Informacion de cuenta
        </h1>

        <Link
          href={`/ramble/dashboard/persona/${userId}`}
          className={userMenuOptions}
        >
          <h1>Editar datos personales</h1>
        </Link>

        <Link
          href={`/ramble/dashboard/cuenta/${userId}`}
          className={userMenuOptions}
        >
          <h1>Editar datos de cuenta</h1>
        </Link>

        <hr className=" w-11/12 border-gray-400 self-center my-5" />

        <div className="w-full">
          <DeleteBtn userId={userId} />
        </div>
      </section>
    </div>
  );
};

export default SideMenu;
