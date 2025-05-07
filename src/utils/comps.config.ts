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
      { name: "Todos los Servicios", href: "/services" },
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
};

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
];

export type BrandsType = {
  name: string;
  logo: string;
};

export type HighlightType = {
  title: string;
  text: string;
};

export const brandsHvac: BrandsType[] = [
  {
    name: "Carrier",
    logo: "https://placehold.co/100x40?text=Carrier",
  },
  {
    name: "Trane",
    logo: "https://placehold.co/100x40?text=Trane",
  },
  {
    name: "Honeywell",
    logo: "https://placehold.co/100x40?text=Honeywell",
  },
  {
    name: "Daikin",
    logo: "https://placehold.co/100x40?text=Daikin",
  },
];

export const highlightsHvac: HighlightType[] = [
  {
    title: "Compromiso con la Innovación y Calidad",
    text: "Con más de una década de experiencia, nos mantenemos a la vanguardia...on más de una década de experiencia, nos mantenemos a la vanguardia...",
  },
  {
    title: "Atención Integral y Soporte Continuo",
    text: "Desde la selección e instalación hasta el mantenimiento y reparación, brindamos un servicio completo. Nuestro compromiso es asegurar el funcionamiento ininterrumpido de tus sistemas, ofreciendo soport etécnico y suministro de refacciones cuando lo necesites. ",
  },
];

export const highlightsElec: HighlightType[] = [
  {
    title: "Infraestructura Eléctrica Confiable",
    text: "Diseñamos e implementamos instalaciones eléctricas de alto desempeño, asegurando la correcta integración entre sistemas, seguridad operativa y continuidad en tus procesos.",
  },
  {
    title: "Soluciones Integrales a tu Medida",
    text: "Desde la planeación y ejecución hasta las pruebas finales, en MAZ ofrecemos un servicio eléctrico completo, enfocado en brindar eficiencia, adaptabilidad y soporte técnico especializado para cada proyecto.",
  },
];

export const highlightsEng: HighlightType[] = [
  {
    title: "Ingeniería con Visión Estratégica",
    text: "Desarrollamos proyectos de ingeniería pensados para optimizar recursos, integrar tecnologías y asegurar resultados tangibles en cada etapa del proceso.",
  },
  {
    title: "Soluciones Eficientes y Personalizadas",
    text: "Cada proyecto es único. En MAZ diseñamos soluciones a medida, combinando precisión técnica con una visión estratégica que responde a las necesidades reales de tu operación.",
  },
];

export type ServicesType = {
  img: string;
  title: string;
  description: string;
  link: string;
};

export const services: ServicesType[] = [
  {
    img: "/Serv-1.jpg",
    title: "Instalación y Mantenimiento de Chillers",
    description: "Para aplicaciones industriales y comerciales",
    link: "/services/hvac",
  },
  {
    img: "/Serv-2.jpg",
    title: "Instalaciones Eléctricas",
    description: "Soluciones eléctricas confiables y seguras para tu proyecto.",
    link: "/services/electric",
  },
  {
    img: "/Serv-3.jpg",
    title: "Trabajos de Pintura Industrial",
    description: "Acabado profesional y protección avanzada para tus equipos.",
    link: "/services/engineering",
  },
];
