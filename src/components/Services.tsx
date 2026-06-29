'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    id: 'branding',
    name: 'Diseño de Logo',
    price: 24990,
    description: 'Logo, paleta de colores corporativos y manual de marca',
  },
  {
    id: 'express',
    name: 'Sitio Web Express 24hrs',
    price: 89900,
    description: 'Entrega en 24 hrs con diseño funcional',
  },
  {
    id: 'wow',
    name: 'Sitio Web WOW FX',
    price: 124900,
    description: 'Animaciones cinematográficas que impactan',
  },
  {
    id: 'premium',
    name: 'Sitio Web Premium',
    price: 249000,
    description: 'Experiencia inmersiva a medida con todas las integraciones',
  },
]

export default function Services() {
  const { mode } = useStore()
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  const handleServiceClick = (id: string, price: number) => {
    if (selectedServices.includes(id)) {
      const newServices = selectedServices.filter((s) => s !== id)
      setSelectedServices(newServices)
      setTotalPrice(totalPrice - price)
    } else {
      const newServices = [...selectedServices, id]
      setSelectedServices(newServices)
      setTotalPrice(totalPrice + price)
    }
  }

  const bgColor = mode === 'elegant' ? 'bg-beige-50' : 'bg-black'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const cardBg = mode === 'elegant' ? 'bg-white hover:bg-beige-100' : 'bg-gray-800 hover:bg-gray-700'

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
          Mis Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`p-6 rounded-lg cursor-pointer transition-all ${
                selectedServices.includes(service.id) ? 'ring-2 ring-offset-2' : ''
              } ${cardBg}`}
              onClick={() => handleServiceClick(service.id, service.price)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              style={{
                ringColor: mode === 'elegant' ? '#B8860B' : '#FF8C42',
              }}
            >
              <p className={`text-2xl font-bold mb-2 ${textColor}`}>${service.price}</p>
              <p className={`font-semibold mb-2 ${textColor}`}>{service.name}</p>
              <p className={`text-sm ${textColor} opacity-60`}>{service.description}</p>
              <p className="text-xs mt-3 opacity-50">
                {selectedServices.includes(service.id) ? '✓ Seleccionado' : 'Click para agregar'}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Precio Total */}
        {selectedServices.length > 0 && (
          <motion.div
            className={`p-8 rounded-lg text-center border-2 ${mode === 'elegant' ? 'border-terracota-intenso' : 'border-naranja-vibrante'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className={`text-2xl font-bold mb-4 ${textColor}`}>
              Total: ${totalPrice.toLocaleString('es-CL')}
            </p>
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all"
              style={{
                backgroundColor: mode === 'elegant' ? '#B8860B' : '#FF8C42',
              }}
            >
              🚀 Lanzar Proyecto
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
