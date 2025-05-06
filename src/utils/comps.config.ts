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

export type ProductsType = {
  img: string;
  title: string;
  description: string;
  link: string;
  isFeatured?: boolean;
  badgeText?: string;
};

export const gridProducts: ProductsType[] = [
  {
    img: "https://placehold.co/300x300?text=AeroChill",
    title: "AeroChill",
    description:
      "Ofrece un rendimiento excepcional con tecnología avanzada para un enfriamiento más eficiente y sostenible.",
    link: "/products/product/aerochill",
    isFeatured: true,
    badgeText: "Más vendido",
  },
  {
    img: "https://placehold.co/300x300?text=Clima+Comfort",
    title: "Clima Comfort",
    description:
      "Sistema compacto ideal para climatizar espacios reducidos de manera eficiente.",
    link: "/products/product/comfort",
    isFeatured: true,
    badgeText: "20% de descuento",
  },
  {
    img: "https://placehold.co/300x300?text=AeroChill",
    title: "AeroChill",
    description: "Tecnología de vanguardia para máxima eficiencia.",
    link: "/products/product/aerochill",
  },
  {
    img: "https://placehold.co/300x300?text=FrostWave",
    title: "FrostWave",
    description: "Excelente desempeño en condiciones industriales exigentes.",
    link: "/products/product/frostwave",
  },
  {
    img: "https://placehold.co/300x300?text=ZephyrCool",
    title: "ZephyrCool",
    description: "Alta capacidad de enfriamiento y ahorro energético.",
    link: "/products/product/zephyr",
  },
  {
    img: "https://placehold.co/300x300?text=PolarAir",
    title: "PolarAir",
    description: "Solución compacta para climatización eficiente y sostenible.",
    link: "/products/product/polar",
  },
];

export type ProjectType = {
  img: string;
  title: string;
  link?: string;
}

export const gridProjects: ProjectType[] = [
  {
    img: "https://placehold.co/400x300",
    title: "Solución de climatización para el hogar",
    link: "#",
  },
  {
    img: "https://placehold.co/400x300",
    title: "Solución HVAC para oficinas",
    link: "#",
  },
  {
    img: "https://placehold.co/400x300",
    title: "Compre soluciones HVAC",
    link: "#",
  },
  {
    img: "https://placehold.co/400x300",
    title: "Solución HVAC para el sector sanitario",
    link: "#",
  },
  {
    img: "https://placehold.co/400x300",
    title: "Solución HVAC para restaurantes",
    link: "#",
  },
  {
    img: "https://placehold.co/400x300",
    title: "Solución de climatización escolar",
    link: "#",
  },
]