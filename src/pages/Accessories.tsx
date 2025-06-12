import React from 'react';
import ProductList from '../components/ProductList';

const Accessories: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Accesorios</h2>
        <ProductList category="accessories" />
    </div>
);

export default Accessories;
