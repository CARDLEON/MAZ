"use client";

import { useState } from "react";
import clsx from "clsx";
import NavHeader from "./NavHeader";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import { navLinks } from "@/src/utils/comps.config";

interface NavProps {
  variant?: "white" | "default";
}

export default function Nav({ variant = "default" }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        id="main-nav"
        data-variant={variant}
        className={clsx(
          "w-full h-[15dvh] z-50 flex items-center justify-between text-[12px] px-4 2xl:px-[12rem] lg:px-[4rem] transition-colors duration-200 ease-in-out",
          variant === "white"
            ? "fixed top-0 bg-white text-[#24408d] border-b"
            : "fixed md:top-8 bg-transparent text-white"
        )}
      >
        <NavHeader
          variant={variant}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        >
          <NavDesktop links={navLinks} />
        </NavHeader>
      </nav>

      <NavMobile links={navLinks} menuOpen={menuOpen} variant={variant} />
    </>
  );
}
