const principles = [
  { title: 'Strategic Representation', desc: 'We focus on long-term legal and financial outcomes rather than short-term procedural success.' },
  { title: 'Commercial Understanding', desc: 'We understand property disputes often involve investments, redevelopment structures, business operations, and wealth management.' },
  { title: 'Confidential & Professional Handling', desc: 'High-value matters require discretion, preparation, and responsible legal management.' },
  { title: 'Result-Oriented Solutions', desc: 'Whether through litigation, arbitration, negotiation, or advisory support, our focus remains on protecting client interests.' },
];

const clients = [
  'High Net Worth Individuals (HNIs)',
  'Non-Resident Indians (NRIs)',
  'Investors & Developers',
  'Corporate Entities & Businesses',
  'Business Families & Professionals',
  'Individuals with complex legal disputes',
];

const team = [
  { name: 'Advocate Meet Shah', role: 'Founder & Principal Advocate', img: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Advocate practising before the Bombay High Court, specialising in real estate, commercial, and financial litigation.' },
  { name: 'Senior Associate', role: 'Real Estate & Property Law', img: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Expertise in high-value property disputes, redevelopment, and housing society matters across Mumbai.' },
  { name: 'Legal Associate', role: 'Commercial Litigation', img: 'https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=400', bio: 'Focused on commercial recovery, banking litigation, and corporate dispute resolution.' },
];

const successes = [
  { value: '500+', label: 'Cases Handled Successfully' },
  { value: '15+', label: 'Years Combined Experience' },
  { value: '200+', label: 'HNI & NRI Clients Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '50+', label: 'Redevelopment Disputes Resolved' },
  { value: 'Bombay HC', label: 'Primary Jurisdiction' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Legacy of Law, Integrity & Professional Responsibility
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            The foundation of our practice is deeply connected to a legacy of law — built on understanding
            that legal disputes directly impact homes, businesses, finances, relationships, and future security.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Built on Experience, Driven by Purpose</h2>
              <div className="space-y-4 text-[#4B5563] leading-relaxed text-sm">
                <p>Growing up in a family associated with the legal profession created an early understanding that law is not confined to courtrooms — it directly impacts people&apos;s homes, businesses, finances, relationships, and future security.</p>
                <p>Observing how legal disputes affect families, investors, and businesses shaped a practical and solution-oriented perspective towards litigation and legal advisory.</p>
                <p>The professional journey began through formal legal education, litigation training, internships, social initiatives, and association with reputed legal professionals and law firms, further strengthened through hands-on courtroom experience before the Bombay High Court.</p>
                <p>Over time, it became increasingly evident that modern property and commercial disputes require far more than conventional litigation — clients require legal professionals who understand redevelopment structures, commercial realities, and strategic dispute management.</p>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Advocate Meet Shah" className="w-full h-80 object-cover rounded-xl shadow-xl" />
              <div className="absolute -bottom-4 -left-4 bg-[#B8952A] text-white px-5 py-3 rounded-lg shadow-lg">
                <p className="text-lg font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Advocate Meet Shah</p>
                <p className="text-xs opacity-90">Bombay High Court</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>Who We Represent</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((c) => (
              <div key={c} className="bg-white rounded-lg p-4 border border-[#EDE8DF] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B8952A] shrink-0" />
                <span className="text-sm text-[#2C2C2C] font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mumbai Skyline" className="w-full h-72 object-cover rounded-xl shadow-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">The Landscape</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Understanding Mumbai&apos;s Real Estate Landscape</h2>
              <div className="space-y-3 text-[#4B5563] text-sm leading-relaxed">
                <p>Mumbai&apos;s property ecosystem is among the most legally complex in India. Many disputes escalate because legal intervention occurs too late — after third-party rights are created or investments become financially vulnerable.</p>
                <p className="font-medium text-[#0D1B2A]">Our focus areas include:</p>
                <ul className="space-y-1.5">
                  {['Strategic due diligence', 'Property risk assessment', 'Documentation review', 'Preventive legal advisory', 'Urgent interim reliefs and injunctions', 'Recovery and enforcement proceedings'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#B8952A]" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Our Approach</p>
            <h2 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-[#1A2E42] rounded-xl p-6 border border-[#243B55]">
                <div className="w-8 h-0.5 bg-[#B8952A] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#F8F4EE] rounded-xl p-8 border border-[#EDE8DF]">
              <div className="w-8 h-0.5 bg-[#B8952A] mb-4" />
              <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Vision</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">To build a modern, trusted, and strategically driven legal practice recognised for excellence in real estate, property, and commercial dispute resolution — where clients receive legal support that is transparent, commercially intelligent, and focused on long-term protection of assets.</p>
            </div>
            <div className="bg-[#0D1B2A] rounded-xl p-8">
              <div className="w-8 h-0.5 bg-[#B8952A] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Mission</h3>
              <ul className="space-y-2">
                {['Protect property rights, investments, and business interests','Deliver commercially practical legal solutions','Provide strong representation in high-value disputes','Assist HNI, NRI, corporate, and business clients','Offer preventive legal advisory to minimise future disputes','Maintain the highest standards of ethics and accountability'].map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-[#B8952A] mt-1.5 shrink-0" />{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-lg text-[#0D1B2A] font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Strategic Advocacy. Practical Solutions. Long-Term Protection.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">The People</p>
            <h2 className="text-3xl font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden border border-[#EDE8DF] hover:shadow-lg transition-shadow">
                <img src={member.img} alt={member.name} className="w-full h-52 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#0D1B2A]" style={{ fontFamily: 'Playfair Display, serif' }}>{member.name}</h3>
                  <p className="text-[#B8952A] text-xs font-medium tracking-wide mb-3">{member.role}</p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Track Record</p>
            <h2 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Our Success</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {successes.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-[#B8952A]" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</p>
                <p className="text-gray-400 text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
