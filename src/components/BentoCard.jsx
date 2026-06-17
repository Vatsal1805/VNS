export default function BentoCard({ children, className = "" }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-vns border border-vnsBorder bg-vnsSurface p-6 transition-all duration-300 group ${className}`}
    >
      {/* Spotlight overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(201, 147, 58, 0.08), transparent 80%)"
        }}
      />
      {/* Spotlight border glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-vnsAccent/30 rounded-vns"
        style={{
          maskImage: "radial-gradient(120px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 100%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(120px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 100%, transparent 100%)"
        }}
      />
      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
        {children}
      </div>
    </div>
  );
}
