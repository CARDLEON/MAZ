export type SubmenuType = {
  name: string;
  href: string;
}

export type NavLink = {
  link: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

export const navLinks: NavLink[] = [
  {
    link: "Servicios",
    href: "#",
    submenu: [
      { name: "HVAC", href: "/services/hvac" },
      { name: "Instalaciones eléctricas", href: "/services/electric" },
      { name: "Servicios de Ingeniería", href: "/services/engineering" },
    ],
  },
  {
    link: "Productos",
    href: "#",
    submenu: [
      { name: "Todos los Productos", href: "/products" },
      { name: "Chillers", href: "/products/chillers" },
      { name: "Equipos TVR y Tableros", href: "/products/tvr" },
      { name: "Torres de Enfriamiento", href: "/products/cooling" },
      { name: "Equipos Paquete y Div", href: "/products/divpackage" },
      { name: "Bombas Centrífugas", href: "/products/pumps" },
      { name: "Tubería Hidráulica", href: "/products/hidraulic" },
    ],
  },
  { link: "Nosotros", href: "/about-us" },
  { link: "Proyectos", href: "/projects" },
  { link: "Contacto", href: "/contact" },
];
