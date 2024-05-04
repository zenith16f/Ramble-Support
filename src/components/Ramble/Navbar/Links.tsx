import dynamic from "next/dynamic";
import Link from "next/link";

//: Icons
const Search = dynamic(
  () => {
    return import("react-icons/io5").then((icon) => icon.IoSearchOutline);
  },
  { ssr: false }
);

const Home = dynamic(
  () => {
    return import("react-icons/go").then((icon) => icon.GoHomeFill);
  },
  { ssr: false }
);

const Favoritos = dynamic(
  () => {
    return import("react-icons/go").then((icon) => icon.GoHeartFill);
  },
  { ssr: false }
);

const List = dynamic(
  () => {
    return import("react-icons/lu").then((icon) => icon.LuClipboardList);
  },
  { ssr: false }
);

const Soporte = dynamic(
  () => {
    return import("react-icons/bs").then((icon) => icon.BsQuestionCircleFill);
  },
  { ssr: false }
);

const NavBarLinksFull = () => {
  return (
    <div className="hidden mid:flex items-center justify-center gap-2 mid:gap-8">
      <Link
        href={"/ramble"}
        className="flex items-center gap-2"
      >
        <Home size={20} />
        Inicio
      </Link>
      <Link
        href={"/ramble/favoritos"}
        className="flex items-center gap-2"
      >
        <Favoritos size={20} />
        Favoritos
      </Link>

      <Link
        href={"/ramble/search"}
        className="flex items-center gap-2 py-2 px-2 bg-zinc-200 rounded-lg w-2/5 border-2 border-coffee-900 brightness-125 duration-300 hover:no-underline hover:brightness-90 "
      >
        <Search size={20} />
        <p className="text-stone-900">Buscar evento(s)</p>
      </Link>
      <Link
        href={"/ramble/precotizador"}
        className="flex items-center gap-2"
      >
        <List size={20} />
        Precotizador
      </Link>
      <Link
        href={"/ramble/soporte"}
        className="flex items-center gap-2"
      >
        <Soporte size={20} />
        Soporte
      </Link>
    </div>
  );
};

const NavBarLinksSmall = () => {
  return (
    <div className="mt-6 flex flex-col items-start gap-6">
      <Link
        href={"/ramble"}
        className="flex items-center gap-2"
      >
        <Home size={20} />
        Inicio
      </Link>
      <Link
        href={"/ramble/favoritos"}
        className="flex items-center gap-2"
      >
        <Favoritos size={20} />
        Favoritos
      </Link>

      <Link
        href={"/ramble/search"}
        className="flex items-center gap-2 py-2 px-2 bg-zinc-200 rounded-lg w-3/4 border-2 border-coffee-900 brightness-125 duration-300 hover:no-underline hover:brightness-90 "
      >
        <Search size={20} />
        <p className="text-stone-900">Buscar evento(s)</p>
      </Link>
      <Link
        href={"/ramble/precotizador"}
        className="flex items-center gap-2"
      >
        <List size={20} />
        Precotizador
      </Link>
      <Link
        href={"/ramble/soporte"}
        className="flex items-center gap-2"
      >
        <Soporte size={20} />
        Soporte
      </Link>
    </div>
  );
};

export { NavBarLinksFull, NavBarLinksSmall };
