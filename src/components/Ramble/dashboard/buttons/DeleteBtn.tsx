"use client";
import { deleteUserProps } from "@/interfaces/userInterfaces";
import { Toaster, toast } from "sonner";
import DeleteUser from "../Forms/Confirm/DeleteUser";

const DeleteBtn = ({ userId }: deleteUserProps) => {
  //: Delete Function
  const deleteUser = async () => {
    toast(
      <div className="flex flex-col p-5 w-full gap-4">
        <h1 className="font-header text-xl">Eliminar Tu Cuenta</h1>
        <p className="text-lg">
          Para eliminar tu cuenta es necesario que ingreses tu contraseña, este
          proceso es irreversible. Y perderas acceso al sistema.
        </p>
        <DeleteUser id={userId} />
      </div>,
      {
        important: true,
        duration: 8000,
        style: {
          width: "600px",
        },
      }
    );
  };

  return (
    <div className="w-full items-center flex justify-center font-body">
      <button
        onClick={deleteUser}
        className="py-5 w-full text-red-700 hover:text-white hover:bg-red-700 duration-300"
      >
        Eliminar Cuenta
      </button>

      <Toaster
        position="top-center"
        expand
        richColors
        closeButton
        visibleToasts={1}
      />
    </div>
  );
};

export default DeleteBtn;
