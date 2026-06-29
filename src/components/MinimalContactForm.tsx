'use client'

import { useStore } from '@/store/useStore'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'

export default function MinimalContactForm() {
  const { mode } = useStore()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    instagram: '',
    descripcion: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')

    try {
      // Enviar a WhatsApp via API
      const message = `
🚀 *NUEVO PROYECTO*

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Instagram:* ${formData.instagram}

*Descripción:*
${formData.descripcion}
      `

      const whatsappNumber = '+56939548475'
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`

      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank')

      setSubmitStatus('success')
      setFormData({ nombre: '', email: '', instagram: '', descripcion: '' })

      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const bgColor = mode === 'elegant' ? 'bg-beige-50' : 'bg-black'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const inputBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'
  const borderColor = mode === 'elegant' ? 'border-terracota-suave' : 'border-naranja-vibrante'
  const accentColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'

  return (
    <motion.div
      className={`p-8 rounded-lg ${bgColor} border-2 ${borderColor}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-lg ${inputBg} border border-gray-400 focus:outline-none focus:ring-2`}
              style={{ '--tw-ring-color': accentColor } as React.CSSProperties}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-lg ${inputBg} border border-gray-400 focus:outline-none focus:ring-2`}
            />
          </div>
        </div>

        <input
          type="text"
          name="instagram"
          placeholder="@tuinstagram"
          value={formData.instagram}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg ${inputBg} border border-gray-400 focus:outline-none focus:ring-2`}
        />

        <textarea
          name="descripcion"
          placeholder="Cuéntame sobre tu proyecto..."
          value={formData.descripcion}
          onChange={handleChange}
          rows={4}
          required
          className={`w-full p-3 rounded-lg ${inputBg} border border-gray-400 focus:outline-none focus:ring-2`}
        />

        <motion.button
          type="submit"
          disabled={submitStatus === 'loading'}
          className="w-full py-3 rounded-lg font-semibold text-white transition-all disabled:opacity-50"
          style={{ backgroundColor: accentColor }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {submitStatus === 'loading' ? 'Enviando...' : '🚀 Lanzar Proyecto'}
        </motion.button>
      </form>

      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.p
            className="mt-4 text-green-500 text-center font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✓ Abierto en WhatsApp
          </motion.p>
        )}
        {submitStatus === 'error' && (
          <motion.p
            className="mt-4 text-red-500 text-center font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✗ Error. Intenta de nuevo.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
