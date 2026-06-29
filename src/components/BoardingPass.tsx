'use client'

import { useStore } from '@/store/useStore'
import { motion } from 'framer-motion'

const boardingPassVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0 },
}

export default function BoardingPass() {
  const { mode } = useStore()

  const bgColor = mode === 'elegant' ? 'bg-white' : 'bg-gray-800'
  const textColor = mode === 'elegant' ? 'text-gray-900' : 'text-white'
  const borderColor = mode === 'elegant' ? 'border-terracota-intenso' : 'border-naranja-vibrante'

  return (
    <motion.div
      className={`${bgColor} p-6 rounded-lg border-2 dashed ${borderColor}`}
      variants={boardingPassVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className={`text-xs ${textColor} opacity-60`}>BOARDING PASS</p>
          <p className={`text-2xl font-bold ${textColor}`}>✈️</p>
        </div>
        <div className="text-right">
          <p className={`text-xs ${textColor} opacity-60`}>SEAT</p>
          <p className={`text-lg font-bold ${textColor}`}>DIGITAL</p>
        </div>
      </div>

      <div className={`border-t border-b py-4 mb-4 border-dashed ${borderColor}`}>
        <p className={`text-xs ${textColor} opacity-60`}>PASSENGER</p>
        <p className={`text-xl font-bold ${textColor}`}>Brand Experience</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <p className={`${textColor} opacity-60`}>FROM</p>
          <p className={`font-bold ${textColor}`}>Idea</p>
        </div>
        <div>
          <p className={`${textColor} opacity-60`}>TO</p>
          <p className={`font-bold ${textColor}`}>Impact</p>
        </div>
      </div>
    </motion.div>
  )
}
