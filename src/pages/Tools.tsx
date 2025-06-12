import React, { useState } from "react";
import ProductList from "../components/ProductList";

const Tools: React.FC = () => {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>();

  const clearFilters = () => {
    setSearch("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSortOrder(undefined);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Herramientas</h2>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Buscar herramienta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Precio mínimo"
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Precio máximo"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="p-2 border rounded"
        />

        <select
          className="p-2 border rounded"
          value={sortOrder ?? ""}
          onChange={(e) =>
            setSortOrder(
              e.target.value === ""
                ? undefined
                : (e.target.value as "asc" | "desc")
            )
          }
        >
          <option value="">Ordenar por precio</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
      </div>

      <div className="mb-6">
        <button
          onClick={clearFilters}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Limpiar filtros
        </button>
      </div>

      <ProductList
        category="tools"
        searchTerm={search}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default Tools;
