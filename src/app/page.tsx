'use client'

import { useStore } from '@/store/useStore'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ExpandedJourney from '@/components/ExpandedJourney'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ModeToggle from '@/components/ModeToggle'
import ExpressCounter from '@/components/ExpressCounter'
import WildModePlayer from '@/components/WildModePlayer'
import WorldMap from '@/components/WorldMap'
import ParticleBackground from '@/components/ParticleBackground'
import { useState, useEffect } from 'react'

export default function Home() {
  const { mode } = useStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  if (!mounted) return null

  return (
    <main className={`relative overflow-hidden ${
      mode === 'wild' 
        ? 'bg-gradient-to-b from-black via-gray-900 to-black' 
        : 'bg-gradient-to-b from-beige-50 to-beige-100'
    }`}>
      {mode === 'elegant' && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-verde-salvia opacity-5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracota-suave opacity-5 blur-3xl rounded-full" />
        </div>
      )}

      {mode === 'wild' && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-naranja-vibrante opacity-15 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rojo-vivo opacity-15 blur-3xl rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cobre-metalico opacity-10 blur-3xl rounded-full" />
        </div>
      )}

      <ParticleBackground />
      <ModeToggle />
      <ExpressCounter />
      <WildModePlayer />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <WorldMap />
        <ExpandedJourney />
        <Projects />
        <Services />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}