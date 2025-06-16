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

      <div className="mb-4 grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Buscar herramienta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />

        {/* Agrupar precios */}
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Precio mínimo"
            value={minPrice ?? ''}
            onChange={(e) =>
              setMinPrice(e.target.value === '' ? undefined : Number(e.target.value))
            }
            className="p-2 border rounded w-full"
          />
          <input
            type="number"
            placeholder="Precio máximo"
            value={maxPrice ?? ''}
            onChange={(e) =>
              setMaxPrice(e.target.value === '' ? undefined : Number(e.target.value))
            }
            className="p-2 border rounded w-full"
          />
        </div>

        <select
          className="p-2 border rounded w-full"
          value={sortOrder ?? ''}
          onChange={(e) =>
            setSortOrder(e.target.value === '' ? undefined : (e.target.value as 'asc' | 'desc'))
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
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full sm:w-auto"
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
