import Item from "./Item";
import { About, Help, Legal, Social } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-8">
      <Item
        Links={About}
        title="ACERCA DE"
      />
      <Item
        Links={Help}
        title="CLIENTES"
      />
      <Item
        Links={Legal}
        title="LEGAL"
      />
      <Item
        Links={Social}
        title="NUESTRAS REDES SOCIALES"
      />
    </div>
  );
};

export default ItemsContainer;
