// src/utils/filterProducts.ts

import type { Product, FilterOptions } from "../types/product";

export function filterProducts(
  products: Product[],
  options: FilterOptions
): Product[] {
  let filtered = [...products];

  if (options.category) {
    filtered = filtered.filter((p) => p.category === options.category);
  }

  const term = options.searchTerm?.trim().toLowerCase();
  if (term) {
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(term));
  }

  if (options.minPrice !== undefined) {
    filtered = filtered.filter(
      (p) => parseFloat(p.price.replace("S/ ", "")) >= options.minPrice!
    );
  }

  if (options.maxPrice !== undefined) {
    filtered = filtered.filter(
      (p) => parseFloat(p.price.replace("S/ ", "")) <= options.maxPrice!
    );
  }

  if (options.sortOrder) {
    filtered.sort((a, b) => {
      const priceA = parseFloat(a.price.replace("S/ ", ""));
      const priceB = parseFloat(b.price.replace("S/ ", ""));
      return options.sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  }

  if (options.limit) {
    filtered = filtered.slice(-options.limit);
  }

  return filtered;
}
