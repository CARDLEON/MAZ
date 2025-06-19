import { useState, useEffect, useRef } from "react";
import Nav from "@/src/components/navs/Nav";

interface NavWrapperProps {
  fixedVariant?: "default" | "white";
  textColor?: string;
}

export default function NavWrapper({
  fixedVariant,
  textColor = "#24408d",
}: NavWrapperProps) {
  const [variant, setVariant] = useState<"default" | "white">(
    fixedVariant ?? "default",
  );
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No checar scroll si se pasa prop fixedVariant
    if (fixedVariant) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVariant(entry.isIntersecting ? "default" : "white");
      },
      { threshold: 0 },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  return (
    <>
      {!fixedVariant && (
        <div ref={sentinelRef} className="absolute top-0 w-full" />
      )}

      <Nav variant={fixedVariant ?? variant} textColor={textColor} />
    </>
  );
}
