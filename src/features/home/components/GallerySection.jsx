import { useState } from "react";
import { GALLERY_IMAGES } from "../../../assets/data/galleryImages";
import SectionLabel from "../../../components/SectionLabel";

export default function GallerySection() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="gallery" className="full-width-breakout bg-[#080e1a]">
            <div className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <SectionLabel text="Our Work" />
                    <h2 className="text-3xl md:text-5xl text-white mb-4" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
                        Installation Gallery
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto" style={{ fontFamily: '"Geist:Regular"' }}>
                        A curated look at our most distinctive projects across the Dallas–Fort Worth area.
                    </p>
                </div>

                {/* Yelp-style masonry-like grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {GALLERY_IMAGES.map((img, i) => (
                        <div
                            key={i}
                            className={`gallery-item relative overflow-hidden rounded-sm cursor-pointer bg-[#111c30] ${i === 0 ? "md:col-span-1 md:row-span-2" : ""
                                } ${i === 3 ? "col-span-2 md:col-span-2" : ""}`}
                            onClick={() => setSelected(img)}
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className={`w-full object-cover transition-transform duration-500 ${i === 0 ? "h-72 md:h-full" : i === 3 ? "h-52" : "h-48 md:h-52"
                                    }`}
                            />
                            <div className="gallery-overlay absolute inset-0 bg-[#080e1a]/70 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-5">
                                <span className="text-[#c01c1c] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: '"Geist:Medium"' }}>
                                    View Project
                                </span>
                                <span className="text-white text-sm font-semibold" style={{ fontFamily: '"Outfit:Bold"' }}>
                                    {img.label}
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                <span className="text-white text-sm" style={{ fontFamily: '"Outfit:SemiBold"' }}>{img.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selected && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
                        onClick={() => setSelected(null)}
                    >
                        <button className="absolute top-6 right-6 text-white hover:text-[#c01c1c] transition-colors">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
                            <img src={selected.url.replace("w=600", "w=1200").replace("h=400", "h=800")} alt={selected.alt} className="w-full max-h-[80vh] object-contain rounded-sm" />
                            <p className="text-white text-center mt-4 text-lg" style={{ fontFamily: '"Outfit:Bold"' }}>{selected.label}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}