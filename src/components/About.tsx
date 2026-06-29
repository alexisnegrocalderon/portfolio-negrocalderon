'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

export default function About() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const borderColor = mode === 'elegant' ? 'border-verde-salvia' : 'border-naranja-vibrante'

  return (
    <section className={`py-24 px-4 ${bgColor}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`border-l-4 ${borderColor} pl-8`}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}>
            Mi Historia
          </h2>

          <p className={`text-lg leading-relaxed ${textColor} opacity-80`}>
            Durante 11 años recorrí el mundo como tripulante de cabina, aprendiendo que
            las experiencias memorables no ocurren por casualidad: se diseñan con
            intención, atención al detalle y una profunda comprensión de las personas.
            Ese mismo enfoque fue el puente hacia mi nueva etapa como Brand Powering
            Designer. Cambié los aviones por las marcas, pero mantuve la misma misión:
            crear experiencias que conecten, inspiren y dejen una huella. Hoy transformo
            ideas en identidades digitales que no solo se ven bien, sino que cuentan una
            historia auténtica y generan impacto. ✈️⚡
          </p>
        </motion.div>
      </div>
    </section>
  )
}
