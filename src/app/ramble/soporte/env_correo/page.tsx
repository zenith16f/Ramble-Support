"use client";
import { useRouter } from "next/navigation";

const Soporte = () => {
  const router = useRouter();

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-6 rounded-lg">
          <div className="p-4 rounded-lg">
            <div className="flex py-4 px-8 font-bold items-center justify-start mb-4 dark:bg-neutral-400">
              <p className="text-2xl text-gray-400 dark:text-black inline-block">
                Bandeja
              </p>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center items-center mb-4 dark:bg-neutral-400 ">
            <div className="container mx-auto py-8 px-4">
              <h1 className="mb-2">Asunto</h1>
              <select className="mt-2  py-2 px-4 rounded-lg">
                <option value="pendiente">Pendiente</option>
                <option value="resuelto">Resuelto</option>
                <option value="en proceso">En proceso</option>
              </select>

              <h1 className="mt-4 mb-2">Descripcion</h1>
              <textarea className="mt-2 w-[600px] h-32 py-2 px-4 rounded-lg">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.
              </textarea>

              <div className="mt-4 flex ">
                <button
                  className="bg-cyan-700 hover:bg-cyan-800 text-white font-sans py-2 px-16 rounded"
                  onClick={() => router.push("/ramble/soporte")}
                >
                  Enviar correo
                </button>
                <div className="w-4"></div> {/* Espacio entre botones */}
                <button
                  className="bg-slate-500 hover:bg-slate-700 text-white font-sans py-2 px-16 rounded"
                  onClick={() => router.push("/ramble/soporte")}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soporte;
