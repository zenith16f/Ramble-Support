import { TicketProps } from "@/interfaces/Support";
import React from "react";

const Asignacion = ({ params }: TicketProps) => {
  const { id } = params;

  return <div>{id}</div>;
};

export default Asignacion;
