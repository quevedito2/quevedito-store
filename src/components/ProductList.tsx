import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

interface ProductListProps {
  category?: string;
  limit?: number;
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  sortOrder?: "asc" | "desc";
}

const ProductList: React.FC<ProductListProps> = ({
  category,
  limit,
  searchTerm,
  minPrice,
  maxPrice,
  sortOrder,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    import("../data/products.json")
      .then((res) => {
        let data = res.default;

        if (category) {
          data = data.filter((p) => p.category === category);
        }

        if (searchTerm) {
          data = data.filter((p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        if (minPrice !== undefined) {
          data = data.filter(
            (p) => parseFloat(p.price.replace("S/ ", "")) >= minPrice
          );
        }

        if (maxPrice !== undefined) {
          data = data.filter(
            (p) => parseFloat(p.price.replace("S/ ", "")) <= maxPrice
          );
        }

        if (limit) {
          data = data.slice(-limit);
        }

        if (sortOrder) {
          data = data.sort((a, b) => {
            const priceA = parseFloat(a.price.replace("S/ ", ""));
            const priceB = parseFloat(b.price.replace("S/ ", ""));
            return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
          });
        }

        setProducts(data);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, [category, limit, searchTerm, minPrice, maxPrice, sortOrder]);

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        <img
          src="/assets/no-results.png"
          alt="Sin resultados"
          className="mx-auto mb-4 w-40 h-40 opacity-70"
        />
        <p className="text-lg font-semibold">No se encontraron productos</p>
        <p className="text-sm text-gray-500">Prueba ajustando los filtros o buscando otra palabra clave.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
