import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = ["Services", "About", "Gallery", "Testimonials", "Contact"];

    return (
        <nav
            className={`fixed left-0 right-0 top-8 md:top-11 lg:top-8 z-40 transition-all duration-500 ${scrolled ? "bg-[#080e1a]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
                <a href="/" className="flex items-center gap-3 group">
                    <img
                        src="./us-digital-environments.png"
                        alt="US Digital Environments logo"
                        className="w-10 h-10 object-contain rounded-full opacity-100 hover:opacity-80 transition-opacity duration-200"
                    />
                    <span className="text-white hover:text-gray-300 font-bold text-lg tracking-tight" style={{ fontFamily: '"Outfit:Bold"' }}>
                        US Digital<span className="text-[#c01c1c] hover:text-red-400"> Environments</span>
                    </span>
                </a>

                <div className="hidden lg:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`${l.toLowerCase()}`}
                            className="nav-link text-gray-300 hover:text-white text-sm transition-colors duration-200"
                            style={{ fontFamily: '"Geist:Medium"' }}
                        >
                            {l}
                        </a>
                    ))}
                    <a
                        href="tel:4694662221"
                        className="text-[#c01c1c] text-sm flex items-center gap-2"
                        style={{ fontFamily: '"Geist:Medium"' }}
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden xl:inline">(469) 466-2221</span>
                    </a>
                    <a
                        href="#contact"
                        className="px-5 py-2 bg-[#c01c1c] text-white text-sm rounded-sm hover:bg-[#e03030] transition-colors"
                        style={{ fontFamily: '"Outfit:SemiBold"' }}
                    >
                        Free Quote
                    </a>
                </div>

                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-[#0d1524] border-t border-[#c01c1c]/10 px-6 py-4 flex flex-col gap-4">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`/${l.toLowerCase()}`}
                            className="text-gray-300 hover:text-[#c01c1c] text-sm transition-colors"
                            style={{ fontFamily: '"Geist:Medium"' }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {l}
                        </a>
                    ))}
                    <a
                        href="tel:4694662221"
                        className="text-[#c01c1c] text-sm flex items-center gap-2"
                        style={{ fontFamily: '"Geist:Medium"' }}
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                        </svg>
                        <span>(469) 466-2221</span>
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;