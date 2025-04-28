"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  className?: string
  typingSpeed?: number
  startDelay?: number
  cursorBlinkSpeed?: number
  showCursorWhenDone?: boolean
}

export default function TypewriterEffect({
  text,
  className = "",
  typingSpeed = 30,
  startDelay = 5,
  cursorBlinkSpeed = 500,
  showCursorWhenDone = true,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Handle the typing animation
  useEffect(() => {
    if (currentIndex === 0) {
      // Initial delay before starting to type
      const initialDelay = setTimeout(() => {
        setCurrentIndex(1)
        setDisplayedText(text.substring(0, 1))
      }, startDelay)

      return () => clearTimeout(initialDelay)
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && !isTypingComplete) {
      setIsTypingComplete(true)
    }
  }, [currentIndex, text, typingSpeed, startDelay, isTypingComplete])

  // Handle cursor blinking
  useEffect(() => {
    if (!showCursorWhenDone && isTypingComplete) {
      setCursorVisible(false)
      return
    }

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, cursorBlinkSpeed)

    return () => clearInterval(cursorInterval)
  }, [isTypingComplete, cursorBlinkSpeed, showCursorWhenDone])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block ml-0.5 w-0.5 h-[1em] bg-current align-middle"
      />
    </span>
  )
}
