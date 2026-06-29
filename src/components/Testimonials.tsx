'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'Transformó mi idea en una experiencia digital que mis clientes aman.',
    author: 'Fundador, Segurito App',
    role: 'Startup Tech',
  },
  {
    text: 'El nivel de detalle y creatividad fue exactamente lo que buscábamos.',
    author: 'CEO, Mansion Playroom',
    role: 'Premium Entertainment',
  },
]

export default function Testimonials() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const cardBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'
  const borderColor = mode === 'elegant' ? 'border-verde-salvia' : 'border-naranja-vibrante'

  return (
    <section className={`py-24 px-4 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-16 text-center ${textColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lo que Dicen mis Clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className={`p-8 rounded-lg border-2 ${borderColor} ${cardBg}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className={`text-lg mb-6 ${textColor} italic`}>"{ testimonial.text}"</p>
              <div>
                <p className={`font-semibold ${textColor}`}>{testimonial.author}</p>
                <p className={`text-sm ${textColor} opacity-60`}>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
