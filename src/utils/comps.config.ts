export type NavLink = {
  link: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

export const navLinks: NavLink[] = [
  {
    link: "Servicios",
    href: "/services",
    submenu: [
      { name: "Todos los Servicios", href: "/services" },
      { name: "HVAC", href: "/services/hvac" },
      { name: "Instalaciones Eléctricas", href: "/services/electric" },
      { name: "Eficacia Energética", href: "/services/efficiency" },
      { name: "Refacciones", href: "/services/refac" },
      { name: "Pintura Electroestática", href: "/services/electrostatic" },
      { name: "Ingeniería a Detalle", href: "/services/engineering" },
    ],
  },
  {
    link: "Chillers",
    href: "/products/chillers",
    submenu: [{ name: "Todos los Chillers", href: "/products/chillers" }],
  },
  { link: "Nosotros", href: "/about-us" },
  { link: "Proyectos", href: "/projects" },
  { link: "Contacto", href: "/contact" },
];

export type ProjectType = {
  img: string;
  title: string;
  link?: string;
};

export const gridProjects: ProjectType[] = [
  {
    img: "https://placehold.co/400x300",
    title: "HVAC para Industria de Papel y la Higiene",
    link: "/projects/paper",
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
    img: "/Serv-1.webp",
    title: "Instalación y Mantenimiento de Chillers",
    description: "Para aplicaciones industriales y comerciales",
    link: "/services/hvac",
  },
  {
    img: "/Serv-2.webp",
    title: "Instalaciones Eléctricas",
    description: "Soluciones eléctricas confiables y seguras para tu proyecto.",
    link: "/services/electric",
  },
  {
    img: "/Serv-3.webp",
    title: "Trabajos de Pintura Industrial",
    description: "Acabado profesional y protección avanzada para tus equipos.",
    link: "/services/engineering",
  },
];

export const servicesElec = [
  {
    id: "armado",
    label: "Armado de tableros",
    highlights: [
      {
        title: "Infraestructura Confiable",
        text: "Diseñamos tableros de control con componentes de la más alta calidad, asegurando tolerancias precisas y fácil mantenimiento.",
      },
      {
        title: "Integración Óptima",
        text: "Adaptamos cada tablero a tu layout y sistema eléctrico, para una instalación rápida y sin contratiempos.",
      },
    ],
    brands: [
      {
        name: "Schneider Electric",
        logo: "https://placehold.co/100x40?text=Schneider+Electric",
      },
      { name: "Siemens", logo: "https://placehold.co/100x40?text=Siemens" },
    ],
  },
  {
    id: "cableado",
    label: "Cableado",
    highlights: [
      {
        title: "Cableado Estructurado",
        text: "Implementamos cableado CAT6 y fibra óptica cumpliendo normas TIA/EIA para redes de datos y comunicaciones.",
      },
      {
        title: "Potencia Segura",
        text: "Instalamos rutas y acometidas de potencia con canalizaciones metálicas y aislantes de alta resistencia.",
      },
    ],
    brands: [
      { name: "Panduit", logo: "https://placehold.co/100x40?text=Panduit" },
      { name: "Legrand", logo: "https://placehold.co/100x40?text=Legrand" },
    ],
  },
  {
    id: "charola",
    label: "Instalación de charola",
    highlights: [
      {
        title: "Soporte Robusto",
        text: "Proveemos charolas portacables de acero galvanizado para soportar grandes cargas y resistir ambientes corrosivos.",
      },
      {
        title: "Diseño a Medida",
        text: "Cortamos y doblamos en sitio según tu diseño, optimizando espacio y facilitando futuras ampliaciones.",
      },
    ],
    brands: [
      { name: "Erico", logo: "https://placehold.co/100x40?text=Erico" },
      {
        name: "OBO Bettermann",
        logo: "https://placehold.co/100x40?text=OBO+Bettermann",
      },
    ],
  },
  {
    id: "conduit",
    label: "Tubería conduit",
    highlights: [
      {
        title: "Instalación Segura",
        text: "Realizamos rutas con tubería conduit metálica y plástica, garantizando protección mecánica y eléctrica.",
      },
      {
        title: "Protección Robusta",
        text: "Aseguramos sellado y fijación correctos para prevenir humedad y vibraciones en entornos industriales.",
      },
    ],
    brands: [
      {
        name: "Example Co",
        logo: "https://placehold.co/100x40?text=Example+Co",
      },
      {
        name: "Sample Inc",
        logo: "https://placehold.co/100x40?text=Sample+Inc",
      },
    ],
  },
  {
    id: "neumatica",
    label: "Tubería neumática",
    highlights: [
      {
        title: "Flujo Óptimo",
        text: "Instalamos tuberías de aire comprimido con conexiones de alta estanqueidad para minimizar pérdidas.",
      },
      {
        title: "Montaje Preciso",
        text: "Diseñamos rutas sin fugas y con un enrutamiento eficiente para facilitar mantenimiento y futuras ampliaciones.",
      },
    ],
    brands: [
      { name: "AirTech", logo: "https://placehold.co/100x40?text=AirTech" },
      { name: "PneuCorp", logo: "https://placehold.co/100x40?text=PneuCorp" },
    ],
  },
];

export const servicesRefac = [
  {
    id: "equipo-refrigeracion",
    label: "Equipo de Refrigeración",
    highlights: [
      {
        title: "Refacciones Originales",
        text: "Suministro de piezas originales para chillers y sistemas de enfriamiento, garantizando compatibilidad 100%.",
      },
      {
        title: "Mantenimiento Preventivo",
        text: "Kits de refacciones recomendados según horas de operación, para maximizar la vida útil del equipo.",
      },
    ],
    brands: [
      { name: "Marca A", logo: "https://placehold.co/100x40?text=Marca+A" },
      { name: "Marca B", logo: "https://placehold.co/100x40?text=Marca+B" },
    ],
  },
  {
    id: "equipo-electrico",
    label: "Equipo Eléctrico",
    highlights: [
      {
        title: "Componentes de Control",
        text: "Contactores, relés y fusibles de alta calidad para tableros y sistemas de potencia.",
      },
      {
        title: "Accesorios Seguros",
        text: "Terminales, conectores y canalizaciones certificados que cumplen normas eléctricas internacionales.",
      },
    ],
    brands: [
      { name: "Marca C", logo: "https://placehold.co/100x40?text=Marca+C" },
      { name: "Marca D", logo: "https://placehold.co/100x40?text=Marca+D" },
    ],
  },
];

export const servicesEng = [
  {
    id: "ingenierias-electricas-e-hidrosanitarias",
    label: "Ingenierías eléctricas e hidrosanitarias",
    highlights: [
      {
        title: "",
        text: "Diseño y cálculo de instalaciones eléctricas e hidrosanitarias, asegurando cumplimiento de normativas y eficiencia operativa.",
      },
    ],
    brands: [
      { name: "Autodesk", logo: "https://placehold.co/100x40?text=Autodesk" },
      { name: "Trimble", logo: "https://placehold.co/100x40?text=Trimble" },
    ],
  },
  {
    id: "planos-catalogos-de-conceptos",
    label: "Planos y catálogos de conceptos",
    highlights: [
      {
        title: "",
        text: "Elaboración de planos detallados y catálogos de conceptos para facilitar la comprensión y aprobación de proyectos.",
      },
    ],
    brands: [
      { name: "Autodesk", logo: "https://placehold.co/100x40?text=Autodesk" },
      { name: "Trimble", logo: "https://placehold.co/100x40?text=Trimble" },
    ],
  },
  {
    id: "hojas-de-calculo",
    label: "Hojas de cálculo",
    highlights: [
      {
        title: "",
        text: "Desarrollo de hojas de cálculo personalizadas para dimensionamiento, presupuestos y análisis de costos, minimizando errores.",
      },
    ],
    brands: [
      { name: "Autodesk", logo: "https://placehold.co/100x40?text=Autodesk" },
      { name: "Trimble", logo: "https://placehold.co/100x40?text=Trimble" },
    ],
  },
  {
    id: "seleccion-de-equipos",
    label: "Selección de equipos",
    highlights: [
      {
        title: "",
        text: "Asesoría en selección de equipos y materiales, eligiendo las mejores opciones según carga, eficiencia energética y presupuesto.",
      },
    ],
    brands: [
      { name: "Autodesk", logo: "https://placehold.co/100x40?text=Autodesk" },
      { name: "Trimble", logo: "https://placehold.co/100x40?text=Trimble" },
    ],
  },
  {
    id: "distribucion",
    label: "Distribución",
    highlights: [
      {
        title: "",
        text: "Diagramas de distribución de sistemas y rutas de instalación para optimizar espacio y garantizar seguridad y accesibilidad.",
      },
    ],
    brands: [
      { name: "Autodesk", logo: "https://placehold.co/100x40?text=Autodesk" },
      { name: "Trimble", logo: "https://placehold.co/100x40?text=Trimble" },
    ],
  },
];
