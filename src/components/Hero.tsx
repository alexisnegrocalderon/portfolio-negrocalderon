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
  const gradientStart = mode === 'elegant' ? 'rgba(156, 175, 136, 0.1)' : 'rgba(255, 140, 66, 0.2)'

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${bgColor}`}>
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          y: scrollY * 0.5,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${gradientStart} 0%, transparent 100%)`,
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✈️
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        🎨
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span
            className="inline-block px-6 py-2 rounded-full font-semibold text-sm mb-6"
            style={{ backgroundColor: accentColor + '20', color: accentColor }}
          >
            ✨ Brand Powering Designer
          </span>
        </motion.div>

        <motion.h1
          className={`text-5xl md:text-8xl font-bold mb-6 leading-tight ${textColor}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transformo Ideas en
          <br />
          <span style={{ color: accentColor }}>Experiencias Memorables</span>
        </motion.h1>

        <motion.p
          className={`text-xl md:text-2xl mb-12 ${textColor} max-w-3xl mx-auto`}
          style={{ opacity: 0.8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crecí viajando 20 países. Aprendí que las marcas memorables se diseñan con intención,
          detalle y una profunda comprensión de las personas. Hoy ayudo a emprendedores como tú a
          crear sitios web que no solo lucen impactantes, sino que generan resultados.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.a
            href="#services"
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all text-white"
            style={{ backgroundColor: accentColor }}
            whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${accentColor}40` }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Ver Servicios
          </motion.a>
          <motion.a
            href="#contact"
            className={`px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all`}
            style={{ borderColor: accentColor, color: accentColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 Contáctame
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
