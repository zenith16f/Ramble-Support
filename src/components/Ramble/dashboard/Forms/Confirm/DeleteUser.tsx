import { updateUserLabelStyles } from "@/app/styles/taiwlindStyles";
import { ConfirmProps } from "@/interfaces/userInterfaces";
import { signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const DeleteUser = ({ id }: ConfirmProps) => {
  //: React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //: On Submit Function
  const onSubmit = handleSubmit(async (data) => {
    const { password } = data;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          contrasena: password,
        }),
      }
    );

    const checkResponse = await response.json();

    if (checkResponse.error) {
      toast.error(checkResponse.message, {
        duration: 2500,
        style: { width: "600px" },
      });

      return;
    }

    const deleteUser = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const deleteResponse = await deleteUser.json();

    if (deleteResponse.error) {
      toast.error("Error al eliminar tu cuenta", {
        duration: 2500,
        style: { width: "600px" },
      });
      return;
    }

    toast.success("Cuenta eliminada con éxito", {
      duration: 1000,
      style: { width: "600px" },
      onAutoClose: async () => {
        await signOut();
      },
    });
  });

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2"
      >
        <label
          htmlFor="password"
          className={updateUserLabelStyles}
        >
          Contraseña
        </label>

        <input
          type="password"
          className={
            "shadow text-black appearance-none py-2 px-3 bg-gray-100 w-full h-8  border border-black k rounded-md mb-4 leading-tight focus:outline-none focus:shadow-outline"
          }
          id="password"
          placeholder="Ingresa tu contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es un campo requerido",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {String(errors.password.message)}
          </span>
        )}
        {errors.wrong && (
          <span className="text-red-500 text-sm">
            {String(errors.wrong.message)}
          </span>
        )}

        <section className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-red-600 rounded-md w-1/3 py-1 font-medium flex justify-center items-center hover:bg-red-700  duration-300"
          >
            Confirmar
          </button>
        </section>
      </form>
    </div>
  );
};

export default DeleteUser;
