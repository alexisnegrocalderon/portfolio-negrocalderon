'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Segurito App',
    url: 'www.seguritoapp.com',
    description: 'Aplicación de seguridad personal',
  },
  {
    name: 'Mansion Playroom',
    url: 'www.mansionplayroom.cl',
    description: 'Experiencia premium de entretenimiento',
  },
]

export default function Projects() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-100' : 'bg-gray-900'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const cardBg = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'

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
          Proyectos Destacados
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className={`${cardBg} rounded-lg overflow-hidden shadow-lg`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-64 bg-gradient-to-br from-verde-salvia to-terracota-suave flex items-center justify-center">
                <p className="text-white text-2xl font-bold">{project.name}</p>
              </div>
              <div className="p-6">
                <p className={`text-sm ${textColor} opacity-60 mb-2`}>{project.url}</p>
                <p className={`text-lg ${textColor}`}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
