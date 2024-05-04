import { eventCardDataStyles as DataStyle } from "@/app/styles/taiwlindStyles";
import { EventProp as EventProps } from "@/types/Event";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }: EventProps) => {
  //: Props
  const { id, titulo, hora, lugar, precio, status, urlImagen, fecha } = event;

  //* TSX
  return (
    <div className="flex justify-center ">
      <div className="bg-navyBlue-900 rounded-lg border-gray-800 mb-3 h-full  w-3/4 cursor-pointer text-black duration-300 hover:scale-110 ">
        <Link
          href={`/ramble/event/${id}`}
          className="hover:no-underline"
        >
          <div>
            <div>
              <Image
                height={228}
                width={410}
                className="object-cover w-full rounded-t-lg"
                src={
                  urlImagen ||
                  `https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
                }
                alt="Event Image"
                sizes="(min-width: 1820px) 410px, (min-width: 1400px) calc(18vw + 86px), (min-width: 1220px) 410px, (min-width: 960px) calc(28.33vw + 70px), (min-width: 640px) 410px, calc(69.06vw - 18px)"
                priority={true}
                decoding="async"
                fetchPriority="auto"
              />

              {/* {status && <div className="bg-green-50">Vigente</div>} */}
            </div>
          </div>

          <div className="p-4 flex flex-col text-white justify-center px-12 pb-12">
            <h1 className="font-header text-3xl py-4">{titulo}</h1>
            <section className="flex flex-row">
              <p className={DataStyle}>{fecha}</p>
              <p className={DataStyle}>{hora}0hrs</p>
            </section>
            <p className={DataStyle}>{lugar}</p>
            <p className={DataStyle}>${precio}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
