'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import MinimalContactForm from './MinimalContactForm'

export default function Contact() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const accentColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'

  return (
    <section className={`py-24 px-4 ${bgColor}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
            Hablemos
          </h2>
          <p className={`text-lg ${textColor} opacity-70`}>
            Cuéntame tu idea y juntos crearemos algo extraordinario
          </p>
        </motion.div>

        <MinimalContactForm />

        {/* Footer Info */}
        <motion.div
          className={`mt-12 p-8 rounded-lg text-center`}
          style={{ backgroundColor: accentColor + '10' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={`${textColor} mb-4`}>
            <span className="font-semibold">📍 Ubicación:</span> Chile
          </p>
          <p className={`${textColor} mb-4`}>
            <span className="font-semibold">📧 Email:</span> tu@email.com
          </p>
          <p className={`${textColor}`}>
            <span className="font-semibold">📱 Instagram:</span> @negrocalderon
          </p>
        </motion.div>
      </div>
    </section>
  )
}
