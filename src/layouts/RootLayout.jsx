import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialProofBanner from '../components/SocialProofBanner';

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-100 antialiased selection:bg-teal-500 selection:text-slate-950">
      <SocialProofBanner />
      <Navbar />

      {/* Main content expands to fill available space */}
      <main className="grow container mx-auto pt-8 md:pt-12 lg:pt-8 max-w-7xl">
        {/* Suspense handles the loading state while lazy pages are fetched */}
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

function PageLoader() {
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-500 border-t-transparent"></div>
    </div>
  );
}