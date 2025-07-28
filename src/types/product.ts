export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  images?: string[];
  description?: string;
  features?: string[];
}

export interface FilterOptions {
  category?: string;
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  sortOrder?: "asc" | "desc";
  limit?: number;
}

export const ProductCategory = {
  Tools: "tools",
  Accessories: "accessories",
} as const;

export type ProductCategory =
  (typeof ProductCategory)[keyof typeof ProductCategory];
