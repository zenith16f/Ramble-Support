import { fetchUser } from "@/app/api/libs/data/users";
import {
  updateUserButtonStyles as buttonStyle,
  updateUserInputStyles,
  updateUserLabelStyles,
} from "@/app/styles/taiwlindStyles";
import { UpdateProps as editEmail } from "@/interfaces/userInterfaces";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import EmailConfirm from "./Confirm/EmailConfirm";

type FormValues = {
  email: string;
};

const EditEmail = ({ userId }: editEmail) => {
  //: Use Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: async () => {
      const user = await fetchUser(userId[0]);
      return {
        email: user.correo,
      };
    },
  });

  //: Regular Expression
  const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //: On Submit
  const onSubmit = handleSubmit(async (data) => {
    const { email } = data;

    if (!mail.test(email)) {
      return toast.error("El correo ingresado no es válido");
    }

    toast(
      <div className="flex flex-col p-5 w-full gap-4 font-body">
        <h1 className="font-header text-xl">Actualizacion de correo</h1>
        <p className="text-lg">
          Para confirmar la actualización de tus datos es necesario que ingreses
          tu contraseña.
        </p>
        <EmailConfirm
          id={userId}
          email={email}
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
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2"
      >
        <label
          htmlFor="email"
          className={updateUserLabelStyles}
        >
          Correo
        </label>

        <input
          type="email"
          id="email"
          className={updateUserInputStyles}
          {...register("email", {
            required: {
              value: true,
              message: "El correo es un campo requerido",
            },
          })}
        />

        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <section className="flex justify-center">
          <button className={buttonStyle}>Cambiar Correo</button>
        </section>
      </form>
    </div>
  );
};

export default EditEmail;
