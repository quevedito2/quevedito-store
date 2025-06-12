import React from 'react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => (
    <div>
        <section
            className="relative h-[45vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: 'url(/assets/banner/mtb-banner.png)' }}
        >
            <div className="bg-black/60 absolute inset-0"></div>
            <h2 className="relative z-10 text-4xl font-extrabold drop-shadow-lg">
                Nuevo Ingreso
            </h2>
        </section>

        <div className="bg-gray-900 text-white py-8 px-4">
            <h3 className="text-xl font-semibold mb-2 text-center">
                Herramientas recién llegadas para profesionales
            </h3>
            <p className="text-gray-400 text-center mb-6">
                Directo desde proveedores de alto rendimiento para talleres y ciclistas exigentes
            </p>

            <div className="max-w-7xl mx-auto">
                <ProductList limit={2} />
            </div>
        </div>
    </div>
);

export default Home;
