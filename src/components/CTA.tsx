'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

export default function CTA() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const accentColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'
  const secondColor = mode === 'elegant' ? '#D4A574' : '#E63946'

  return (
    <section className={`py-24 px-4 ${bgColor}`}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${textColor}`}>
          Listo para Despegar?
        </h2>
        <p className={`text-xl mb-12 ${textColor} opacity-70`}>
          Tu marca merece una experiencia web que la refleje completamente.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a
            href="#services"
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all text-white"
            style={{ backgroundColor: accentColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todos los Servicios
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all"
            style={{ borderColor: secondColor, color: secondColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactarme Ahora
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
