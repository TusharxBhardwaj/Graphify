"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height
    }

    const draw = () => {
      ctx.fillStyle = "rgba(5, 13, 8, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "rgba(112, 200, 100, 0.8)"
      ctx.font = `${fontSize}px 'Courier New'`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i])

        if (drops[i] * Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i] += fontSize
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToVisualizer = () => {
    const element = document.getElementById("visualizer-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <div className="glow-border px-4 py-2 rounded-lg">
            <span className="text-glow text-sm font-mono">// RUNTIME VISUALIZATION</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 neon-glow">Graphify</h1>

        <p className="text-2xl md:text-3xl mb-8 text-glow font-mono">Visualize runtime objects like never before</p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          An interactive software visualization tool that captures and visualizes runtime object relationships, making
          debugging and learning more intuitive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToVisualizer}
            className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground glow-border-hover rounded-lg font-mono transition-all duration-300"
          >
            Try Demo →
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg glow-border glow-border-hover text-glow font-mono rounded-lg transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce text-glow">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
