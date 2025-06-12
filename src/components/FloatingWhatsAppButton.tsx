import React from 'react';
import Lottie from 'lottie-react';
import whatsappAnimation from '../assets/icons/whatsapp-lottie.json';

const FloatingWhatsAppButton: React.FC = () => {
    const phone = '+51956741343'; // tu número real
    const message = encodeURIComponent('Hola, estoy interesado en tus herramientas de ciclismo.');
    const link = `https://wa.me/${phone}?text=${message}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 w-16 h-16"
        >
            <Lottie animationData={whatsappAnimation} loop autoplay />
        </a>
    );
};

export default FloatingWhatsAppButton;
