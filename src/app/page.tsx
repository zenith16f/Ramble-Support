import Hero from "@/components/Hero/Hero";
import Image from "next/legacy/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="mx-40 my-20 ">
        <div className="flex-col justify-center items-center content-center">
          <div className="py-4 my-6">
            <h1 className="text-5xl font-header text-center font-medium">
              ¿Que es Ramble?
            </h1>

            <p className="text-center py-12 text-lg">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen.
            </p>
          </div>

          <div className="grid grid-flow-row-dense grid-cols-2 gap-3 md:gap-10 max-medium:grid-cols-1">
            <div className="w-full py-12">
              <h2 className="font-header text-4xl py-3 mb-4 font-medium">
                Encuentra
              </h2>
              <p className="font-body text-lg">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={"/images/Encuentra.svg"}
                alt="Encuentra"
                width={275}
                height={400}
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={"/images/Ubica.svg"}
                alt="Ubica"
                width={375}
                height={250}
                className="w-full h-full"
              />
            </div>
            <div>
              <h2 className="font-header text-4xl py-3 mb-4 text-right font-medium">
                Ubica
              </h2>
              <p className="font-body text-lg text-right">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-20">
          <h2 className="font-heading text-4xl py-3 mb-4 font-medium content-center">
            Explorar más
          </h2>
        </div>
      </div>
    </main>
  );
}