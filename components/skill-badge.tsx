"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  icon: React.ReactNode
  delay?: number
  color?: "teal" | "yellow" | "purple" | "blue"
}

export default function SkillBadge({ name, icon, delay = 0, color = "teal" }: SkillBadgeProps) {
  const colorClasses = {
    teal: "border-teal/30 bg-teal/5 text-teal glow-border",
    yellow: "border-neonYellow/30 bg-neonYellow/5 text-neonYellow glow-border-yellow",
    purple: "border-cyberPurple/30 bg-cyberPurple/5 text-cyberPurple glow-border-purple",
    blue: "border-electricBlue/30 bg-electricBlue/5 text-electricBlue",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={`skill-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${colorClasses[color]}`}
    >
      {icon}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  )
}
