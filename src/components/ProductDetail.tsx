import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { getProductMessage, WHATSAPP_PHONE } from '../constants/whatsapp';
import type { Product } from '../types/product';

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const parsedId = Number(id);
        if (isNaN(parsedId)) return;

        import('../data/products.json')
            .then((res) => {
                const data = res.default.find((p: Product) => p.id === parsedId);
                if (data) {
                    setProduct(data);
                } else {
                    console.warn(`Producto con ID ${id} no encontrado`);
                }
            })
            .catch((err) => console.error('Error loading product:', err));
    }, [id]);

    if (!product) return <p className="text-gray-500">Cargando producto...</p>;

    const images = product.images || [product.image];
    const activeImage = images[activeImageIndex];

    const message = getProductMessage(product.name);
    const link = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

    const prevImage = () => {
        setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* === Galería completa: contenedor relativo === */}
                <div className="relative w-full max-w-full pr-4 sm:pr-6">
                    {/* === Imagen principal con Zoom === */}
                    <div className="relative h-[360px] sm:h-[400px] w-full flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden mb-4">
                        {/* Imagen con Zoom */}
                        <Zoom>
                            <img
                                src={activeImage}
                                alt={product.name}
                                className="h-full w-auto max-h-full object-contain cursor-zoom-in"
                            />
                        </Zoom>

                        {/* Flecha izquierda */}
                        <button
                            onClick={prevImage}
                            aria-label="Ver imagen anterior del producto"
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-2xl font-bold text-gray-800 shadow w-9 h-9 rounded-full flex items-center justify-center transition"
                        >
                            ‹
                        </button>

                        {/* Flecha derecha */}
                        <button
                            onClick={nextImage}
                            aria-label="Ver imagen siguiente del producto"
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-2xl font-bold text-gray-800 shadow w-9 h-9 rounded-full flex items-center justify-center transition"
                        >
                            ›
                        </button>
                    </div>

                    {/* === Miniaturas debajo === */}
                    <div className="grid grid-cols-3 gap-2">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Imagen ${idx + 1}`}
                                className={`rounded-lg h-24 object-cover cursor-pointer border-2 ${idx === activeImageIndex ? 'border-green-500' : 'border-transparent'}`}
                                onClick={() => setActiveImageIndex(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* === Info del producto === */}
                <div>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-xl text-green-600 font-semibold mb-4">{product.price}</p>

                    {product.description && <p className="mb-4 text-gray-800 dark:text-gray-200">{product.description}</p>}

                    {product.features && (
                        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mb-6">
                            {product.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    )}

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Comprar por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
