"use client";

import { Button } from "@/components/ui/button";
import { Tema, TicketType } from "@/types/support";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Solucion = {
  id: string;
  fechaCreacion: Date;
  descripcionObservacion: string;
  ticket: TicketType;
};

export const columns: ColumnDef<Solucion>[] = [
  {
    accessorKey: "id",
    header: "ID Observacion",
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
          Fecha de Creacion de la Observacion
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
    accessorKey: "ticket.id",
    header: "ID Ticket",
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Link
            href={`/support/observations/observacion/${row.getValue("id")}`}
            className="w-full flex items-center justify-center bg-emerald-500 hover:bg-emerald-700 hover:text-white text-black py-2  rounded duration-300"
          >
            Detalles
          </Link>
        </div>
      );
    },
  },
];
