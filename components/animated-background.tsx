"use client"

import { useEffect, useState } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles: Bubble[] = []
    for (let i = 0; i < 8; i++) {
      initialBubbles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 100 + 50,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }
    setBubbles(initialBubbles)

    // Animation loop
    const animateBubbles = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          let newX = bubble.x + bubble.speedX
          let newY = bubble.y + bubble.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - bubble.size) {
            bubble.speedX *= -1
            newX = bubble.x + bubble.speedX
          }
          if (newY <= 0 || newY >= window.innerHeight - bubble.size) {
            bubble.speedY *= -1
            newY = bubble.y + bubble.speedY
          }

          return {
            ...bubble,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const interval = setInterval(animateBubbles, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-blue-500/30 light:bg-blue-400/40 dark:bg-blue-400/30 animate-pulse"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            opacity: bubble.opacity,
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  )
}
