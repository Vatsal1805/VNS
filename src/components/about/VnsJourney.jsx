import { motion } from 'framer-motion';

export default function VnsJourney({ journey }) {
  return (
    <section className="py-24 bg-vnsBg text-vnsText-primary border-t border-vnsBorder relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vnsAccent/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-vnsAccent/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-width-container mx-auto px-5 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 50, damping: 14 }}
          className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-3"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-vnsAccent border border-vnsAccent/20 bg-vnsAccent/5 px-4 py-1.5 rounded-full mx-auto">
            Our Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-vnsText-primary mt-2">
            A Decade of<br />Trusted Student Living
          </h2>
          <div className="h-[2px] w-12 bg-vnsAccent mx-auto mt-1" />
          <p className="font-body text-sm text-vnsText-secondary leading-relaxed max-w-xl mx-auto mt-2">
            From our founding in 2015 to today, every chapter of our story has been driven by one mission — making student life safer, comfortable, and more fulfilling.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vnsAccent/30 to-transparent -translate-x-1/2" />

          {/* Vertical left line — mobile */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vnsAccent/30 to-transparent" />

          <div className="flex flex-col gap-10 lg:gap-2">
            {journey.map((milestone, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative lg:grid lg:grid-cols-2 lg:gap-0 lg:min-h-[180px]">

                  {/* ── Center dot (desktop) — fills gold on scroll-in ── */}
                  <motion.div
                    className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.15 }}
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full border-2 border-vnsAccent relative flex items-center justify-center"
                      initial={{ backgroundColor: "transparent" }}
                      whileInView={{ backgroundColor: "#C9933A" }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {milestone.year === "Today" && (
                        <span className="absolute inset-0 rounded-full bg-vnsAccent animate-ping opacity-50" />
                      )}
                    </motion.div>
                  </motion.div>

                  {/* ── Mobile dot — fills gold on scroll-in ── */}
                  <motion.div
                    className="lg:hidden absolute left-5 top-8 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-vnsAccent"
                      initial={{ backgroundColor: "transparent" }}
                      whileInView={{ backgroundColor: "#C9933A" }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {milestone.year === "Today" && (
                        <span className="absolute inset-0 rounded-full bg-vnsAccent animate-ping opacity-50" />
                      )}
                    </motion.div>
                  </motion.div>

                  {/* ── Left column (desktop) ── */}
                  <div className={`hidden lg:flex items-start pb-12 ${isLeft ? 'justify-end pr-10' : 'justify-start'}`}>
                    {isLeft && <TimelineCard milestone={milestone} idx={idx} slideFrom="right" />}
                  </div>

                  {/* ── Right column (desktop) ── */}
                  <div className={`hidden lg:flex items-start pb-12 ${!isLeft ? 'justify-start pl-10' : 'justify-end'}`}>
                    {!isLeft && <TimelineCard milestone={milestone} idx={idx} slideFrom="left" />}
                  </div>

                  {/* ── Mobile card — smoother hardware-accelerated animation ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                    className="lg:hidden ml-12"
                  >
                    <CardContent milestone={milestone} />
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ milestone, idx, slideFrom }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: slideFrom === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 55, damping: 14, delay: idx * 0.04 }}
      className="w-full max-w-sm"
    >
      <CardContent milestone={milestone} />
    </motion.div>
  );
}

function CardContent({ milestone }) {
  return (
    <div className={`relative overflow-hidden rounded-vns border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${
      milestone.highlight
        ? 'bg-vnsSurface border-vnsAccent/30'
        : 'bg-vnsSurface border-vnsBorder hover:border-vnsAccent/20'
    }`}>
      {/* Gold top line — on EVERY card */}
      <div className="h-0.5 w-full bg-vnsAccent" />

      <div className="p-6">
        {/* Year badge */}
        <span className={`inline-block font-heading text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${
          milestone.highlight
            ? 'bg-vnsAccent/15 text-vnsAccent border border-vnsAccent/30'
            : 'bg-vnsAccent/5 text-vnsAccent/80 border border-vnsAccent/15'
        }`}>
          {milestone.year}
        </span>

        {/* Title */}
        <h3 className={`font-heading font-bold text-lg uppercase tracking-wide mb-2 ${
          milestone.highlight ? 'text-vnsAccent' : 'text-vnsText-primary'
        }`}>
          {milestone.label}
        </h3>

        {/* Description */}
        <p className="font-body text-xs text-vnsText-secondary leading-relaxed">
          {milestone.desc}
        </p>
      </div>
    </div>
  );
}
