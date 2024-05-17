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
  },
  {
    accessorKey: "emisor",
    header: "Emisor",
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
    accessorKey: "fechaCreacion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-semibold"
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
    accessorKey: "estado.tipoEstado",
    header: "Estado",
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Link
            href={`/support/ticket/${row.getValue("id")}`}
            className="w-full flex items-center justify-center bg-emerald-500 hover:bg-emerald-700 hover:text-white text-black py-2  rounded duration-300"
          >
            <button>Detalles</button>
          </Link>
        </div>
      );
    },
  },
];
