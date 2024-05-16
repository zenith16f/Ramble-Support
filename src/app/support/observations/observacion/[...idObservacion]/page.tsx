import { getObservation } from "@/app/api/libs/data/observations";
import { HeaderGlobalStyle as HeaderStyle } from "@/app/styles/taiwlindStyles";
import ReturnBtn from "@/components/Soporte/buttons/ReturnBtn";
import { ObservationProps } from "@/interfaces/Support";
import { ObservationType } from "@/types/support";

const Observation = async ({ params }: ObservationProps) => {
  const { idObservacion } = params;

  const observation = (await getObservation(idObservacion)) as
    | ObservationType
    | null
    | undefined;

  console.log("Observation: ", observation);

  const dateCreation = new Date(observation?.fechaCreacion as Date);
  const formattedDateCreation = dateCreation.toLocaleDateString();

  return (
    <div className="bg-neutral-400 p-5 my-5 rounded-md w-full">
      <div className="font-body flex flex-col gap-5 p-5">
        <section className="flex justify-start">
          <ReturnBtn
            enlace={`/support/observations/${observation?.ticket.id}`}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1 className={HeaderStyle}>Fecha de Creación de la Observacion</h1>
          <h2>{formattedDateCreation}</h2>
        </section>
        <section>
          <h1 className={HeaderStyle}>Descripcion de la Observación</h1>
          <h2>{observation?.descripcionObservacion}</h2>
        </section>
      </div>
    </div>
  );
};

export default Observation;
