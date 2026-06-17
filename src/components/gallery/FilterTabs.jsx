export default function FilterTabs({ filterTabs, activeTab, setActiveTab }) {
  return (
    <section className="py-8 bg-vnsLight text-vnsDark border-b border-vnsDark/10">
      <div className="max-width-container mx-auto px-5 lg:px-12 flex flex-wrap justify-center gap-3">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-full font-heading text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
              activeTab === tab.id
                ? 'bg-vnsDark text-vnsText-primary border-vnsDark shadow-md'
                : 'bg-vnsText-primary border border-vnsDark/10 text-vnsDark/80 hover:text-vnsDark hover:border-vnsDark/30'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </section>
  );
}
