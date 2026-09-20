import { SERVICES } from "../../../assets/data/services";
import SectionLabel from "../../../components/SectionLabel";

export default function ServicesSection() {
    return (
        <section id="services" className="full-width-breakout bg-[#080e1a] ">
            <div className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <SectionLabel text="What We Do" />
                    <h2 className="text-3xl md:text-5xl text-white mb-4" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
                        Custom Electronics & Smart<br />Living Environments
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: '"Geist:Regular"' }}>
                        We design, install, and support bespoke technology ecosystems for discerning Dallas–Fort Worth homeowners and commercial clients.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((s, i) => (
                        <div
                            key={i}
                            className="service-card bg-[#111c30] border border-[#c01c1c]/10 rounded-sm p-8 transition-all duration-300 cursor-default group"
                        >
                            <div className="text-[#c01c1c] mb-5 group-hover:scale-110 transition-transform duration-300">
                                {s.icon}
                            </div>
                            <h3 className="text-white text-lg mb-3" style={{ fontFamily: '"Outfit:Bold"', fontWeight: 700 }}>
                                {s.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: '"Geist:Regular"' }}>
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}