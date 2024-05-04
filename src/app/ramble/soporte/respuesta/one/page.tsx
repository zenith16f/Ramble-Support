"use client"
import React from "react";
import {Soporte} from "@/interfaces/soporteid";
import { redirect } from "next/navigation";

const SoporteId=()=>{

  const data = localStorage.getItem("data") || "{}";
  if (data === "{}") {
    redirect("/ramble/soporte");
  }

  const dataObject: Soporte = JSON.parse(data);
  
  return(
        <div className="p-4 sm:ml-64">
      <div className="p-6 rounded-lg">
        <div className="p-4 rounded-lg">
          <div className="flex py-4 px-8 font-bold items-center justify-start mb-4 dark:bg-neutral-400">
            <p className="text-2xl text-gray-400 dark:text-black inline-block">
              Respuestas
            </p>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center mb-4 dark:bg-neutral-400">
          <div className="container mx-auto py-8">
            <p className="font-bold">Resuelto</p>
            <p>{dataObject.priority}</p>
            <p className="font-bold">Asunto</p>
            <p>{dataObject.subject}</p>
            <p className="font-bold">Fecha de envío</p>
            <p>{dataObject.status}</p>
            <p className="font-bold">Solucion</p>
            <p>{dataObject.sender}</p>
            
          </div>
        </div>
      </div>
    </div>
    )
}

export default SoporteId;