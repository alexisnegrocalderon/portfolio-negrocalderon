'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PostSelector from './PostSelector'
import ReelSelector from './ReelSelector'

const services = [
  {
    id: 'branding',
    name: 'Diseño de Logo',
    price: 24990,
    description: 'Logo, paleta de colores corporativos y manual de marca',
    icon: '🎨',
  },
  {
    id: 'express',
    name: 'Sitio Web Express 24hrs',
    price: 89900,
    description: 'Entrega en 24 hrs con diseño funcional',
    icon: '⚡',
  },
  {
    id: 'wow',
    name: 'Sitio Web WOW FX',
    price: 124900,
    description: 'Animaciones cinematográficas que impactan',
    icon: '🌮',
  },
  {
    id: 'premium',
    name: 'Sitio Web Premium',
    price: 249000,
    description: 'Experiencia inmersiva a medida con todas las integraciones',
    icon: '👑',
  },
  {
    id: 'redes',
    name: 'Gestión de Redes',
    price: 0,
    description: 'Administración de redes sociales adaptada a tu negocio',
    icon: '📱',
    isConsultar: true,
  },
  {
    id: 'ia',
    name: 'Agente con IA',
    price: 0,
    description: 'Asistente inteligente integrado a tu negocio',
    icon: '🤖',
    isConsultar: true,
  },
]

export default function Services() {
  const { mode } = useStore()
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [showForm, setShowForm] = useState(false)

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
  const accentColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'

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

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`p-6 rounded-lg cursor-pointer transition-all ${
                selectedServices.includes(service.id) ? 'ring-2 ring-offset-2' : ''
              } ${cardBg}`}
              onClick={() => !service.isConsultar && handleServiceClick(service.id, service.price)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              style={{
                ringColor: accentColor,
              }}
            >
              <p className="text-4xl mb-3">{service.icon}</p>
              <p className={`text-2xl font-bold mb-2 ${textColor}`}>
                {service.price > 0 ? `$${service.price.toLocaleString('es-CL')}` : 'Consultar'}
              </p>
              <p className={`font-semibold mb-2 ${textColor}`}>{service.name}</p>
              <p className={`text-sm ${textColor} opacity-60`}>{service.description}</p>
              <p className="text-xs mt-3 opacity-50">
                {service.isConsultar ? 'Cuota personalizada' : selectedServices.includes(service.id) ? '✓ Seleccionado' : 'Click para agregar'}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extended Services */}
        <div className="space-y-8 mb-12">
          <PostSelector />
          <ReelSelector />
        </div>

        {/* Total Price & Launch Button */}
        {selectedServices.length > 0 && (
          <motion.div
            className={`p-8 rounded-lg text-center border-2`}
            style={{ borderColor: accentColor }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className={`text-3xl font-bold mb-6 ${textColor}`}>
              Total: ${totalPrice.toLocaleString('es-CL')}
            </p>
            <motion.button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all"
              style={{ backgroundColor: accentColor }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Lanzar Proyecto
            </motion.button>
          </motion.div>
        )}

        {/* CTA cuando no hay servicios seleccionados */}
        {selectedServices.length === 0 && (
          <motion.div
            className={`p-8 rounded-lg text-center border-2 border-dashed`}
            style={{ borderColor: accentColor }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className={`text-xl ${textColor} opacity-60`}>
              Selecciona los servicios que necesitas para ver el total
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
