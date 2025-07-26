export const WHATSAPP_PHONE = "+51956741343";

export const getGeneralMessage = () =>
  encodeURIComponent("Hola, estoy interesado en tus herramientas de ciclismo.");

export const getProductMessage = (productName: string) =>
  encodeURIComponent(
    `Hola, estoy interesado en el producto "${productName}" que vi en tu web.`
  );
