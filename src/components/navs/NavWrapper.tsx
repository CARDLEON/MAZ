import { useState, useEffect, useRef } from "react";
import Nav from "@/src/components/navs/Nav";

export default function NavWrapper() {
  const [variant, setVariant] = useState<"default" | "white">("default");
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVariant(entry.isIntersecting ? "default" : "white");
      },
      { threshold: 0 }
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
      <div ref={sentinelRef} className="absolute top-0 w-full" />

      <Nav variant={variant} />
    </>
  );
}
