"use client";
import { fetchUser } from "@/app/api/libs/data/users";
import {
  updateUserButtonStyles as buttonStyle,
  updateUserLabelStyles as labelStyle,
  updateUserInputStyles,
} from "@/app/styles/taiwlindStyles";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { Toaster, toast } from "sonner";
import UpdateConfirm from "./Confirm/UpdateConfirm";

type FormValues = {
  name: string;
  lastname: string;
};

const EditPersona = () => {
  //: Use Params
  const { userId } = useParams();

  //: React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: async () => {
      const user = await fetchUser(userId[0]);
      return {
        name: user.persona.nombre,
        lastname: user.persona.apellido,
      };
    },
  });

  //: Regular Expression
  const letters = /^[A-Za-z\s]+$/;

  //: On Submit
  const onSubmit = handleSubmit(async (data: any) => {
    const { name, lastname } = data;

    if (!letters.test(name)) {
      return toast.error("El nombre solo puede contener letras");
    }

    if (!letters.test(lastname)) {
      return toast.error("El apellido solo puede contener letras");
    }

    toast(
      <div className="flex flex-col p-5 w-full gap-4 font-body">
        <h1 className="font-header text-xl">
          Actualizacion de datos personales
        </h1>
        <p className="text-lg">
          Para confirmar la actualización de tus datos es necesario que ingreses
          tu contraseña.
        </p>
        <UpdateConfirm
          id={userId}
          name={name}
          lastname={lastname}
        />
      </div>,
      {
        important: true,
        duration: 8000,
        style: {
          width: "600px",
        },
      }
    );
  });

  //* TSX
  return (
    <div className="bg-stone-200 w-1/2 shadow-md rounded-md px-10 py-10 mb-4 text-black">
      <section className="flex flex-row justify-between mb-5 items-center ">
        <h1 className="font-header text-3xl">Editar datos personales</h1>

        <Link
          href={"/ramble/dashboard"}
          className="text-black hover:bg-stone-300 text-3xl cursor-pointer mx-5 w-8 h-8 rounded-md"
        >
          <CgClose />
        </Link>
      </section>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2"
      >
        <label
          className={labelStyle}
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          type="text"
          className={updateUserInputStyles}
          {...register("name", {
            required: {
              value: true,
              message: "El nombre es un campo requerido",
            },
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">
            {String(errors.name.message)}
          </span>
        )}

        <label
          className={labelStyle}
          htmlFor="lastname"
        >
          Apellido
        </label>
        <input
          type="text"
          className={updateUserInputStyles}
          {...register("lastname", {
            required: {
              value: true,
              message: "El apellido es un campo requerido",
            },
          })}
        />
        {errors.lastname && (
          <span className="text-red-500 text-sm">
            {String(errors.lastname.message)}
          </span>
        )}

        <section className="flex justify-center">
          <button className={buttonStyle}>Guardar cambios</button>
        </section>
      </form>
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

export default EditPersona;
