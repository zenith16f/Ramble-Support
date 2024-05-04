import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={"/images/HeroImage.jpg"}
          alt="Hero image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          priority={true}
        />
      </div>

      <div className={styles.heroMain}>
        <div className="w-full h-24 py-6 px-5">
          <Image
            src={"/RambleLogo.svg"}
            alt="Ramble"
            width={50}
            height={50}
            priority={false}
          />
        </div>

        <div className="flex flex-col w-full h-full items-center ">
          <Image
            src={"/RambleLogo.svg"}
            alt="Ramble"
            width={250}
            height={250}
            priority={false}
          />
          <div className="flex flex-col items-center text-white py-4">
            <h1 className="font-header text-6xl">Ramble</h1>
            <p className="font-body font-medium text-lg text-center ">
              Explora eventos y lugares interesantes <br /> y escoge alguno por
              tu cuenta
            </p>
          </div>
          <div>
            <Link
              href={"/login"}
              className="text-white text-center font-body font-thin bg-teal-700"
            >
              <h3>Iniciar Sesión</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
