'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ExpressCounter() {
  const { mode } = useStore()
  const [timeLeft, setTimeLeft] = useState('24:00:00')
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0)

      const diff = midnight.getTime() - now.getTime()
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
          seconds
        ).padStart(2, '0')}`
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const accentColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 p-6 rounded-lg shadow-2xl"
      style={{
        backgroundColor: accentColor,
        color: '#fff',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
    >
      <p className="text-sm font-semibold mb-2">⚡ EXPRESS 24HRS</p>
      <p className="text-3xl font-bold font-mono">{timeLeft}</p>
      <p className="text-xs mt-2 opacity-90">Tu sitio en 24 hrs</p>
    </motion.div>
  )
}
