export type NavLink = {
  link: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

export const navLinks: NavLink[] = [
  {
    link: "Servicios",
    href: "/servicios",
    submenu: [
      { name: "Todos los Servicios", href: "/servicios" },
      { name: "Chillers", href: "/servicios/chillers" },
      { name: "HVAC", href: "/servicios/hvac" },
      { name: "Instalaciones Eléctricas", href: "/servicios/electrico" },
      { name: "Eficiencia Energética", href: "/servicios/eficiencia" },
      { name: "Refacciones", href: "/servicios/refacciones" },
      { name: "Pintura Electroestática", href: "/servicios/pintura" },
      { name: "Ingeniería a Detalle", href: "/servicios/ingenieria" },
    ],
  },
  {
    link: "Chillers",
    href: "/productos/chillers",
    submenu: [{ name: "Todos los Chillers", href: "/productos/chillers" }],
  },
  { link: "Nosotros", href: "/nosotros" },
  // { link: "Proyectos", href: "/proyectos" },
  { link: "Contacto", href: "/contacto" },
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
    link: "/proyectos/paper",
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
    link: "/servicios/chillers",
  },
  {
    img: "/Serv-2.webp",
    title: "Instalaciones Eléctricas",
    description: "Soluciones eléctricas confiables y seguras para tu proyecto.",
    link: "/servicios/electrico",
  },
  {
    img: "/Serv-3.webp",
    title: "Trabajos de Pintura Industrial",
    description: "Acabado profesional y protección avanzada para tus equipos.",
    link: "/servicios/ingenieria",
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
  },
];

export const servicesEff = [
  {
    id: "structures",
    label: "Paneles y Estructuras Solares",
    highlights: [
      {
        title: "Estructura para Suelo",
        text: "Soporte fijo para paneles solares instalados directamente sobre el suelo, ideal para proyectos solares a escala comercial o industrial.",
        img: "/estructuras-suelos.webp",
        alt: "Estructura de panel solar para suelo",
      },
      {
        title: "Estructura para Tejado",
        text: "Diseñada para instalaciones fotovoltaicas en cubiertas, con variantes según tipo de techo.",
        img: "/estructuras-techos.webp",
        alt: "Estructura de panel solar para tejado",
      },
      {
        title: "Estructura para Estacionamiento",
        text: "Se trata de una estructura elevada, tipo carport, para soportar paneles solares sobre áreas de estacionamiento.",
        img: "/estructuras-estacionamiento.webp",
        alt: "Estructura de panel solar para estacionamiento",
      },
    ],
  },
  {
    id: "modules",
    label: "Módulos Fotovoltaicos",
    highlights: [
      {
        title: "CanadianSolar",
        text: "<ul><li>Potencia: 600-650W.</li><li>Características: Alta eficiencia, tamaño compacto y ligero, apto para instalación residencial y comercial, estética moderna.</li><li>Aplicación: Residencial, Comercial e Industrial.</li></ul>",
        img: "/Astronergy.webp",
        alt: "Estructura de panel solar para estacionamiento",
      },
      {
        title: "LONGi Solar",
        text: "<ul><li>Potencia: 600-660W.</li><li>Características: Tecnología monocristalina, alta eficiencia en condiciones de poca luz, larga vida útil.</li><li>Aplicación: Todo tipo de instalaciones.</li></ul>",
        img: "/LongiSolar.webp",
        alt: "Estructura de panel solar para estacionamiento",
      },
      {
        title: "ASTRONERGY",
        text: "<ul><li>Potencia: 605-665W.</li><li>Características: Alta tolerancia a sombra, células M10 tipo PERC o TOPCon, certificaciones internacionales de calidad.</li><li>Aplicación: Industrial, comercial y granjas solares.</li></ul>",
        img: "/Astronergy.webp",
        alt: "Estructura de panel solar para estacionamiento",
      },
    ],
  },
  {
    id: "inversor",
    label: "Inversores para Sistemas Aislados e Híbridos",
    highlights: [
      {
        title: "Modelos Híbridos para Zonas Rurales",
        text: "<ul><li>Características: Conexión solar directa, compatibles con baterías de litio y plomo-ácido, opción de respaldo con red o generador.</li></ul>",
        img: "/VoltronicPower.webp",
        alt: "Inverter marca Voltronic Power",
      },
      {
        title: "Modelos Híbridos para Zonas Rurales",
        text: "<ul><li>Características: Interfaz de usuario amigable, control inteligente de carga y energía.</li><li>Aplicación: Agroindustria, granjas y sitios sin red eléctrica.</li></ul>",
        img: "/Must.webp",
        alt: "Inverter marca Must",
      },
    ],
  },
  {
    id: "inversor-interconecado",
    label: "Inversores para Sistemas Fotovoltaicos Interconectados",
    highlights: [
      {
        title: "Growatt",
        text: "<ul><li>Potencia: 1kW - 125kW.</li><li>Voltaje nominal: 220V/480V.</li><li>Protección: IP65.</li><li>Características: Alta eficiencia, Compatible con sistemas de conexión en red, bajo costo y alta confiabilidad.</li></ul>",
        img: "/growatt-inv.webp",
        alt: "Inverter marca Voltronic Power",
      },
      {
        title: "Sofar",
        text: "<ul><li>Potencia: 3kW - 110kW.</li><li>Protección: IP66.</li><li>Características: Amplio rango de voltaje de entrada, Sistema de monitoreo inteligente, Diseño compacto y robusto.</li></ul>",
        img: "/Sofar.webp",
        alt: "Inverter marca Must",
      },
      {
        title: "Solis",
        text: "<ul><li>Potencia: 1kW - 125kW.</li><li>Protección: IP66.</li><li>Características: Control remoto vía app/web, Apt para todo tipo de techos y suelo, Alta confiabilidad en ambientes.</li></ul>",
        img: "/Solis.webp",
        alt: "Inverter marca Must",
      },
      {
        title: "WEQ",
        text: "<ul><li>Potencia nominal de salida AC de: 1kW - 125kW.</li><li>Voltaje nominal: 220V / 480V</li><li>Protección: IP65 - IP66</li></ul>",
        img: "/Weq.webp",
        alt: "Inverter marca Must",
      },
    ],
  },
  {
    id: "bombeo-solar",
    label: "Sistema de Bombeo Solar",
    highlights: [
      {
        title: "Bomba sumergible",
        text: "<ul><li>Disponible en version centrifuga o rotor heliocoidal.</li><li>Construcción de acero inoxidable.</li><li>Motor de imanes permanentes de alta eficiencia (PM/BLDC).</li><ul><li>Compatible con:</li><li>Compatible con:</li><li>Paneles solares (DC: 30-300 VDC)</li><li>Red eléctrica o generador (AC: 90-240 VAC)</li><li>Protección IP68: para uso continuo bajo agua.</li></ul></ul>",
        img: "/GrundosBomb-1.avif",
        alt: "Inverter marca Voltronic Power",
      },
      {
        title: "Corriente Alterna / Corriente Directa",
        text: "<ul><li><b>Cálculo de Paneles Solares</b></li><li>Conexión directamente a la bomba de DC sin inversores.</li><li>No requieren inversor externo (el sistema tiene convertidor integrado).</li><li>Inversor uso bomba de corriente alterna.</li></ul>",
        img: "/GrundosBomb-2.avif",
        alt: "Inverter marca Must",
      },
    ],
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
  },
];
