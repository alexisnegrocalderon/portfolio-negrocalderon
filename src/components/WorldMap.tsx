'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

export default function WorldMap() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'

  return (
    <motion.div
      className={`py-12 ${bgColor}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-8 text-center ${textColor}`}>
          🌍 Mapa de Mis Viajes
        </h2>
        
        <motion.div
          className={`p-8 rounded-lg text-center ${mode === 'elegant' ? 'bg-white' : 'bg-gray-800'}`}
          whileHover={{ scale: 1.02 }}
        >
          <p className={`${textColor} text-lg mb-4`}>
            Mapa minimalista con rutas de viaje - En desarrollo
          </p>
          <div className="text-6xl animate-pulse">✈️</div>
          <p className={`${textColor} opacity-60 text-sm mt-4`}>
            16 ciudades visitadas • 5 continentes • Infinitas inspiraciones
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
