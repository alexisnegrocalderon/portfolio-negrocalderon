'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

export default function ModeToggle() {
  const { mode, toggleMode } = useStore()

  return (
    <motion.button
      onClick={toggleMode}
      className="fixed top-8 right-8 z-50 px-6 py-3 rounded-full font-semibold transition-all duration-300"
      style={{
        backgroundColor: mode === 'elegant' ? '#9CAF88' : '#FF8C42',
        color: '#fff',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {mode === 'elegant' ? '🎉 Modo Salvaje' : '✨ Modo Elegante'}
    </motion.button>
  )
}
