"use client";
import data from "@/app/information.json";
import Pagination from "@/components/Pagination/pagination.jsx";
import { useState } from "react";
import { Soporte as sop } from "@/interfaces/soporteid";
import Link from "next/link";

const Soporte = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const handlePageChange = (page: any) => setCurrentPage(page);
  const paginateData = (items: sop[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedData = paginateData(data, currentPage, pageSize);
  const onClick = (item: sop) => {
    localStorage.setItem("data", JSON.stringify(item));
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-6 rounded-lg">
          <div className="p-4 rounded-lg">
            <div className="flex py-4 px-8 font-bold items-center justify-start mb-4 dark:bg-neutral-400">
              <p className="text-2xl text-gray-400 dark:text-black inline-block">
                Bandeja
              </p>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center items-center mb-4 dark:bg-neutral-400">
            <div className="container mx-auto py-8">
              <table className="w-full rounded-lg">
                <thead>
                  <tr>
                    <th className="text-left p-4">Asunto</th>
                    <th className="text-left p-4">Remitente</th>
                    <th className="text-center p-4">Prioridad</th>
                    <th className="text-center p-4">Fecha de envío</th>
                    <th className="text-center p-4">Estado</th>
                    <th className="text-center p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item: any, index: number) => (
                    <>
                      <tr key={index}>
                        <td className="p-4">{item.subject}</td>
                        <td className="p-4">{item.sender}</td>
                        <td className="p-4 text-center">{item.priority}</td>
                        <td className="p-4 text-center">{item.date_send}</td>
                        <td className="p-4 text-center">{item.status}</td>

                        <td className="p-4 text-center">
                          <button
                            className="bg-emerald-600 hover:bg-green-800 text-black py-2 px-4 rounded"
                            onClick={() => onClick(item)}
                          >
                            <Link href={"/ramble/soporte/unico"}>
                              Detalles
                            </Link>
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
              <Pagination
                items={data.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soporte;
