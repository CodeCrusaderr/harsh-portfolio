"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  speed?: number
  type?: "words" | "chars"
  animation?: "fade" | "slide" | "bounce" | "scale"
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  speed = 0.05,
  type = "words",
  animation = "fade",
  tag = "div",
}: AnimatedTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  const getAnimationVariants = () => {
    switch (animation) {
      case "slide":
        return {
          hidden: { y: 20, opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: delay + i * speed, duration: 0.5 },
          }),
        }
      case "bounce":
        return {
          hidden: { y: 20, opacity: 0 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * speed,
              type: "spring",
              stiffness: 200,
              damping: 10,
            },
          }),
        }
      case "scale":
        return {
          hidden: { scale: 0.5, opacity: 0 },
          visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: { delay: delay + i * speed, duration: 0.5 },
          }),
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: { delay: delay + i * speed, duration: 0.5 },
          }),
        }
    }
  }

  const variants = getAnimationVariants()

  const renderContent = () => {
    if (type === "chars") {
      return text.split("").map((char, index) => (
        <motion.span
          key={`char-${index}`}
          custom={index}
          variants={variants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))
    } else {
      return text.split(" ").map((word, index) => (
        <motion.span key={`word-${index}`} custom={index} variants={variants} className="inline-block mr-1.5">
          {word}
        </motion.span>
      ))
    }
  }

  const Tag = tag

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} className={className} aria-label={text}>
      {renderContent()}
    </motion.div>
  )
}
