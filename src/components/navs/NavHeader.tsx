"use client";

import ContactModal from "@/src/components/common/ContactModal";
import type { ReactNode } from "react";

interface NavHeaderProps {
  variant?: "white" | "default";
  children: ReactNode;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function NavHeader({
  variant = "default",
  children,
  menuOpen,
  setMenuOpen,
}: NavHeaderProps) {
  const logoSrc =
    variant === "white" || menuOpen
      ? "/Logo-MAZ-Azul.webp"
      : "/Logo-MAZ-Blanco.webp";

  const iconStroke = variant === "white" || menuOpen ? "#24408d" : "#fff";

  return (
    <>
      <ContactModal />

      <div className="flex items-center justify-between w-full">
        {/* Logo MAZ */}
        <a href="/">
          <img
            id="nav-img"
            src={logoSrc}
            alt="Logo MAZ"
            className="w-40 md:w-28 lg:w-40 transition-all duration-300"
            width={160}
            height={60}
          />
        </a>

        {/* Menú hamburguesa mobile */}
        <button
          id="menu-toggle"
          className="md:hidden focus:outline-none"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            id="menu-icon"
            className="w-8 h-8"
            fill="none"
            stroke={iconStroke}
            viewBox="0 0 24 24"
          >
            <path
              id="menu-icon-path"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>

        {/* Enlaces (NavDesktop como children) */}
        {children}

        {/* Botón Cotiza ahora */}
        <a
          id="nav-btn"
          className="hidden font-semibold text-[16px] md:block bg-[#24408d] text-white px-[20px] py-[8px] rounded-md transition-colors duration-300 cursor-pointer text-center"
          onClick={() => window?.openContactModal?.()}
        >
          Cotiza ahora
        </a>
      </div>
    </>
  );
}
