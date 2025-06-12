import Phone from "@/public/phone.svg";

export default function ContactForm() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-[#24408d]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left column: text */}
        <div className="flex items-center justify-center">
          <p className="text-left text-base sm:text-lg md:text-xl font-medium">
            Completa el formulario a continuación con tus datos y mensaje, y nos
            pondremos en contacto contigo lo antes posible.
          </p>
        </div>
        {/* Right column: informational placeholders */}
        <div className="space-y-4">
          <div className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50 text-gray-700 flex items-center gap-2">
            <img src={Phone.src} alt="Phone icon" />
            <span className="font-semibold">(81) 2211 8054</span>
          </div>
          <div className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50 text-gray-700 flex items-center gap-2">
            <img src={Phone.src} alt="Phone icon" />
            <span className="font-semibold">(81) 4491 1774</span>
          </div>
          <div className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50 text-gray-700">
            Ubicación:
            <span className="font-semibold"> General Escobedo, N.L</span>
          </div>
        </div>
      </div>

      <p className="text-center text-base sm:text-lg md:text-xl font-medium mb-10">
        Numeros de contacto
      </p>

      <form
        action="https://getform.io/f/azynqrdb"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Columna izquierda */}
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Nombre Completo
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              pattern="^[A-Za-zÁÉÍÓÚÑáéíóúñ' -]{2,60}$"
              placeholder="Escriba su nombre"
              className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              placeholder="Escriba su correo electrónico"
              className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-semibold mb-2">
              Número Telefónico
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              inputMode="numeric"
              pattern="^\+?[0-9\s\-]{10,15}$"
              placeholder="Escriba su número telefónico"
              className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-semibold mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            placeholder="Déjanos tu mensaje"
            className="flex-grow border border-gray-400 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Campos ocultos */}
        <input
          type="hidden"
          name="_next"
          value="http://maz.sandboxcardleon.com/thanks"
        />
        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="md:col-span-2">
          <button
            type="submit"
            className="mt-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </section>
  );
}
