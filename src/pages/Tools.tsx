import React, { useState } from "react";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

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

      <FilterBar
        search={search}
        setSearch={setSearch}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onClearFilters={clearFilters}
      />

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
