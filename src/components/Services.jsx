import { Code, Globe, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom App Development',
    desc:
      'Design and build scalable web and mobile applications tailored to your business goals. From MVPs to enterprise-grade platforms.',
    bullets: ['Discovery & scoping', 'Agile development', 'Cloud-ready & secure'],
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc:
      'Modern, responsive websites with exceptional UX. Optimised for performance, accessibility, and SEO from day one.',
    bullets: ['Design systems & UI kits', 'Responsive & mobile-first', 'SEO & analytics ready'],
  },
  {
    icon: Cpu,
    title: 'Drone & RC Products',
    desc:
      'R&D for drone and RC-based solutions. From prototyping to field-ready systems for surveying, automation, and mapping.',
    bullets: ['Hardware integration', 'Telemetry & control', 'Data capture & processing'],
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">
            Partner with a team that blends product thinking with engineering excellence. We tailor solutions to your roadmap and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{desc}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
