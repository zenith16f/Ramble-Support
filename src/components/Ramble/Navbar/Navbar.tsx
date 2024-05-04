import Image from "next/legacy/image";
import logo from "@/../public/RambleLogo.svg";
import bandeja from "@/../public/images/bajada.svg";
import respuestas from "@/../public/images/subida.svg";
import logout from "@/../public/images/logout.svg";

const Navbar: React.FC = () => {
  //: TSX
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="fixed bottom-0 left-0 z-50 p-2 mt-2 ml-2 text-sm text-black rounded-lg sm:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-black"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed bottom-0 left-0 z-40 w-64 h-screen bg-white dark:bg-neutral-400 text-black"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between px-3 py-8 overflow-y-auto">
          <div>
            <a href="#" className="flex items-center ps-2.5 mb-5">
              <Image
                src={logo}
                alt="Ramble"
                width={50}
                height={50}
                priority={false}
              />
              <span className="self-center px-5 py-8 text-xl font-bold ">
                Ramble
              </span>
            </a>
            <ul className="space-y-8 font-medium">
              <li>
                <a
                  href="/ramble/soporte"
                  className="flex items-center font-bold p-2 rounded-lg text-black hover:bg-gray-100 group"
                >
                  <Image
                    src={bandeja}
                    alt="bandeja de entrada"
                    width={20}
                    height={20}
                    priority={false}
                  />
                  <span className="ml-3">Bandeja de entrada</span>
                </a>
              </li>
              <li>
                <a
                  href="/ramble/soporte/respuesta"
                  className="flex items-center font-bold p-2 rounded-lg text-black hover:bg-gray-100 group"
                >
                  <Image
                    src={respuestas}
                    alt="bandeja de salida"
                    width={20}
                    height={20}
                    priority={false}
                  />
                  <span className="flex-1 ml-3 font-bold">Respuestas</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="/"
              className="flex items-center p-10 text-black hover:bg-gray-100 group"
            >
              <Image
                src={logout}
                alt="bandeja de salida"
                width={20}
                height={20}
                priority={false}
              />
              <span className="flex-1 ml-3 font-bold">Cerrar sesión</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
export default Navbar;
