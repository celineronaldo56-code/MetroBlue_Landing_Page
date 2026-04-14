import React, { Suspense, lazy } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'

const Services = lazy(() =>
  import('./components/sections/Services').then(m => ({ default: m.Services }))
)

const Solutions = lazy(() =>
  import('./components/sections/Solutions').then(m => ({ default: m.Solutions }))
)

const Training = lazy(() =>
  import('./components/sections/Training').then(m => ({ default: m.Training }))
)

const WhyMetroBlue = lazy(() =>
  import('./components/sections/WhyMetroBlue').then(m => ({ default: m.WhyMetroBlue }))
)

const Testimonials = lazy(() =>
  import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials }))
)

const CallToAction = lazy(() =>
  import('./components/sections/CallToAction').then(m => ({ default: m.CallToAction }))
)

const Contact = lazy(() =>
  import('./components/sections/Contact').then(m => ({ default: m.Contact }))
)

const Loader: React.FC = () => (
  <div className="w-full py-24 flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
)

const App: React.FC = () => (
  <>
    <Navbar />

    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Suspense fallback={<Loader />}>
          <Services />
        </Suspense>
      </section>

      <section id="solutions">
        <Suspense fallback={<Loader />}>
          <Solutions />
        </Suspense>
      </section>

      <section id="training">
        <Suspense fallback={<Loader />}>
          <Training />
        </Suspense>
      </section>

      <section id="why-metroblue">
        <Suspense fallback={<Loader />}>
          <WhyMetroBlue />
        </Suspense>
      </section>

      <section id="testimonials">
        <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense>
      </section>

      <section id="cta">
        <Suspense fallback={<Loader />}>
          <CallToAction />
        </Suspense>
      </section>

      <section id="contact">
        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      </section>

      <Stats />
    </main>

    <Footer />
  </>
)

export default App