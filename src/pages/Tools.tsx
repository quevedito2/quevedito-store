import React from 'react';
import ProductList from '../components/ProductList';

const Tools: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Herramientas</h2>
        <ProductList category="tools" />
    </div>
);

export default Tools;
