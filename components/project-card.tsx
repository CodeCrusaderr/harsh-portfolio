"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import ProjectModal from "./project-modal"

interface ProjectCardProps {
  title: string
  description: string
  longDescription?: string
  image?: string
  images?: string[]
  tags: string[]
  link?: string
  github?: string
  delay?: number
  type?: string
}

export default function ProjectCard({
  title,
  description,
  longDescription,
  image,
  images,
  tags,
  link,
  github,
  delay = 0,
  type,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])
  const brightness = useTransform(mouseY, [-300, 300], [1.1, 0.9])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Combine single image with images array if both exist
  const allImages = []
  if (images && images.length > 0) {
    allImages.push(...images)
  } else if (image && image.length > 0) {
    allImages.push(image)
  }

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        style={{
          rotateX,
          rotateY,
          filter: `brightness(${brightness})`,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={openModal}
        className="group project-card relative overflow-hidden rounded-xl border border-border/50 bg-card/30 cursor-pointer transition-all duration-500 ease-out h-full"
      >
        <div className="p-6 flex flex-col h-full">
          <div className="mb-2">
            {type && (
              <div className="inline-flex items-center rounded-full border border-teal/30 bg-teal/5 px-2 py-0.5 text-xs text-teal mb-2">
                <span>{type}</span>
              </div>
            )}
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          </div>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-grow">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                style={{ transform: "translateZ(20px)" }}
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                +{tags.length - 3}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center text-sm text-primary">
            <span>View Details</span>
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={{
          title,
          description,
          longDescription: longDescription || description,
          images: allImages.length > 0 ? allImages : undefined,
          tags,
          link,
          github,
          type,
        }}
      />
    </>
  )
}
