"use client";

import { Button } from "@/components/ui/button";
import { Estado, Tema } from "@/types/support";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Ticket = {
  id: string;
  emisor: string;
  fechaCreacion: Date;
  prioridad: number;
  descripcion: string;
  estado: Estado;
  tema: Tema;
};

export const columns: ColumnDef<Ticket>[] = [
  {
    id: "tipoTicket",
    accessorKey: "tema.tipoTicket",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-semibold"
        >
          Tipo de Ticket
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="capitalize">{row.getValue("tipoTicket")}</p>;
    },
  },

  {
    accessorKey: "prioridad",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-semibold"
        >
          Prioridad
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <p>P{row.getValue("prioridad")}</p>
        </div>
      );
    },
  },
  {
    id: "estado",
    accessorKey: "estado.tipoEstado",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-semibold"
        >
          Estado
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      if (row.getValue("estado") === "resuelto") {
        return (
          <p className="bg-teal-700 text-white p-1 rounded-md">Resuelto</p>
        );
      }
      if (row.getValue("estado") === "en proceso") {
        return (
          <p className="bg-sky-700 text-white p-1 rounded-md">En Proceso</p>
        );
      }
      if (row.getValue("estado") === "pendiente") {
        return <p className="bg-orange-400 p-1 rounded-md">Pendiente</p>;
      }

      if (row.getValue("estado") === "en espera") {
        return <p className="bg-amber-400 p-1 rounded-md">En espera</p>;
      }
    },
  },
  {
    accessorKey: "emisor",
    header: "Emisor",
  },
  {
    accessorKey: "fechaCreacion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-semibold "
        >
          Fecha de Creacion
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("fechaCreacion"));
      const formattedDate = date.toLocaleDateString();
      return <div className="font-medium">{formattedDate}</div>;
    },
  },

  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Link
            href={`/support/asignacion/${row.getValue("id")}`}
            className="w-full flex items-center justify-center bg-emerald-500 hover:bg-emerald-700 hover:text-white text-black py-2  rounded duration-300"
          >
            Detalles
          </Link>
        </div>
      );
    },
  },
];
