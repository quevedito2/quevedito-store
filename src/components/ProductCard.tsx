import React from 'react';

interface ProductCardProps {
    id: number;
    name: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
    const generateWhatsAppLink = (productName: string) => {
        const number = '+51956741343'; // ← coloca aquí tu número de WhatsApp sin espacios
        const message = encodeURIComponent(`Hola, estoy interesado en el producto "${productName}" que vi en la web.`);
        return `https://wa.me/${number}?text=${message}`;
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
                <p className="text-gray-600 mb-2">{price}</p>
                <a
                    href={generateWhatsAppLink(name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
                >
                    Comprar por WhatsApp
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
