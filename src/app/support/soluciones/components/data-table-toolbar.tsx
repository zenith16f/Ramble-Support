"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { fetchTipoTicket } from "@/app/api/libs/data/tickets";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const [tipoTicket, setTipoTicket] = useState([]);

  useEffect(() => {
    const getTipoTicket = async () => {
      const tipoTicket = await fetchTipoTicket();

      const tipoTickets = tipoTicket.map((s: any) => ({
        label: s.tipoTicket,
        value: s.tipoTicket,
      }));

      setTipoTicket(tipoTickets);
    };

    getTipoTicket();
  }, [tipoTicket]);

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2 gap-4">
        <Input
          placeholder="Filtrar por solucionador"
          value={
            (table.getColumn("solucionador")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("solucionador")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {table.getColumn("tipoTicket") && (
          <DataTableFacetedFilter
            column={table.getColumn("tipoTicket")}
            title="Tipo de Ticket"
            options={tipoTicket}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Re-establecer
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
