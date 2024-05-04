import React from "react";
import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(items.length / pageSize);
  if (pageCount === 1) return null;

  return (
    <nav className="flex justify-center mt-4">
      <ul class="flex space-x-4 px-8 w-full justify-between">
        <li>
          <button
            className="px-3 py-1 rounded-full bg-blue-300 text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
        </li>
        <li>
          <button
            className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
