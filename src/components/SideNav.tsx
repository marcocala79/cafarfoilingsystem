import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "project", label: "Project" },
  { id: "how-it-works", label: "How It Works" },
  { id: "physics", label: "Physics" },
  { id: "vpp-results", label: "VPP" },
  { id: "applications", label: "Applications" },
  { id: "patent", label: "Patent" },
  { id: "partnership", label: "Partner" },
  { id: "contact", label: "Contact" },
];

export const SideNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3"
            aria-label={label}
          >
            {/* Label - appears on hover */}
            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-mono px-2 py-1 rounded backdrop-blur-md transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-primary-foreground bg-primary/70"
                  : "opacity-0 group-hover:opacity-100 text-foreground bg-background/60"
              }`}
              style={{ fontFamily: "'Orbitron', monospace" }}
            >
              {label}
            </span>

            {/* Dash indicator */}
            <span
              className={`block transition-all duration-300 rounded-full ${
                isActive
                  ? "w-6 h-[2px] bg-accent-foreground shadow-[0_0_8px_hsl(var(--accent)/0.5)]"
                  : "w-3 h-[2px] bg-foreground/25 group-hover:w-5 group-hover:bg-foreground/50"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
