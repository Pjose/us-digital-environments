import { useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "../../../assets/data/heroSlides";

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);
    const [zooming, setZooming] = useState(true);
    const timerRef = useRef();

    const advance = () => {
        setPrev(current);
        setCurrent((c) => (c + 1) % HERO_SLIDES.length);
        setZooming(false);
        setTimeout(() => setZooming(true), 50);
    };

    useEffect(() => {
        timerRef.current = setTimeout(advance, 6000);
        return () => clearTimeout(timerRef.current);
    }, [current]);

    const goTo = (i) => {
        clearTimeout(timerRef.current);
        if (i === current) return;
        setPrev(current);
        setCurrent(i);
        setZooming(false);
        setTimeout(() => setZooming(true), 50);
        timerRef.current = setTimeout(advance, 6000);
    };

    return (
        <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden" style={{ height: "100dvh" }}>
            {HERO_SLIDES.map((slide, i) => (
                <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
                >
                    <img
                        src={slide.url}
                        alt={slide.alt}
                        className={`w-full h-full object-cover ${i === current && zooming ? "hero-zoom" : ""}`}
                        style={{ transformOrigin: "center center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080e1a]/80 via-[#080e1a]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a]/60 via-transparent to-transparent" />
                </div>
            ))}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center z-10 px-8 md:px-20 lg:px-28">
                <p className="text-[#fbbc05] hidden min-[380px]:block text-sm tracking-[0.25em] uppercase mb-4" style={{ fontFamily: '"Geist:Medium"' }}>
                    Dallas — Fort Worth's Premier AV & Smart Home Integrator
                </p>
                <h1
                    className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6"
                    style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}
                >
                    Immersive Home Experiences,<br />
                    <span className="text-[#c01c1c]">Engineered to Perfection</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-xl mb-10" style={{ fontFamily: '"Geist:Regular"' }}>
                    Custom electronics, home theater, smart automation, and whole-home audio — designed, installed, and supported by US Digital Environments.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="tel:+14694662221"
                        className="px-8 py-4 bg-[#c01c1c] text-white font-semibold rounded-sm hover:bg-[#e03030] transition-colors duration-300"
                        style={{ fontFamily: '"Outfit:SemiBold"' }}
                    >
                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                            </svg>
                            <span>(469) 466-2221</span>
                        </div>
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-4 border border-white/30 text-white font-semibold rounded-sm hover:border-[#c01c1c] hover:text-[#c01c1c] transition-colors duration-300"
                        style={{ fontFamily: '"Outfit:SemiBold"' }}
                    >
                        Our Services
                    </a>
                </div>
            </div>

            {/* Slide dots */}
            <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {HERO_SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#c01c1c]" : "w-4 bg-white/30 hover:bg-white/60"}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Arrow */}
            <div className="absolute bottom-14 right-8 z-10 flex gap-2">
                <button
                    onClick={() => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-[#c01c1c] hover:text-[#c01c1c] transition-colors"
                >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
                </button>
                <button
                    onClick={() => goTo((current + 1) % HERO_SLIDES.length)}
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-[#c01c1c] hover:text-[#c01c1c] transition-colors"
                >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                </button>
            </div>
        </section>
    );
}