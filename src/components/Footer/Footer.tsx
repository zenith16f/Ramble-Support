"use client";
import Link from "next/link";
import ItemsContainer from "./ItemsContainer";

function Footer() {
  // Year
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coffee-900 text-white">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© {year} Ramble. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
