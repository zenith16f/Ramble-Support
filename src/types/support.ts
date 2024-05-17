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
  descripcionTicket: string;
  estado: Estado;
  tema: Tema;
  usuario?: UserType;
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

export type UserType = {
  id: string;
  email: string;
  nombre: string;
  apellido: string;
  created_at: Date;
};

export type ObservationType = {
  id: string;
  fechaCreacion: Date;
  descripcionObservacion: string;
  ticket: TicketType;
};

export type StatusType = {
  id: number;
  tipoEstado: string;
};
