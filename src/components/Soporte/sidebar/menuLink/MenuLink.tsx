"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuLinkInterface } from "./menu.interface";
import styles from "./menuLink.module.css";

const MenuLink = ({ item }: MenuLinkInterface) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${pathname === item.path ? styles.active : ""}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
