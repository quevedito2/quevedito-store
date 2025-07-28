import React from "react";
import type { FilterOptions } from "../types/product";

interface FilterBarProps extends Pick<FilterOptions, "searchTerm" | "minPrice" | "maxPrice" | "sortOrder"> {
    setSearch: (value: string) => void;
    setMinPrice: (value?: number) => void;
    setMaxPrice: (value?: number) => void;
    setSortOrder: (value?: "asc" | "desc") => void;
    onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
    searchTerm,
    setSearch,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    sortOrder,
    setSortOrder,
    onClearFilters,
}) => {
    return (
        <>
            <div className="mb-4 grid gap-4 md:grid-cols-4">
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={searchTerm}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border rounded w-full"
                />

                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Precio mínimo"
                        value={minPrice ?? ""}
                        onChange={(e) =>
                            setMinPrice(e.target.value === "" ? undefined : Number(e.target.value))
                        }
                        className="p-2 border rounded w-full"
                    />
                    <input
                        type="number"
                        placeholder="Precio máximo"
                        value={maxPrice ?? ""}
                        onChange={(e) =>
                            setMaxPrice(e.target.value === "" ? undefined : Number(e.target.value))
                        }
                        className="p-2 border rounded w-full"
                    />
                </div>

                <select
                    className="p-2 border rounded w-full"
                    value={sortOrder ?? ""}
                    onChange={(e) =>
                        setSortOrder(e.target.value === "" ? undefined : (e.target.value as "asc" | "desc"))
                    }
                >
                    <option value="">Ordenar por precio</option>
                    <option value="asc">Menor a mayor</option>
                    <option value="desc">Mayor a menor</option>
                </select>
            </div>

            <div className="mb-6">
                <button
                    onClick={onClearFilters}
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full sm:w-auto cursor-pointer"
                >
                    Limpiar filtros
                </button>
            </div>
        </>
    );
};

export default FilterBar;