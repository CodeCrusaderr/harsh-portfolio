"use client"

import { useEffect, useState } from "react"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      setHidden(false)

      const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseenter", onMouseEnter)
        document.addEventListener("mouseleave", onMouseLeave)
        document.addEventListener("mousedown", onMouseDown)
        document.addEventListener("mouseup", onMouseUp)
      }

      const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseenter", onMouseEnter)
        document.removeEventListener("mouseleave", onMouseLeave)
        document.removeEventListener("mousedown", onMouseDown)
        document.removeEventListener("mouseup", onMouseUp)
      }

      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      const onMouseEnter = () => {
        setHidden(false)
      }

      const onMouseLeave = () => {
        setHidden(true)
      }

      const onMouseDown = () => {
        setClicked(true)
      }

      const onMouseUp = () => {
        setClicked(false)
      }

      // Track hover on interactive elements
      const handleLinkHoverEvents = () => {
        document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach((el) => {
          el.addEventListener("mouseenter", () => setLinkHovered(true))
          el.addEventListener("mouseleave", () => setLinkHovered(false))
        })
      }

      addEventListeners()
      handleLinkHoverEvents()

      return () => {
        removeEventListeners()
      }
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: hidden ? 0 : 1,
      }}
    >
      <div
        className="cursor-dot"
        style={{
          transform: clicked ? "translate(-50%, -50%) scale(0.5)" : "translate(-50%, -50%)",
          opacity: clicked ? 0.5 : 1,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(-50%, -50%) scale(${clicked ? 1.2 : linkHovered ? 1.5 : 1})`,
          borderColor: linkHovered ? "rgba(1, 136, 159, 0.5)" : "rgba(255, 255, 255, 0.5)",
          backgroundColor: linkHovered ? "rgba(1, 136, 159, 0.1)" : "transparent",
        }}
      />
    </div>
  )
}
