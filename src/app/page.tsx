'use client'

import { useStore } from '@/store/useStore'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ModeToggle from '@/components/ModeToggle'
import ExpressCounter from '@/components/ExpressCounter'
import WildModePlayer from '@/components/WildModePlayer'
import WorldMap from '@/components/WorldMap'
import { useState, useEffect } from 'react'

export default function Home() {
  const { mode } = useStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  if (!mounted) return null

  return (
    <main className={`relative ${
      mode === 'wild' 
        ? 'bg-gradient-to-b from-black via-gray-900 to-black' 
        : 'bg-gradient-to-b from-beige-50 to-beige-100'
    }`}>
      {/* Background decorations */}
      {mode === 'wild' && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-naranja-vibrante opacity-10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rojo-vivo opacity-10 blur-3xl rounded-full" />
        </div>
      )}

      <ModeToggle />
      <ExpressCounter />
      <WildModePlayer />
      
      <Hero />
      <About />
      <WorldMap />
      <Journey />
      <Projects />
      <Services />
      <Contact />
    </main>
  )
}
