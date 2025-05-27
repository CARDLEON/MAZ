import React, { useState } from "react";

export interface Highlight {
  title: string;
  text: string;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Service {
  id: string;
  label: string;
  image: string;
  highlights?: Highlight[];
  brands?: Brand[];
}

interface ServicesHomeSectionProps {
  /** Título principal de la sección */
  title: string;
  /** Descripción en HTML (renderizado con dangerousSetInnerHTML) */
  description: string;
  /** Array de servicios, cada uno con su id, etiqueta, puntos destacados y marcas */
  services: Service[];
}

const ServicesHomeSection: React.FC<ServicesHomeSectionProps> = ({
  title,
  description,
  services,
}) => {
  // Estado para controlar la pestaña activa (iniciamos en el primer servicio)
  const [activeTab, setActiveTab] = useState<string>(services[0]?.id);

  // Buscamos el objeto del servicio activo
  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:px-10 lg:px-[12rem] py-12">
      {/* Columna de pestañas */}
      <aside className="flex flex-col gap-4 lg:col-span-1">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`
              flex justify-between items-center cursor-pointer px-4 py-3 rounded-md font-semibold transition-colors duration-300
              ${
                service.id === activeTab
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {service.label}
            <span className="text-xl">›</span>
          </button>
        ))}
      </aside>

      {/* Contenido de la pestaña activa */}
      <div className="lg:col-span-2 flex flex-col gap-5">
        {/* Título y descripción generales */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#24408d] mb-4">
          {title}
        </h2>
        <div
          className="text-base text-gray-800 space-y-6 mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {activeService && (
          <>
            {/* Título del servicio activo */}
            <h3 className="text-xl font-semibold text-[#24408D] mb-4">
              {activeService.label}
            </h3>

            {/* Imagen del servicio activo */}
            <div className="overflow-hidden rounded-md flex justify-center">
              <img
                src={activeService.image}
                alt={activeService.label}
                className="w-1/2"
              />
            </div>

            {/* Highlights */}
            {activeService?.highlights?.length &&
              activeService.highlights.length > 0 && (
                <div className="space-y-10">
                  {activeService.highlights.map((h, idx) => (
                    <div key={idx}>
                    <h4 className="font-bold text-[#24408D]">{h.title}</h4>
                    <p className="text-gray-700 font-normal">{h.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Marcas (marquee) */}
            {/* {activeService.brands.length > 0 && (
              <div className="overflow-hidden mt-10 rounded-md px-4 py-4">
                <div className="animate-marquee whitespace-nowrap inline-flex py-4 w-max">
                  {[...activeService.brands, ...activeService.brands].map(
                    (b, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 flex items-center justify-center w-40"
                      >
                        <img
                          src={b.logo}
                          alt={`Logo ${b.name}`}
                          className="h-12 object-contain"
                          loading="lazy"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )} */}
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesHomeSection;
