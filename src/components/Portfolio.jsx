function Portfolio() {
  const items = [
    {
      title: 'Fintech Web App',
      challenge: 'Legacy systems slowed onboarding and reporting.',
      solution: 'Built a modular, secure dashboard with role-based access and real-time analytics.',
      outcome: 'Onboarding time reduced by 40%, reporting accuracy improved.',
      tag: 'Web • React • FastAPI • Cloud',
    },
    {
      title: 'E-commerce Revamp',
      challenge: 'Low conversion due to poor UX and slow pages.',
      solution: 'Introduced a headless storefront, redesigned UX, and performance optimisations.',
      outcome: 'Checkout conversion up 28%, CLS and LCP in green.',
      tag: 'Website • Headless • UX',
    },
    {
      title: 'Drone Mapping Toolkit',
      challenge: 'Manual surveying lacked repeatability and scale.',
      solution: 'Prototype drone workflow for autonomous mapping and geotagged captures.',
      outcome: 'Survey cycles shortened from days to hours with consistent results.',
      tag: 'Drone • RC • Automation',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A snapshot of recent projects. Challenge → solution → outcome.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{item.tag}</div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h3>
              <div className="mt-4 space-y-2 text-gray-700">
                <p><span className="font-semibold text-gray-900">Challenge:</span> {item.challenge}</p>
                <p><span className="font-semibold text-gray-900">Solution:</span> {item.solution}</p>
                <p><span className="font-semibold text-gray-900">Outcome:</span> {item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
