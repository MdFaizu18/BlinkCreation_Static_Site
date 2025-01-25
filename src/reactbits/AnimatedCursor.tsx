"use client"

import { motion } from "framer-motion"
import { useMousePosition } from "../hooks/UseMousePosition"
import { useState, useEffect } from "react"

const cursorVariants = {
  default: {
    scale: 1,
    backgroundColor: "#FF0000",
  },
  hover: {
    scale: 1.8, // Scale up on hover
    backgroundColor: "#00FF00",
  },
  click: {
    scale: 1.7,
    backgroundColor: "#0000FF",
  },
}

export const AnimatedCursor = () => {
  const { x, y } = useMousePosition()
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const handleMouseDown = () => setCursorVariant("click")
    const handleMouseUp = () => setCursorVariant("default")

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const handleLinkHover = () => {
    setCursorVariant("hover")
  }

  const handleLinkLeave = () => {
    setCursorVariant("default")
  }

  useEffect(() => {
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [handleLinkHover, handleLinkLeave])

  return (
    <motion.div
      className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: x,
        top: y,
      }}
      animate={cursorVariant}
      variants={cursorVariants}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      {/* The cursor itself */}
      <motion.div
        className="w-5 h-5 bg-white rounded-full"
        initial={{ scale: 1 }}
        animate={{
          scale: cursorVariant === "hover" ? 2 : 1, // Scaling effect for hover
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
