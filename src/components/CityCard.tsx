'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

const citiesData = [
  {
    name: 'Buenos Aires',
    emoji: '🌟',
    insight: 'La pasión argentina me enseñó que el diseño debe vibrar con emoción',
    lesson: 'Cada detalle cuenta cuando creas una experiencia auténtica',
  },
  {
    name: 'São Paulo',
    emoji: '🏟️',
    insight: 'La energia paulista mostró la importancia de la escala y el impacto',
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
]

export default function CityCard({ city }: { city: (typeof citiesData)[0] }) {
  const { mode } = useStore()

  const cardBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const borderColor = mode === 'elegant' ? 'border-verde-salvia' : 'border-cobre-metalico'

  return (
    <motion.div
      className={`${cardBg} p-8 rounded-lg border-2 ${borderColor}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, translateY: -10 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <p className="text-5xl">{city.emoji}</p>
        <h3 className={`text-2xl font-bold ${textColor}`}>{city.name}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className={`text-sm font-semibold ${textColor} opacity-60 mb-2`}>INSIGHT</p>
          <p className={`${textColor} leading-relaxed`}>{city.insight}</p>
        </div>
        <div>
          <p className={`text-sm font-semibold ${textColor} opacity-60 mb-2`}>LECCIÓN</p>
          <p className={`${textColor} leading-relaxed`}>{city.lesson}</p>
        </div>
      </div>
    </motion.div>
  )
}
