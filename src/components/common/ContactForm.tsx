export default function ContactForm() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-[#24408d]">
      <p className="text-center text-base sm:text-lg md:text-xl font-medium mb-10">
        Completa el formulario a continuación con tus datos y mensaje,<br />
        y nos pondremos en contacto contigo lo antes posible.
      </p>

      <form
        action="https://formsubmit.co/0d8b09a3d7a82b190b0b6ed056162ed4"
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
        <input type="hidden" name="_next" value="http://maz.sandboxcardleon.com/thanks" />
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
