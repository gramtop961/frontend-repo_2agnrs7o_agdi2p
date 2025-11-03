import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">EFIQ Solutions</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 transition">
              Book a consultation
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />

        {/* Differentiators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Partner, not vendor',
                desc: 'We collaborate from strategy to launch, aligning outcomes with your goals.',
              },
              {
                title: 'Modern engineering',
                desc: 'Best practices in performance, accessibility, security, and maintainability.',
              },
              {
                title: 'Outcome-focused',
                desc: 'Clear milestones, transparent communication, and measurable impact.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-100 p-6 bg-gray-50">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Portfolio />
        <Contact />
      </main>

      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} EFIQ Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
