'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { mode } = useStore()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgColor = mode === 'elegant' ? 'bg-beige-50' : 'bg-black'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const accentColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'

  return (
    <section
      className={`relative h-screen flex items-center justify-center overflow-hidden ${bgColor}`}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          y: scrollY * 0.5,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              mode === 'elegant'
                ? 'radial-gradient(circle at 50% 50%, rgba(156, 175, 136, 0.1) 0%, transparent 100%)'
                : 'radial-gradient(circle at 50% 50%, rgba(255, 140, 66, 0.2) 0%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className={`text-6xl md:text-8xl font-bold mb-6 ${textColor}`}
          style={{
            color: mode === 'elegant' ? '#333' : '#fff',
          }}
        >
          Brand Powering
        </motion.h1>

        <motion.p
          className={`text-xl md:text-2xl mb-8 ${textColor}`}
          style={{
            color: mode === 'elegant' ? '#666' : '#ddd',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transformo ideas en identidades digitales que no solo se ven bien, sino que
          cuentan una historia auténtica y generan impacto.
        </motion.p>

        {/* Boarding Pass Style Button */}
        <motion.button
          className="px-8 py-4 text-lg font-semibold rounded-lg transition-all"
          style={{
            backgroundColor: accentColor,
            color: '#fff',
          }}
          whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${accentColor}40` }}
          whileTap={{ scale: 0.95 }}
        >
          ✈️ Comenzar Viaje
        </motion.button>
      </motion.div>
    </section>
  )
}
