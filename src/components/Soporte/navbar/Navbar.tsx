"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-xl flex bg-neutral-400 items-center justify-between">
      <div className={styles.title}>{pathname.split("/").pop()}</div>
    </div>
  );
};

export default Navbar;
