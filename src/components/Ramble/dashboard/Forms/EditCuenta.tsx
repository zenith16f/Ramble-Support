"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CgClose } from "react-icons/cg";
import { Toaster } from "sonner";
import EditContraseña from "./EditContraseña";
import EditEmail from "./EditEmail";

const EditCuenta = () => {
  //: Use Params
  const { userId } = useParams();

  return (
    <div className="bg-stone-200 w-1/2 shadow-md rounded-md px-8 pt-8 pb-8 mb-4 text-black">
      <section className="flex flex-row justify-between mb-5">
        <h1 className="font-heading text-3xl">Editar datos de cuenta</h1>
        <Link
          href={"/ramble/dashboard"}
          aria-label="Cerrar edición de datos de cuenta"
          className="text-black hover:bg-stone-300 text-3xl cursor-pointer mx-5 w-8 h-8 rounded-md"
        >
          <CgClose />
        </Link>
      </section>

      <section>
        <EditEmail userId={userId} />
      </section>

      <section>
        <EditContraseña userId={userId} />
      </section>
      <Toaster
        position="top-center"
        richColors
        closeButton
        expand
        visibleToasts={1}
      />
    </div>
  );
};

export default EditCuenta;
