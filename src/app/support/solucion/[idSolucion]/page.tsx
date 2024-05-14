import { fetchSolution } from "@/app/api/libs/data/solutions";
import { HeaderGlobalStyle as HeaderStyle } from "@/app/styles/taiwlindStyles";
import { SolutonProps } from "@/interfaces/Support";
import { SolutionType } from "@/types/support";

const Solucion = async ({ params }: SolutonProps) => {
  //: Params
  const { idSolucion } = params;

  const solucion = (await fetchSolution(idSolucion)) as
    | SolutionType
    | null
    | undefined;

  const dateCreation = new Date(solucion?.fechaProblema as Date);
  const formattedDateCreation = dateCreation.toLocaleDateString();

  const dateSolution = new Date(solucion?.fechaSolucion as Date);
  const formattedDateSolution = dateSolution.toLocaleDateString();

  //* TSX
  return (
    <div className="bg-neutral-400 p-5 my-5 rounded-md w-full">
      <div className="font-body flex flex-col gap-5 p-5">
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Solucionador</h1>
          <h2>{solucion?.solucionador}</h2>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Tipo de Ticket</h1>
          <h2>{solucion?.tema?.tipoTicket}</h2>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Fecha de creación del Ticket</h1>
          <h2>{formattedDateCreation}</h2>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Fecha de solución del Ticket</h1>
          <h2>{formattedDateSolution}</h2>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Descripcion del Ticket</h1>
          <h2>{solucion?.descripcionProblema}</h2>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Descripcion de la Solución</h1>
          <h2>{solucion?.descripcionSolucion}</h2>
        </section>
      </div>
    </div>
  );
};

export default Solucion;
