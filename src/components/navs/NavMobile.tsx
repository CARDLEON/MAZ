import type { NavLink } from "@/src/utils/comps.config";
import clsx from "clsx";

interface NavMobileProps {
  links: NavLink[];
  menuOpen: boolean;
  variant: "white" | "default";
}

export default function NavMobile({
  links,
  menuOpen,
  variant,
}: NavMobileProps) {
  return (
    <div
      id="mobile-menu"
      className={clsx(
        "fixed left-0 w-full z-40 transition-all duration-500 ease-in-out overflow-hidden md:hidden",
        // variant === "white" ? "top-0" : "top-[17dvh]",
        menuOpen
          ? "max-h-[800px] opacity-100 bg-white text-[#24408d]"
          : "max-h-0 opacity-0"
      )}
    >
      <ul
        className={clsx(
          "flex flex-col text-lg transition-all duration-300",
          variant === "white" ? "mt-0" : "mt-[15dvh]"
        )}
      >
        {links.map(({ link, href, submenu }) => (
          <li key={link} className="border-b border-gray-200">
            <div className="flex flex-col">
              {submenu ? (
                <>
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left"
                    onClick={(e) => {
                      const submenuElement = e.currentTarget
                        .closest("div")
                        ?.querySelector("ul");
                      if (submenuElement) {
                        submenuElement.classList.toggle("hidden");
                      }
                    }}
                  >
                    <span>{link}</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <ul className="hidden flex-col bg-gray-100">
                    {submenu.map(({ name, href }) => (
                      <li key={name}>
                        <a
                          href={href}
                          className="block px-8 py-2 hover:bg-[#24408d] hover:text-white"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={href}
                  className="px-6 py-4 text-sm text-[#24408d] hover:underline"
                >
                  {link}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="p-4">
        <a
          onClick={() => window?.openContactModal?.()}
          className="block font-semibold text-center bg-[#24408d] text-white py-2 rounded-md"
        >
          Cotiza ahora
        </a>
      </div>
    </div>
  );
}
