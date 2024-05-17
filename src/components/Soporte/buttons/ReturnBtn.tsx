import { ReturnProps } from "@/interfaces/Components";
import Link from "next/link";

const ReturnBtn = ({ enlace }: ReturnProps) => {
  return (
    <Link
      href={`${enlace}`}
      className="bg-slate-500 flex items-center justify-center hover:bg-slate-700 hover:text-white text-black py-2 px-4 rounded duration-3 duration-300"
    >
      Regresar
    </Link>
  );
};

export default ReturnBtn;
