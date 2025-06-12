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
    return <p className="text-gray-500">No hay productos disponibles.</p>;
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
