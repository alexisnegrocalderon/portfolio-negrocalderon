'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

const postOptions = [
  { count: 8, price: 49900, label: '8 posts' },
  { count: 12, price: 69900, label: '12 posts' },
  { count: 20, price: 109900, label: '20 posts' },
]

export default function PostSelector() {
  const { mode } = useStore()
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const bgColor = mode === 'elegant' ? 'bg-beige-50' : 'bg-black'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const cardBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'
  const accentColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'

  return (
    <motion.div
      className={`p-8 rounded-lg ${bgColor} border-2`}
      style={{ borderColor: accentColor }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className={`text-2xl font-bold mb-6 ${textColor}`}>📸 Diseño de Posts</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {postOptions.map((option, index) => (
          <motion.div
            key={option.count}
            onClick={() => setSelectedOption(index)}
            className={`p-6 rounded-lg cursor-pointer transition-all ${
              selectedOption === index
                ? 'ring-2 scale-105'
                : ''
            } ${cardBg}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              ringColor: accentColor,
            }}
          >
            <p className={`text-3xl font-bold mb-2 ${textColor}`}>{option.label}</p>
            <p className={`text-2xl font-bold ${textColor}`}>${option.price}</p>
            <p className={`text-xs mt-3 opacity-50`}>
              {selectedOption === index ? '✓ Seleccionado' : 'Click para agregar'}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
