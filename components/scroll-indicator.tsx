"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="text-sm text-muted-foreground mb-2"
      >
        Scroll to explore
      </motion.p>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </motion.div>
  )
}
