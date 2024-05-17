"use client";
import { signOut } from "next-auth/react";
import Image from "next/legacy/image";
import { HiTicket } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { TbCheckupList } from "react-icons/tb";
import MenuLink from "./menuLink/MenuLink";
import styles from "./sidebar.module.css";

const menuItems = [
  {
    title: "Paginas",
    list: [
      {
        title: "Tickets",
        path: "/support/tickets",
        icon: <HiTicket size={25} />,
      },
      {
        title: "Soluciones",
        path: "/support/soluciones",
        icon: <TbCheckupList size={25} />,
      },
      {
        title: "Mis Tickets",
        path: "/support/asignaciones",
        icon: <PiUserListFill size={25} />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-10 text-black">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src={"/RambleLogo.svg"}
          alt="Ramble Logo"
          width={50}
          height={50}
          className="rounded-mid object-cover"
        />
        <div className={styles.userDetail}>
          <span className="font-medium text-2xl">Ramble</span>
        </div>
      </div>
      <ul className="list-none text-lg">
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className={`${styles.cat}`}>{item.title}</span>
            {item.list.map((item) => (
              <MenuLink
                item={item}
                key={item.title}
              />
            ))}
          </li>
        ))}
      </ul>
      <form className="text-lg">
        <button
          className={styles.logout}
          onClick={() => signOut()}
        >
          <MdLogout />
          Cerrar Sesión
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
