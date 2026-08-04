export default function Services() {
  const services = [
  {
    icon: "📄",
    title: "Income Tax Services",
    desc: "ITR Filing, Tax Planning, Income Tax Notices & Compliance",
  },
  {
    icon: "🧾",
    title: "GST Services",
    desc: "GST Registration, GSTR Filing, GST Compliance & Advisory",
  },
  {
    icon: "📊",
    title: "Accounting Services",
    desc: "Book Keeping, Tally Accounting, Financial Reports",
  },
  {
    icon: "🏢",
    title: "Business Services",
    desc: "Company Incorporation, Trademark & MSME Registration",
  },
];

  return (
  <section
    id="services"
    className="py-16 bg-white"
  >
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-center mb-10">
  <h2
    className="text-5xl font-bold text-blue-900 px-8 py-3 rounded-full border-2 border-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-white cursor-pointer"
  >
    Our Services
  </h2>
</div>

        <div className="grid md:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
                <div className="text-5xl mb-4">
  {service.icon}
</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}