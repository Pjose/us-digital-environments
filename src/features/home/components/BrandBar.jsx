const brands = ["Control4", "Savant", "Lutron", "Sonos", "Samsung", "LG", "Crestron", "Cisco Meraki"];

export default function BrandBar() {
    return (
        <div className="full-width-breakout bg-[#080e1a] border-y border-[#c01c1c]/10 py-6 overflow-hidden">
            <div className="flex gap-12 items-center justify-center flex-wrap px-8">
                {brands.map((b, i) => (
                    <span key={i} className="text-gray-500 text-sm tracking-widest uppercase hover:text-gray-300 transition-colors cursor-default" style={{ fontFamily: '"Geist:Medium"' }}>
                        {b}
                    </span>
                ))}
            </div>
        </div>
    );
}