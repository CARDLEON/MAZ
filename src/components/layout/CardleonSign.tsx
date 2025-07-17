export default function CardleonSign() {
  return (
    <footer className="w-full bg-[#5B348B] text-white border-t border-[#24408d]">
      <div className="max-w-full mx-auto px-6 sm:px-12 md:px-20 lg:px-[8rem] py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base">
        {/* Lado izquierdo */}
        <div className="text-center sm:text-left font-semibold">
          © 2025 Todos los derechos Reservados
        </div>

        {/* Lado derecho */}
        <div className="flex items-center justify-center sm:justify-end gap-2 text-center sm:text-right">
          <span className="font-medium">Powered by</span>
          <a
            href="https://cardleon.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sitio web de CARDLEON"
          >
            <img
              src="/CardleonLogo.png"
              alt="Agencia de marketing CARDLEON enfocados en el rubro industrial."
              className="h-10 sm:h-10 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
