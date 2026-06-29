'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const cities = [
  {
    name: 'Buenos Aires',
    emoji: '🌟',
    insight: 'La pasión argentina me enseñó que el diseño debe vibrar con emoción',
    lesson: 'Cada detalle cuenta cuando creas una experiencia auténtica',
  },
  {
    name: 'São Paulo',
    emoji: '🏙️',
    insight: 'La energía paulista mostró la importancia de la escala y el impacto',
    lesson: 'Las marcas grandes nacen de ideas simples ejecutadas con excelencia',
  },
  {
    name: 'Bogotá',
    emoji: '⛰️',
    insight: 'En las montañas encontré claridad en la simplicidad del diseño',
    lesson: 'Menos es más cuando cada elemento tiene propósito',
  },
  {
    name: 'Lima',
    emoji: '🌊',
    insight: 'El océano Pacífico me enseñó sobre flujo y movimiento natural',
    lesson: 'Las transiciones suaves crean experiencias memorables',
  },
  {
    name: 'Quito',
    emoji: '🦅',
    insight: 'En la altura descubrí perspectivas nuevas sobre el diseño',
    lesson: 'La visión clara requiere distancia y perspectiva',
  },
  {
    name: 'Ciudad de México',
    emoji: '🎨',
    insight: 'El arte explosivo mexicano me mostró el poder del color',
    lesson: 'La audacia en el diseño genera conexiones emocionales profundas',
  },
  {
    name: 'Miami',
    emoji: '🎉',
    insight: 'Wynwood fue mi fuente de inspiración para creatividad sin límites',
    lesson: 'Las paredes pueden contar historias si les das voz',
  },
  {
    name: 'Los Angeles',
    emoji: '🌅',
    insight: 'La creatividad californiana me enseñó a soñar en grande',
    lesson: 'La innovación requiere atrevimiento y experimentación',
  },
  {
    name: 'New York',
    emoji: '🗽',
    insight: 'La ciudad que nunca duerme mostró que el diseño también es ritmo',
    lesson: 'La velocidad y la precisión crean impacto',
  },
  {
    name: 'Madrid',
    emoji: '🎭',
    insight: 'La elegancia española enseña que menos es siempre más',
    lesson: 'La sofisticación viene de la intención, no de la complejidad',
  },
  {
    name: 'Frankfurt',
    emoji: '🏗️',
    insight: 'La arquitectura alemana mostró la belleza de la precisión',
    lesson: 'El orden y la estructura son la base de cualquier buen diseño',
  },
  {
    name: 'París',
    emoji: '✨',
    insight: 'La luz de París iluminó mi comprensión de la elegancia',
    lesson: 'El lujo verdadero está en los detalles invisibles pero sentidos',
  },
  {
    name: 'Tel Aviv',
    emoji: '🌍',
    insight: 'La innovación israelí mostró que el diseño puede cambiar el mundo',
    lesson: 'La tecnología y el arte juntos crean magia',
  },
  {
    name: 'Bangkok',
    emoji: '🏯',
    insight: 'La espiritualidad tailandesa enseña que el diseño debe tocar el alma',
    lesson: 'La belleza que perdura transcurre el tiempo',
  },
  {
    name: 'Tokyo',
    emoji: '🗻',
    insight: 'La precisión japonesa mostró que la perfección es un viaje',
    lesson: 'El detalle obsesivo genera respeto y admiración',
  },
  {
    name: 'Melbourne',
    emoji: '🎪',
    insight: 'La creatividad australiana rompió mis límites imaginativos',
    lesson: 'El diseño no teme al riesgo y la experimentación',
  },
  {
    name: 'Sydney',
    emoji: '🌞',
    insight: 'La luz de Sydney iluminó mi propósito final',
    lesson: 'Cada ciudad dejó una marca en mi alma creativa',
  },
]

export default function ExpandedJourney() {
  const { mode } = useStore()
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  const bgColor = mode === 'elegant' ? 'bg-beige-50' : 'bg-black'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const cardBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'
  const borderColor = mode === 'elegant' ? 'border-terracota-suave' : 'border-cobre-metalico'

  return (
    <section className={`py-24 px-4 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-4 text-center ${textColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mi Viaje Alrededor del Mundo ✈️
        </motion.h2>
        <p className={`text-center ${textColor} opacity-60 mb-16 max-w-2xl mx-auto`}>
          16 ciudades, 5 continentes, infinitas inspiraciones. Cada lugar dejó una marca en mi filosofía de diseño.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              className={`p-6 rounded-lg border-2 ${borderColor} cursor-pointer transition-all ${cardBg}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCity(city.name)}
              onHoverEnd={() => setHoveredCity(null)}
              whileHover={{ scale: 1.05, translateY: -10 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <p className="text-4xl">{city.emoji}</p>
                <p className={`text-xl font-semibold ${textColor}`}>{city.name}</p>
              </div>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredCity === city.name ? 1 : 0,
                  height: hoveredCity === city.name ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={`space-y-3 py-3 border-t border-opacity-20 ${textColor}`}>
                  <div>
                    <p className={`text-xs font-semibold opacity-60 mb-1`}>INSIGHT</p>
                    <p className={`text-sm ${textColor}`}>{city.insight}</p>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold opacity-60 mb-1`}>LECCIÓN</p>
                    <p className={`text-sm ${textColor}`}>{city.lesson}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
