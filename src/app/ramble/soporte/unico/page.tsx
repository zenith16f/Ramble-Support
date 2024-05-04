"use client";
import React, { Fragment } from "react";
import { Soporte } from "@/interfaces/soporteid";
import { PriorityModal } from "@/components/modals/Modals";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { log } from "console";

const SoporteId = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const data = localStorage.getItem("data") || "{}";
  if (data === "{}") {
    redirect("/ramble/soporte");
  }
  
  const dataObject: Soporte = JSON.parse(data);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <div className="p-4 sm:ml-64">
        <div className="p-6 rounded-lg">
          <div className="p-4 rounded-lg">
            <div className="flex py-4 px-8 font-bold items-center justify-start mb-4 dark:bg-neutral-400">
              <p className="text-2xl text-gray-400 dark:text-black inline-block">
                Respuestas
              </p>
            </div>
          </div>

          <div className="flex-grow flex flex-col p-2 py-8 justify-center items-center mb-4 dark:bg-neutral-400">
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div>
                  <p className="font-bold">Envio</p>
                  <p>{dataObject.sender}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div>
                  <p className="font-bold">Resuelto</p>
                  <p>{dataObject.priority}</p>
                </div>
                <div>
                  <p className="font-bold">Estatus</p>
                  <p>{dataObject.status}</p>
                </div>
                <div>
                  <p className="font-bold">Asunto</p>
                  <p>{dataObject.subject}</p>
                </div>
              </div>

              <p className="font-bold ">Fecha de envío</p>
              <p className="mb-4"> 20/02/2024</p>
              <p className="font-bold mb-4">Descripcion</p>
              <p className="mb-2">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. No sólo sobrevivió 500 años, sino
                que tambien ingresó como texto de relleno en documentos
                electrónicos, quedando esencialmente igual al original. Fue
                popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente
                con software de autoedición, como por ejemplo Aldus PageMaker,
                el cual incluye versiones de Lorem Ipsum.
              </p>

              <PriorityModal isVisible={showModal} onClose={handleCloseModal}>
                <>
                  <h1 className="text-3xl font-bold  pl-6 py-6">
                    Estatus actual
                  </h1>
                  <p className="pl-6">pendiente</p>
                  <h1 className="text-3xl font-bold mt-4 pl-6">
                    Nuevo estatus
                  </h1>
                  <div className="pl-6">
                    <select className="mt-4 px-28 py-3 font-bold rounded">
                      <option value="pendiente">Pendiente</option>
                      <option value="resuelto">Resuelto</option>
                      <option value="en proceso">En proceso</option>
                    </select>
                  </div>

                  <div className="mt-auto pl-6 py-56">
                    <button
                      className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white font-sans py-4 px-16 rounded"
                      onClick={handleCloseModal}
                    >
                      Hacer el cambio
                    </button>
                  </div>
                </>
              </PriorityModal>
              <br />

              <div className="flex-col justify-center mb-2 space-x-4">
                <button
                  className="bg-emerald-500 hover:bg-emerald-700 text-black font-sans py-2 px-16 rounded"
                  onClick={() => router.push("/ramble/soporte/env_correo")}
                >
                  Enviar Respuestas
                </button>

                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white font-sans py-2 px-16 rounded"
                  onClick={handleShowModal}
                >
                  Cambiar estatus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SoporteId;
