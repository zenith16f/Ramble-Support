import { toast } from "sonner";

export function Priority() {
  const showToast = () => {
    console.log("Hola");
    toast(
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-md z-50">
        A custom toast with default styling
      </div>
    );
  };

  return (
    <button
      className="bg-emerald-600 hover:bg-emerald-700 text-black font-sans py-2 px-4 rounded"
      onClick={showToast}
    >
      Cambiar estatus
    </button>
  );
}
