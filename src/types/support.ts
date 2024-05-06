export type Estado = {
  id: number;
  tipoEstado: string;
};

export type Tema = {
  id: number;
  tipoTicket: string;
};

export type TicketType = {
  id: string;
  emisor: string;
  fechaCreacion: Date;
  prioridad: number;
  descripcion: string;
  estado: Estado;
  tema: Tema;
};

export type SolutionType = {
  id: string;
  solucionador: string;
  descripcionProblema: string;
  descripcionSolucion: string;
  fechaProblema: Date;
  fechaSolucion: Date;
  tema: Tema;
};
