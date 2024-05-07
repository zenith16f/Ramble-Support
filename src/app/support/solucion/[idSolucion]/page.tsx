import { fetchSolution } from "@/app/api/libs/data/solutions";
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
    <div>
      <h1>{solucion?.solucionador}</h1>
      <h3>{solucion?.tema?.tipoTicket}</h3>
      <h3>{formattedDateCreation}</h3>
      <h3>{formattedDateSolution}</h3>
      <h1>{solucion?.descripcionProblema}</h1>
      <h2>{solucion?.descripcionSolucion}</h2>
    </div>
  );
};

export default Solucion;
