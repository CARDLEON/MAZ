import React, { useState } from "react";

export interface Highlight {
  title: string;
  text: string;
  img?: string;
  alt?: string;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Service {
  id: string;
  label: string;
  description?: string;
  image?: string;
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

  const handleContactClick = () => {
    if (typeof window !== "undefined" && window.openContactModal) {
      window.openContactModal();
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:px-10 lg:px-[12rem] py-12">
      {/* Columna de pestañas */}
      <aside className="flex flex-col gap-4 lg:col-span-1">
        {services.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`
              flex justify-between items-center cursor-pointer px-4 py-3 rounded-md font-semibold transition-colors duration-300
              ${
                id === activeTab
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {label}
            <span className="text-xl">›</span>
          </button>
        ))}
      </aside>

      {/* Contenido de la pestaña activa */}
      <div className="lg:col-span-2 flex flex-col gap-5">
        {/* Título y descripción generales */}
        {/* <h2 className="text-2xl md:text-3xl font-bold text-[#24408d] mb-4">
          {title}
        </h2>
        <div
          className="text-base text-gray-800 space-y-6 mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        /> */}

        {activeService && (
          <>
            {/* Título del servicio activo */}
            {activeService.image && (
              <>
                <h3 className="text-xl md:text-3xl font-semibold text-[#24408D] mb-4">
                  {activeService.label}
                </h3>

                <p className="text-lg md:text-xl font-medium text-[#24408D] mb-4">
                  {activeService.description}
                </p>

                {/* Imagen del servicio activo */}
                <div className="overflow-hidden rounded-md flex justify-start">
                  <img
                    src={activeService.image}
                    alt={activeService.label}
                    className="w-full md:w-[30rem]"
                  />
                </div>
              </>
            )}
            {!activeService.image && (
              <>
                <h3 className="text-xl md:text-3xl font-semibold text-[#24408D] mb-4">
                  {activeService.label}
                </h3>
              </>
            )}

            {/* Highlights */}
            {activeService?.highlights?.length &&
              activeService.highlights.length > 0 && (
                <div className="space-y-10 flex flex-col justify-center gap-2 w-full">
                  {activeService.highlights.map(
                    ({ title, img, text, alt }, idx) => (
                      <div
                        key={idx}
                        className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {img && (
                          <>
                            <section className="flex flex-col justify-center items-start gap-2">
                              <h4 className="text-xl md:text-3xl font-bold text-[#24408D]">
                                {title}
                              </h4>
                              <div
                                className="text-gray-700 font-medium"
                                dangerouslySetInnerHTML={{ __html: text }}
                              />
                              <button
                                onClick={handleContactClick}
                                className="mt-4 bg-[#24408D] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a3170] transition-colors duration-300 self-start"
                              >
                                Cotizar
                              </button>
                            </section>
                            <img
                              src={img}
                              alt={alt}
                              className="w-full h-[500px] rounded-md object-cover"
                            />
                          </>
                        )}
                        {!img && (
                          <section className="flex flex-col justify-center gap-2">
                            <h4 className="text-xl md:text-3xl font-bold text-[#24408D]">
                              {title}
                            </h4>
                            <div
                              className="text-gray-700 font-medium"
                              dangerouslySetInnerHTML={{ __html: text }}
                            />
                          </section>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesHomeSection;
