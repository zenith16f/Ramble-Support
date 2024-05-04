"use client";
import { updateUserLabelStyles } from "@/app/styles/taiwlindStyles";
import { UpdateEmailProps } from "@/interfaces/userInterfaces";
import { signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EmailConfirm = ({ id, email }: UpdateEmailProps) => {
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
          id: id[0],
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

    const emailRes = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/email/${id[0]}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: email,
        }),
      }
    );

    const correoResponse = await emailRes.json();

    if (correoResponse.error) {
      toast.error(correoResponse.message);
      return;
    }

    toast.success("Correo actualizado con éxito", {
      duration: 1000,
      style: { width: "600px" },
      onAutoClose: () => signOut(),
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
            className="bg-greenBlue-900 hover:bg-greenBlue-700 text-beige-900 rounded-md w-1/3 py-2 font-medium flex justify-center items-center  duration-300"
          >
            Confirmar
          </button>
        </section>
      </form>
    </div>
  );
};

export default EmailConfirm;
