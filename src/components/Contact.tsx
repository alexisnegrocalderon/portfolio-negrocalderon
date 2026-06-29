'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

export default function Contact() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const inputBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'

  return (
    <section className={`py-24 px-4 ${bgColor}`}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${textColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hablemos
        </motion.h2>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>Nombre</label>
            <input
              type="text"
              className={`w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none`}
              style={{ backgroundColor: inputBg }}
            />
          </div>

          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>Email</label>
            <input
              type="email"
              className={`w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none`}
              style={{ backgroundColor: inputBg }}
            />
          </div>

          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>@Instagram</label>
            <input
              type="text"
              placeholder="@tuinstagram"
              className={`w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none`}
              style={{ backgroundColor: inputBg }}
            />
          </div>

          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>Descripción del Proyecto</label>
            <textarea
              rows={4}
              className={`w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none`}
              style={{ backgroundColor: inputBg }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white transition-all"
            style={{
              backgroundColor: mode === 'elegant' ? '#B8860B' : '#FF8C42',
            }}
          >
            📱 Enviar a WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  )
}
