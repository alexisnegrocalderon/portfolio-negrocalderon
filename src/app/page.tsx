'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ModeToggle from '@/components/ModeToggle'
import { useStore } from '@/store/useStore'

export default function Home() {
  const { mode } = useStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  if (!mounted) return null

  return (
    <main className={`relative ${mode === 'wild' ? 'bg-black' : 'bg-beige-50'}`}>
      <ModeToggle />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Services />
      <Contact />
    </main>
  )
}
