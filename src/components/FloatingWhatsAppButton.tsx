import React from "react";
import Lottie from "lottie-react";
import whatsappAnimation from "../assets/icons/whatsapp-lottie.json";
import { WHATSAPP_PHONE, getGeneralMessage } from "../constants/whatsapp";

const FloatingWhatsAppButton: React.FC = () => {
  const link = `https://wa.me/${WHATSAPP_PHONE}?text=${getGeneralMessage()}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-16 h-16"
    >
      <Lottie
        animationData={whatsappAnimation}
        loop
        autoplay
        className="w-16 h-16 hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
