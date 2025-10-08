export default function CardleonSign() {
  return (
    <footer className="w-full bg-[#202020] text-white">
      <div className="max-w-full mx-auto px-6 sm:px-12 md:px-20 lg:px-[8rem] py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base">
        {/* Lado izquierdo */}
        <div className="text-center sm:text-left font-semibold">
          © 2025 Todos los derechos Reservados
        </div>

        {/* Lado derecho */}
        <div className="flex items-center justify-center sm:justify-end gap-4 text-center sm:text-right">
          <span className="font-medium">Powered by</span>
          <a
            href="https://wa.me/+528134209552?text=Quisiera%20informes%20para%20paginas%20web"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="contact-whatsapp"
          >
            <img
              width={100}
              height={100}
              src="/ThornLogo.png"
              alt="Logo de Thorn Solutions"
              className="h-10 sm:h-10 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
