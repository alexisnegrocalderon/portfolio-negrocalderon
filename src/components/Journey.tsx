'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

const cities = [
  { name: 'Buenos Aires', emoji: '🌟' },
  { name: 'São Paulo', emoji: '🏙️' },
  { name: 'Bogotá', emoji: '⛰️' },
  { name: 'Lima', emoji: '🌊' },
  { name: 'Quito', emoji: '🦋' },
  { name: 'Ciudad de México', emoji: '🎨' },
  { name: 'Miami', emoji: '🎉' },
  { name: 'Los Angeles', emoji: '🌅' },
  { name: 'New York', emoji: '🗽' },
  { name: 'Madrid', emoji: '🎭' },
  { name: 'Frankfurt', emoji: '🏛️' },
  { name: 'París', emoji: '🗼' },
]

export default function Journey() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-50' : 'bg-black'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const cardBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'
  const borderColor = mode === 'elegant' ? 'border-terracota-suave' : 'border-cobre-metalico'

  return (
    <section className={`py-24 px-4 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-16 text-center ${textColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mi Viaje Alrededor del Mundo ✈️
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              className={`${cardBg} p-6 rounded-lg border-2 ${borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, translateY: -10 }}
            >
              <p className="text-4xl mb-3">{city.emoji}</p>
              <p className={`text-xl font-semibold ${textColor}`}>{city.name}</p>
              <p className={`text-sm mt-3 ${textColor} opacity-60`}>
                Descubre las historias y lecciones de diseño de este destino
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
