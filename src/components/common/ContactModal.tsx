import { useState, useEffect } from "react";
import ContactForm from "@/src/components/common/ContactForm";

declare global {
  interface Window {
    openContactModal: () => void;
  }
}

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    window.openContactModal = () => {
      setClosing(false);
      setIsOpen(true);
    };
  });

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/60 flex items-center justify-center transition-all duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative bg-white text-[#24408d] w-full max-w-3xl rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] transform transition-all duration-300 ${
          closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <div className="p-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
