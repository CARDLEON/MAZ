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
      { name: "Chillers", href: "/services/chillers" },
      { name: "HVAC", href: "/services/hvac" },
      { name: "Instalaciones Eléctricas", href: "/services/electric" },
      { name: "Eficacia Energética", href: "/services/efficiency" },
      { name: "Refacciones", href: "/services/refac" },
      { name: "Pintura Electroestática", href: "/services/paint" },
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
    img: "/PaperHvac.webp",
    title: "HVAC para Industria de Papel y la Higiene",
    link: "/projects/paper",
  },
  {
    img: "/OfficeHvac.webp",
    title: "Solución HVAC para oficinas",
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
    link: "/services/chillers",
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
    image: "/Tableros.webp",
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
    image: "/Wiring.webp",
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
    image: "/Charola.webp",
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
    image: "/Conduit.webp",
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
    image: "/Pneumatic.webp",
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
    image: "/Refrigeration.webp",
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
    image: "/Electric.webp",
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
    image: "/ElectricalDesign.webp",
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
    image: "/ElectricalDesign2.webp",
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
    image: "/ElectricalDesign.webp",
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
    image: "/ElectricalDesign2.webp",
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
    image: "/ElectricalDesign.webp",
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

export const servicesHvac = [
  {
    id: "chillers",
    label: "Chillers",
    image: "/Chillers.webp",
    highlights: [
      {
        title: "Eficiencia y Potencia",
        text: "Soluciones avanzadas en chillers para aplicaciones industriales y comerciales, optimizando el consumo energético y el rendimiento del sistema.",
      },
      {
        title: "Soporte Integral",
        text: "Instalación, mantenimiento y refacciones para asegurar la operación continua de tus equipos de enfriamiento.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "tvr",
    label: "Equipos Tablero y TVR",
    image: "/Tvr.webp",
    highlights: [
      {
        title: "Tecnología de Vanguardia",
        text: "Sistemas TVR para climatización eficiente y flexible en grandes espacios y edificios inteligentes.",
      },
      {
        title: "Control Preciso",
        text: "Automatización y monitoreo para máxima comodidad y ahorro energético.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "cooling",
    label: "Torres de Enfriamiento",
    image: "/CoolingTower.webp",
    highlights: [
      {
        title: "Desempeño Óptimo",
        text: "Torres de enfriamiento diseñadas para prolongar la vida útil de tus sistemas y reducir el consumo de agua y energía.",
      },
      {
        title: "Mantenimiento Especializado",
        text: "Servicios de limpieza, reparación y optimización para máxima eficiencia.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "package",
    label: "Equipo Paquete y Divididos",
    image: "/PackageUnit.webp",
    highlights: [
      {
        title: "Versatilidad y Adaptabilidad",
        text: "Soluciones en equipos paquete y sistemas divididos para todo tipo de espacios y requerimientos.",
      },
      {
        title: "Instalación Rápida",
        text: "Montaje eficiente y soporte técnico especializado.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "centbomb",
    label: "Bombas Centrífugas",
    image: "/CentrifugalPump.webp",
    highlights: [
      {
        title: "Transporte Eficiente",
        text: "Bombas centrífugas de alta eficiencia para sistemas de agua helada y climatización industrial.",
      },
      {
        title: "Durabilidad Garantizada",
        text: "Equipos robustos y de bajo mantenimiento para operación continua.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "hydraulic",
    label: "Tubería Hidráulica",
    image: "/HydraulicPipe.webp",
    highlights: [
      {
        title: "Instalación Profesional",
        text: "Tubería hidráulica para sistemas HVAC, asegurando estanqueidad y resistencia a largo plazo.",
      },
      {
        title: "Materiales Certificados",
        text: "Cumplimiento de normativas y máxima seguridad en cada proyecto.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "hvac-key-hand",
    label: "Soluciones HVAC Llave en Mano",
    image: "/KeyHandHVAC.webp",
    highlights: [
      {
        title: "Proyecto Integral",
        text: "Desde el diseño hasta la puesta en marcha, nos encargamos de todo el proceso para tu tranquilidad.",
      },
      {
        title: "Acompañamiento Total",
        text: "Soporte técnico y asesoría personalizada en cada etapa del proyecto.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "air-duct",
    label: "Ducteria de Aire ",
    image: "/AirDuct.webp",
    highlights: [
      {
        title: "Distribución Eficiente",
        text: "Diseño e instalación de ductos de aire para climatización industrial y comercial.",
      },
      {
        title: "Aislamiento y Seguridad",
        text: "Materiales de alta calidad para evitar pérdidas térmicas y garantizar la seguridad del sistema.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "hydraulic-pipe",
    label: "Tuberia Especializada para Sistemas HVAC",
    image: "/SpecializedPipe.webp",
    highlights: [
      {
        title: "Soluciones a Medida",
        text: "Tubería especializada para aplicaciones específicas en sistemas HVAC, adaptada a cada necesidad.",
      },
      {
        title: "Instalación Certificada",
        text: "Personal capacitado y materiales certificados para máxima confiabilidad.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "cold-rooms",
    label: "Cuartos fríos Industriales a la Medida",
    image: "/ColdRooms.webp",
    highlights: [
      {
        title: "Control de Temperatura",
        text: "Diseño y construcción de cuartos fríos industriales para almacenamiento seguro y eficiente.",
      },
      {
        title: "Ahorro Energético",
        text: "Sistemas de aislamiento y control para minimizar el consumo energético.",
      },
    ],
    brands: brandsHvac,
  },
];

export const servicesEff = [
  {
    id: "panels",
    label: "Paneles Solares",
    image: "/SolarPanels.webp",
    highlights: [
      {
        title: "Energía Renovable",
        text: "Aprovecha la energía solar para reducir costos y contribuir al medio ambiente con sistemas de paneles solares de alta eficiencia.",
      },
      {
        title: "Integración Total",
        text: "Soluciones llave en mano que se adaptan a tus necesidades energéticas y de espacio.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "calculations",
    label: "Cálculos Eléctricos",
    image: "/Calculations.webp",
    highlights: [
      {
        title: "Precisión y Seguridad",
        text: "Realizamos cálculos eléctricos detallados para garantizar la seguridad y eficiencia de tus instalaciones.",
      },
      {
        title: "Normatividad Cumplida",
        text: "Todos nuestros proyectos cumplen con las normas nacionales e internacionales vigentes.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "physical",
    label: "Tierras Físicas",
    image: "/Physical.webp",
    highlights: [
      {
        title: "Protección Óptima",
        text: "Diseño e instalación de sistemas de tierras físicas para proteger tus equipos y personal.",
      },
      {
        title: "Mantenimiento y Diagnóstico",
        text: "Ofrecemos servicios de diagnóstico y mantenimiento preventivo para asegurar la continuidad operativa.",
      },
    ],
    brands: brandsHvac,
  },
  {
    id: "quality",
    label: "Calidad de Energía",
    image: "/Quality.webp",
    highlights: [
      {
        title: "Monitoreo y Corrección",
        text: "Implementamos sistemas de monitoreo y corrección de calidad de energía para evitar fallas y optimizar el consumo.",
      },
      {
        title: "Soluciones Personalizadas",
        text: "Adaptamos nuestras soluciones a las necesidades específicas de tu industria o negocio.",
      },
    ],
    brands: brandsHvac,
  },
];
