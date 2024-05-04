import React from "react";
import { PriorityModalProps } from "@/interfaces/Modal";

export const PriorityModal = ({
  isVisible,
  onClose,
  children,
}: PriorityModalProps) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "priority") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
      onClick={handleClose}
      id="priority"
    >
      <div className="w-[1000px] h-[600px] bg-stone-300 rounded-lg overflow-hidden p-2">
        <button
          className="text-gray-600 text-xl p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-300 ease-in-out absolute top-2 right-2"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
