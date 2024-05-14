export interface Estado {
  id: number;
  tipoEstado: string;
}

export interface Tema {
  id: number;
  tipoTicket: string;
}

export interface TicketInterface {
  id: string;
  emisor: string;
  fechaCreacion: Date;
  prioridad: number;
  descripcion: string;
  estado: Estado;
  tema: Tema;
}

export interface SolutionInterface {
  id: string;
  solucionador: string;
  descripcionProblema: string;
  descripcionSolucion: string;
  fechaProblema: Date;
  fechaSolucion: Date;
  tema: Tema;
}

export interface SolutonProps {
  params: {
    idSolucion: string;
  };
}

export interface TicketProps {
  params: {
    id: string;
  };
}
