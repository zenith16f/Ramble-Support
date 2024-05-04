type Persona = {
    nombre: string;
    apellido: string;
  };
  
  export type User = {
    id: string;
    correo: string;
    fechaCreacion: Date;
    persona: Persona;
  };