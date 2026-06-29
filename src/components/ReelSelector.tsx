'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

const reelOptions = [
  { count: 1, price: 9990 },
  { count: 3, price: 29970 },
  { count: 5, price: 49950 },
]

export default function ReelSelector() {
  const { mode } = useStore()
  const [selectedCount, setSelectedCount] = useState(0)

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const buttonBg = mode === 'elegant' ? 'bg-terracota-suave hover:bg-terracota-intenso' : 'bg-naranja-vibrante hover:bg-rojo-vivo'

  return (
    <div className={`p-6 rounded-lg ${bgColor}`}>
      <p className={`text-lg font-semibold mb-4 ${textColor}`}>🎬 Videos Reels</p>
      <div className="grid grid-cols-3 gap-4">
        {reelOptions.map((option) => (
          <motion.button
            key={option.count}
            onClick={() => setSelectedCount(option.count)}
            className={`p-4 rounded-lg transition-all ${
              selectedCount === option.count ? 'ring-2' : ''
            } ${buttonBg}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-bold text-white text-lg">{option.count}</p>
            <p className="text-sm text-white opacity-80">${option.price}</p>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
