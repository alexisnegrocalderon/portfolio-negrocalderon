'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

export default function WildModePlayer() {
  const { mode } = useStore()

  if (mode !== 'wild') return null

  return (
    <motion.div
      className="fixed bottom-24 right-8 z-40 w-80 rounded-lg shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        style={{ borderRadius: '8px' }}
        src="https://open.spotify.com/embed/playlist/5fuYzVSedvAU6bNCEtOsHT?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </motion.div>
  )
}
