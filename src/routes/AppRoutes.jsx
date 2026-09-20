import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { RootLayout } from '../layouts/RootLayout';
import NotFoundPage from '../features/errors/NotFoundPage';

// Lazy load pages for maximum performance
const LandingPage = lazy(() => import('../features/home/LandingPage'));
const Services = lazy(() => import('../features/services/ServicesPage'));
const ServiceDetail = lazy(() => import('../features/services/ServiceDetailPage'));
const AboutPage = lazy(() => import('../features/about/AboutPage'));
const GalleryPage = lazy(() => import('../features/gallery/GalleryPage'));
const TestimonialsPage = lazy(() => import('../features/testimonials/TestimonialsPage'));
const ContactPage = lazy(() => import('../features/contact/ContactPage'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Contains your global Navbar and Footer
    errorElement: <NotFoundPage />, // Fallback for unmatched routes
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServiceDetail /> }, // Dynamic route for individual services
      { path: 'about', element: <AboutPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
], { basename: '/us-digital-environments/' }); // Set the base path for all routes

export function AppRoutes() {
  return <RouterProvider router={router} />;
}