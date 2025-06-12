import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

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
}

const ProductList: React.FC<ProductListProps> = ({ category, limit }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        import('../data/products.json')
            .then((res) => {
                let data = res.default;

                if (category) {
                    data = data.filter((p) => p.category === category);
                }

                if (limit) {
                    data = data.slice(-limit); // últimos N productos
                }

                setProducts(data);
            })
            .catch((err) => console.error('Error loading products:', err));
    }, [category, limit]);

    if (products.length === 0) {
        return <p className="text-gray-500">No hay productos disponibles.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
