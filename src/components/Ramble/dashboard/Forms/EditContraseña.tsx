import {
  updateUserButtonStyles as buttonStyle,
  updateUserInputStyles,
  updateUserLabelStyles,
} from "@/app/styles/taiwlindStyles";
import { UpdateProps as PasswordProps } from "@/interfaces/userInterfaces";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import PasswordConfirm from "./Confirm/PasswordConfirm";

const EditContraseña = ({ userId }: PasswordProps) => {
  //: React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //: Regular Expression
  const passwordEx =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_#])[A-Za-z\d@$!%*?&_#]{8,}$/;

  //: On Submit Function
  const onSubmit = handleSubmit(async (data) => {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      return toast.error("Las contraseñas no coinciden");
    }

    if (!passwordEx.test(password)) {
      return toast.error(
        "La contraseña debe contener al menos 8 caracteres, una letra mayuscula, una letra minuscula, un numero y un caracter especial"
      );
    }

    toast(
      <div className="flex flex-col p-5 w-full gap-4 font-body">
        <h1 className="font-header text-xl">Actualizacion de correo</h1>
        <p className="text-lg">
          Para confirmar la actualización de tus datos es necesario que ingreses
          tu contraseña.
        </p>
        <PasswordConfirm
          id={userId}
          newPassword={password}
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
          htmlFor="password"
          className={updateUserLabelStyles}
        >
          Nueva Contraseña
        </label>

        <input
          type="password"
          className={updateUserInputStyles}
          id="password"
          placeholder="Ingresa tu nueva contraseña"
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

        <label
          htmlFor="confirmPassword"
          className={updateUserLabelStyles}
        >
          Confirmar contraseña
        </label>

        <input
          type="password"
          id="confirmPassword"
          className={updateUserInputStyles}
          placeholder="Confirma tu nueva contraseña"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmar contraseña es un campo requerido",
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {String(errors.confirmPassword.message)}
          </span>
        )}

        <section className="flex justify-center">
          <button className={buttonStyle}>Cambiar contraseña</button>
        </section>
      </form>
    </div>
  );
};

export default EditContraseña;
