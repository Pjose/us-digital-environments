function Footer() {
    const footerLinks = {
        Services: [
            { label: "Home Theater", url: "/services" },
            { label: "Smart Automation", url: "/services" },
            { label: "Audio & Video", url: "/services" },
            { label: "Lighting Control", url: "/services" },
            { label: "Networking", url: "/services" },
            { label: "Outdoor AV", url: "/services" }
        ],
        Company: [
            { label: "About Us", url: "/about" },
            { label: "Portfolio", url: "/gallery" },
            { label: "Testimonials", url: "/testimonials" },
            { label: "Contact", url: "/contact" }
        ],
        Connect: [
            { label: "Yelp", url: "https://www.yelp.com/biz/us-digital-environments-dallas-4" },
            { label: "Google", url: "https://www.google.com/business/us-digital-environments" },
            { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61556794552362" },
            { label: "Instagram", url: "https://www.instagram.com/us-digital-environments" },
        ]
    };

    const socialLinks = [
        { icon: "./yelp.png", alt: "Yelp", url: "https://www.yelp.com/biz/us-digital-environments-dallas-4" },
        { icon: "./google.png", alt: "Google", url: "https://www.google.com/business/us-digital-environments" },
        { icon: "./facebook.png", alt: "Facebook", url: "https://www.facebook.com/profile.php?id=61556794552362" },
        { icon: "./instagram.png", alt: "Instagram", url: "https://www.instagram.com/us-digital-environments" },
    ];

    return (
        <footer className="bg-[#0d1524] border-t border-[#c01c1c]/10 pt-16 pb-8 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="mb-4">
                            <a href="/" className="flex items-center gap-3 group">
                                <img
                                    src="./us-digital-environments.png"
                                    alt="US Digital Environments"
                                    className="w-10 h-10 object-contain rounded-full opacity-100 hover:opacity-80 transition-opacity duration-200"
                                />
                                <span className="text-white hover:text-gray-300 font-bold text-base" style={{ fontFamily: '"Outfit:Bold"' }}>
                                    US Digital<span className="text-[#c01c1c] hover:text-red-400"> Environments</span>
                                </span>
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: '"Geist:Regular"' }}>
                            Dallas–Fort Worth's premier custom electronics and smart home integration company.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
                                    aria-label={link.alt}
                                >
                                    <img src={link.icon} alt={link.alt} className="w-7 h-7 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: '"Geist:Medium"' }}>{section}</h4>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        {
                                            section === "Connect" ? (
                                                <a href={link.url} className="nav-link text-gray-500 text-sm hover:text-[#c01c1c] transition-colors" style={{ fontFamily: '"Geist:Regular"' }} target="_blank" rel="noopener noreferrer">
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <a href={link.url} className="nav-link text-gray-500 text-sm hover:text-[#c01c1c] transition-colors" style={{ fontFamily: '"Geist:Regular"' }}>
                                                    {link.label}
                                                </a>
                                            )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-[#c01c1c]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs" style={{ fontFamily: '"Geist:Regular"' }}>
                        © 2026 US Digital Environments. All rights reserved.&nbsp;&nbsp;Powered by&nbsp;
                        <a href="mailto:pjdereva@gmail.com" className="nav-link text-[#c01c1c] hover:text-sky-200 transition-colors capitalize cursor-pointer">
                            PJ Dereva
                        </a>
                    </p>
                    <p className="text-gray-600 text-xs" style={{ fontFamily: '"Geist:Regular"' }}>
                        Serving Dallas, Frisco, Plano, Allen, McKinney & surrounding DFW communities.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;