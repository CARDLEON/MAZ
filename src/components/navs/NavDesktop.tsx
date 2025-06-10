import type { NavLink } from "@/src/utils/comps.config";
import clsx from "clsx";

interface NavDesktopProps {
  links: NavLink[];
}

export default function NavDesktop({ links }: NavDesktopProps) {
  return (
    <ul className="hidden md:flex gap-6 md:gap-8 text-[12pt] items-center">
      {links.map(({ link, href, submenu }) => (
        <li key={link} className="relative group">
          <a
            href={href}
            className="font-semibold flex items-center gap-2 hover:underline underline-offset-4 transition-colors"
          >
            {link}
            {submenu && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </a>

          {submenu && (
            <ul className="opacity-0 translate-y-4 pointer-events-none transition-all duration-200 ease-in-out absolute left-0 mt-2 bg-white text-[#24408d] rounded-md shadow-lg min-w-[240px] border border-gray-200 z-50 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
              {submenu.map(({ name, href }, i) => (
                <li key={name}>
                  <a
                    href={href}
                    className={clsx(
                      "block px-4 py-2 transition-colors duration-200 hover:bg-[#24408d] hover:text-white hover:rounded-md",
                      i === 0 && "border-b border-gray-300 font-semibold"
                    )}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
