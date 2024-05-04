"use client";

import {
  AuthButtonStyles,
  AuthInputStyles,
  AuthLabelStyles,
  AuthLinkStyle,
} from "@/app/styles/taiwlindStyles";
import { signIn } from "next-auth/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

const LoginPage = () => {
  //: Router
  const router = useRouter();

  //: React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //: Regular Expression
  const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //: On submit function
  const onSubmit = handleSubmit(async (data: any) => {
    const { email, password } = data;

    if (!mail.test(email)) {
      toast.error("El correo ingresado no es válido");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // router.push("/ramble/soporte");
    // const res: any = await signIn("credentials", {
    //   email: email,
    //   password: password,
    //   redirect: false,
    // });

    const res = { data: "data", error: NaN };
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/ramble/soporte");
      toast.success("Inicio de sesion exitoso", {
        duration: 1500,
        onAutoClose(toast) {
          toast.title = "Redirigiendo";
          toast.duration = 1500;
          router.push("/ramble/soporte");
        },
      });
    }
  });

  //* TSX Return
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-navyBlue-900 m-10 w-11/12">
        <div className="flex flex-row bg-zinc-300 items-center align-middle content-center justify-between">
          <div className="w-4/6 h-full flex felx-col justify-center align-middle py-10 ">
            <form
              onSubmit={onSubmit}
              className="grid grid-flow-row gap-2 h-full w-8/12 text-black  "
            >
              <h1 className="font-semibold text-3xl my-5 py-5">
                Iniciar Sesión por el Soporte
              </h1>

              <label
                htmlFor="email"
                className={AuthLabelStyles}
              >
                Correo*
              </label>

              <input
                type="email"
                placeholder="Ingresa tu correo electronico"
                className={AuthInputStyles}
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo es un campo requerido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {String(errors.email.message)}
                </span>
              )}

              <label
                htmlFor="password"
                className={AuthLabelStyles}
              >
                Contraseña*
              </label>

              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className={AuthInputStyles}
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

              <section className="w-full flex flex-col items-center mt-10 ">
                <button
                  type="submit"
                  className={AuthButtonStyles}
                >
                  Iniciar Sesion
                </button>
              </section>
            </form>
          </div>

          <div className="w-1/2 h-full">
            <Image
              src={"/images/FormImage.svg"}
              alt="Form Image"
              width={625}
              height={800}
              className="w-full h-full"
              priority={true}
            ></Image>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        richColors
      />
    </div>
  );
};
export default LoginPage;
