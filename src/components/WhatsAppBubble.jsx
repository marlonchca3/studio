import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
  const message = encodeURIComponent(
    "Hola, vengo de PUROINTERNET y quiero solicitar una cotizacion."
  );

  return (
    <a
      href={`https://wa.me/51916136979?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-neutral-950/25 transition hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="h-8 w-8 sm:h-9 sm:w-9" />
    </a>
  );
};

export default WhatsAppBubble;
