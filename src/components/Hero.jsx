import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Tech • Digital • Innovation
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Your trusted tech & digital partner for business growth
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            EFIQ Solutions specialises in custom app development, modern websites, and drone/RC product solutions that help SMEs and startups scale with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
              Book a free consultation
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-blue-700 font-semibold ring-1 ring-inset ring-blue-200 hover:ring-blue-300 transition">
              See our work
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold text-gray-700 hover:text-gray-900">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
