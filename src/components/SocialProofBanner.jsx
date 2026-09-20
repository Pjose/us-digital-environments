function SocialProofBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d] border-b border-white/5 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-2 lg:gap-10 xl:gap-16 flex-wrap">
        {/* Yelp */}
        <a
          href="https://www.yelp.com/biz/us-digital-environments-dallas-4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <img src="./yelp.png" alt="Yelp logo" className="w-4 h-4 shrink-0" />
          <span className="text-gray-400 text-xs hidden md:block" style={{ fontFamily: '"Geist:Medium"' }}>Yelp</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} viewBox="0 0 12 12" fill="#d32323" className="w-3 h-3">
                <path d="M6 1l1.236 2.504 2.764.402-2 1.95.472 2.751L6 7.268l-2.472 1.34.472-2.752-2-1.95 2.764-.402z" />
              </svg>
            ))}
          </div>
          <span className="text-white text-xs font-semibold" style={{ fontFamily: '"Outfit:Bold"' }}>5.0</span>
          <span className="text-gray-500 text-xs hidden md:block" style={{ fontFamily: '"Geist:Regular"' }}>(47 reviews)</span>
        </a>

        <div className="w-px h-4 bg-white/10 hidden md:block" />

        {/* Google */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="text-gray-400 text-xs hidden md:block" style={{ fontFamily: '"Geist:Medium"' }}>Google</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} viewBox="0 0 12 12" fill="#FBBC05" className="w-3 h-3">
                <path d="M6 1l1.236 2.504 2.764.402-2 1.95.472 2.751L6 7.268l-2.472 1.34.472-2.752-2-1.95 2.764-.402z" />
              </svg>
            ))}
          </div>
          <span className="text-white text-xs font-semibold" style={{ fontFamily: '"Outfit:Bold"' }}>5.0</span>
          <span className="text-gray-500 text-xs hidden md:block" style={{ fontFamily: '"Geist:Regular"' }}>(83 reviews)</span>
        </a>

        <div className="w-px h-4 bg-white/10 hidden md:block" />

        <span className="text-gray-500 text-xs hidden md:block" style={{ fontFamily: '"Geist:Regular"' }}>
          🏆 &nbsp;Dallas–Fort Worth's Most Trusted AV Integrator
        </span>
      </div>
    </div>
  );
}

export default SocialProofBanner;