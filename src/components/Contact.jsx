import { useMemo } from 'react';

function Contact() {
  const email = 'hello@efiqsolutions.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const emailAddr = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Consultation request from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${emailAddr}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const contactInfo = useMemo(() => (
    [
      { label: 'Email', value: email },
      { label: 'Phone', value: '+1 (000) 000-0000' },
      { label: 'Address', value: 'Your City, Country' },
    ]
  ), [email]);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in touch</h2>
          <p className="mt-3 text-gray-600">
            Tell us about your goals. We’ll respond within one business day.
          </p>
          <dl className="mt-8 space-y-3">
            {contactInfo.map((i) => (
              <div key={i.label} className="flex gap-3">
                <dt className="w-24 text-sm font-medium text-gray-500">{i.label}</dt>
                <dd className="text-gray-800">{i.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-gray-100 p-6 shadow-sm bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" type="text" required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input name="company" type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
              Request a quote
            </button>
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-blue-700 font-semibold ring-1 ring-inset ring-blue-200 hover:ring-blue-300 transition">
              Explore services
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
