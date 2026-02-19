import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Achievement = React.lazy(() => import('./components/Achievement'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <main className="space-y-0">
        <Hero />
        <React.Suspense fallback={null}>
          <About />
        </React.Suspense>
        <React.Suspense fallback={null}>
          <Experience />
        </React.Suspense>
        <React.Suspense fallback={null}>
          <Achievement />
        </React.Suspense>
        <React.Suspense fallback={null}>
          <Contact />
        </React.Suspense>
        {/* CV Download Section */}
        <section className="py-12 bg-black border-t border-red-600/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <a
                href="/cv.pdf"
                download
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-red-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 font-sans"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;