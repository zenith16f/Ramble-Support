"use client";

import { Button } from "@/components/ui/button";
import { Tema } from "@/types/support";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Ticket = {
  id: string;
  solucionador: string;
  descripcionProblema: string;
  descripcionSolucion: string;
  fechaProblema: Date;
  fechaSolucion: Date;
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
        >
          Tipo de Ticket
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "solucionador",
    header: "Solucionador",
  },
  {
    accessorKey: "fechaProblema",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha de Creacion del Ticket
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("fechaProblema"));
      const formattedDate = date.toLocaleDateString();
      return <div className="font-medium">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "fechaSolucion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha de Solucion
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("fechaSolucion"));
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
            href={`/support/solucion/${row.getValue("id")}`}
            className="w-full flex items-center justify-center bg-emerald-500 hover:bg-emerald-700 hover:text-white text-black py-2  rounded duration-300"
          >
            <button>Detalles</button>
          </Link>
        </div>
      );
    },
  },
];
