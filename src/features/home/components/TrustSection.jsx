import SectionLabel from "../../../components/SectionLabel";

const trustPoints = [
    "15+ Years of Excellence",
    "500+ Installations Completed",
    "A-Star Ratings Yelp & Google",
    "Certified Control4 & Savant Dealer",
];

export default function TrustSection() {
    return (
        <section className="full-width-breakout bg-[#0d1524]">
            <div className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1746439324737-2c9f9a3e81a6?w=800&h=600&fit=crop&auto=format"
                        alt="Luxurious home theater installation"
                        className="w-full h-96 object-cover rounded-sm"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-[#c01c1c] text-white px-6 py-5 rounded-sm shadow-xl">
                        <div className="text-3xl font-bold" style={{ fontFamily: '"Outfit:ExtraBold"' }}>15+</div>
                        <div className="text-sm opacity-90" style={{ fontFamily: '"Geist:Regular"' }}>Years Serving DFW</div>
                    </div>
                </div>
                <div>
                    <SectionLabel text="Why Choose Us" />
                    <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
                        Why Dallas Homeowners<br />Trust Us
                    </h2>
                    <p className="text-gray-400 mb-10 leading-relaxed" style={{ fontFamily: '"Geist:Regular"' }}>
                        We don't just install equipment — we craft integrated environments where technology disappears into the experience. Every project is tailored, every system is tested, and every client is supported for the long term.
                    </p>
                    <div className="space-y-4">
                        {trustPoints.map((point, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#c01c1c]/20 border border-[#c01c1c]/40 flex items-center justify-center flex-shrink-0">
                                    <svg viewBox="0 0 20 20" fill="#c01c1c" className="w-3.5 h-3.5">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-200" style={{ fontFamily: '"Geist:Medium"', fontWeight: 500 }}>{point}</span>
                            </div>
                        ))}
                    </div>
                    <a
                        href="#contact"
                        className="inline-block mt-10 px-7 py-3 border border-[#c01c1c] text-[#c01c1c] text-sm rounded-sm hover:bg-[#c01c1c] hover:text-white transition-all duration-300"
                        style={{ fontFamily: '"Outfit:SemiBold"' }}
                    >
                        Schedule a Consultation →
                    </a>
                </div>
            </div>
        </section>
    );
}