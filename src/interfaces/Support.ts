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

export interface TicketObservationsProps {
  params: {
    idTicket: string;
  };
}

export interface ObservationProps {
  params: {
    idObservacion: string;
  };
}

export interface AddObservationProps {
  idTicket: string;
}

export interface IDTicketsProps {
  id: string;
}

export interface AsignateTicketProps {
  id: string;
  idUsuario: string;
}

export interface ChangeStatusProps {
  id: string;
}
