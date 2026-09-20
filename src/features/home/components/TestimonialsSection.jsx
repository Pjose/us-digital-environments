import { TESTIMONIALS } from "../../../assets/data/testimonials";
import SectionLabel from "../../../components/SectionLabel";
import StarRating from "../../../components/StarRating";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="full-width-breakout bg-[#0d1524] ">
      <div className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel text="Client Reviews" />
            <h2 className="text-3xl md:text-5xl text-white" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <div className="text-4xl font-bold text-white" style={{ fontFamily: '"Outfit:ExtraBold"' }}>5.0</div>
              <StarRating count={5} />
              <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: '"Geist:Regular"' }}>Based on Yelp reviews</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#111c30] border border-[#c01c1c]/10 rounded-sm p-8 flex flex-col gap-5">
              <StarRating count={t.stars} />
              <p className="text-gray-300 text-sm leading-relaxed flex-1" style={{ fontFamily: '"Geist:Regular"' }}>
                "{t.text}"
              </p>
              <div>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: '"Outfit:SemiBold"' }}>{t.name}</p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: '"Geist:Regular"' }}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}