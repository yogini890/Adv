export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">For confidential legal consultation, reach out through any of the channels below. All initial enquiries are treated with strict confidentiality.</p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F4EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Contact Details</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Reach Out Directly</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">Office Address</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">AMS Legal — Advocate Meet Shah<br />Bombay High Court Complex<br />Fort, Mumbai — 400 001<br />Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">WhatsApp</p>
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-[#B8952A] text-sm hover:underline">+91 99999 99999</a>
                    <p className="text-[#6B7280] text-xs mt-0.5">Mon–Sat, 10am–6pm IST</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">Email</p>
                    <a href="mailto:contact@tlclegal.in" className="text-[#B8952A] text-sm hover:underline">contact@tlclegal.in</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8952A]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D1B2A] text-sm mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/advocate-meet-shah" target="_blank" rel="noopener noreferrer" className="text-[#B8952A] text-sm hover:underline">Advocate Meet Shah</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-lg p-5 border border-[#EDE8DF] border-l-4 border-l-[#B8952A]">
                <p className="text-xs text-[#6B7280] leading-relaxed">All communications are strictly confidential. Reaching out does not create an advocate-client relationship. This website is for informational purposes only as per Bar Council of India guidelines.</p>
              </div>
            </div>

            <div>
              <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Location</p>
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-lg border border-[#EDE8DF] h-96">
                <iframe
                  title="AMS Legal Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9!2d72.8324!3d18.9332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c75db78951%3A0x4a4c98ee1e2e5b7a!2sBombay+High+Court!5e0!3m2!1sen!2sin!4v1699000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-xs text-[#6B7280] mt-3 text-center">Bombay High Court, Fort, Mumbai — 400 001</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
