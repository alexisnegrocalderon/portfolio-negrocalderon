'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

export default function Footer() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-beige-200' : 'bg-gray-950'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const linkColor = mode === 'elegant' ? '#B8860B' : '#FF8C42'

  const currentYear = new Date().getFullYear()

  return (
    <footer className={`py-12 px-4 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={`text-2xl font-bold mb-2 ${textColor}`}>Alexis Negro C.</p>
            <p className={`${textColor} opacity-60`}>Brand Powering Designer</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={`font-semibold mb-4 ${textColor}`}>Enlaces</p>
            <ul className="space-y-2">
              <li>
                <a href="#services" style={{ color: linkColor }} className="hover:opacity-70">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#journey" style={{ color: linkColor }} className="hover:opacity-70">
                  Mi Viaje
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: linkColor }} className="hover:opacity-70">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={`font-semibold mb-4 ${textColor}`}>Sígueme</p>
            <ul className="space-y-2">
              <li>
                <a href="https://instagram.com/negrocalderon" target="_blank" style={{ color: linkColor }} className="hover:opacity-70">
                  Instagram @negrocalderon
                </a>
              </li>
              <li>
                <a href="https://wa.me/56939548475" target="_blank" style={{ color: linkColor }} className="hover:opacity-70">
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className={`border-t pt-8 text-center ${textColor}`}
          style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="opacity-60">
            © {currentYear} Alexis Negro Calderón. Todos los derechos reservados.
          </p>
          <p className="text-sm opacity-40 mt-2">
            Diseñado y desarrollado con ✈️ y ⚡ desde Chile
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
