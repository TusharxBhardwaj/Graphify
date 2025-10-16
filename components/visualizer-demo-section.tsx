"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface GraphNode {
  id: string
  label: string
  type: string
}

interface GraphEdge {
  source: string
  target: string
  label: string
}

export default function VisualizerDemoSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [nodes, setNodes] = useState<GraphNode[]>([
    { id: "1", label: "User", type: "class" },
    { id: "2", label: "Profile", type: "class" },
    { id: "3", label: "Settings", type: "class" },
    { id: "4", label: "Preferences", type: "class" },
  ])
  const [edges, setEdges] = useState<GraphEdge[]>([
    { source: "1", target: "2", label: "has" },
    { source: "2", target: "3", label: "contains" },
    { source: "3", target: "4", label: "references" },
    { source: "1", target: "4", label: "uses" },
  ])
  const [newNodeLabel, setNewNodeLabel] = useState("")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas
    ctx.fillStyle = "rgba(5, 13, 8, 0.5)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = "rgba(112, 200, 100, 0.1)"
    ctx.lineWidth = 1
    for (let i = 0; i < canvas.width; i += 50) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, canvas.height)
      ctx.stroke()
    }
    for (let i = 0; i < canvas.height; i += 50) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(canvas.width, i)
      ctx.stroke()
    }

    // Calculate positions in a circle
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(canvas.width, canvas.height) / 3

    const positions: { [key: string]: { x: number; y: number } } = {}
    nodes.forEach((node, idx) => {
      const angle = (idx / nodes.length) * Math.PI * 2
      positions[node.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      }
    })

    // Draw edges
    ctx.strokeStyle = "rgba(112, 200, 100, 0.4)"
    ctx.lineWidth = 2
    edges.forEach((edge) => {
      const from = positions[edge.source]
      const to = positions[edge.target]
      if (from && to) {
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()

        // Draw arrow
        const angle = Math.atan2(to.y - from.y, to.x - from.x)
        const arrowSize = 10
        ctx.fillStyle = "rgba(112, 200, 100, 0.6)"
        ctx.beginPath()
        ctx.moveTo(to.x, to.y)
        ctx.lineTo(to.x - arrowSize * Math.cos(angle - Math.PI / 6), to.y - arrowSize * Math.sin(angle - Math.PI / 6))
        ctx.lineTo(to.x - arrowSize * Math.cos(angle + Math.PI / 6), to.y - arrowSize * Math.sin(angle + Math.PI / 6))
        ctx.closePath()
        ctx.fill()
      }
    })

    // Draw nodes
    nodes.forEach((node) => {
      const pos = positions[node.id]
      if (!pos) return

      // Node circle
      ctx.fillStyle = "rgba(112, 200, 100, 0.2)"
      ctx.strokeStyle = "rgba(112, 200, 100, 0.8)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, 30, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      // Node label
      ctx.fillStyle = "rgba(112, 200, 100, 1)"
      ctx.font = "bold 12px Courier New"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(node.label, pos.x, pos.y)
    })
  }, [nodes, edges])

  const addNode = () => {
    if (!newNodeLabel.trim()) return
    const newNode: GraphNode = {
      id: String(nodes.length + 1),
      label: newNodeLabel,
      type: "class",
    }
    setNodes([...nodes, newNode])
    setNewNodeLabel("")
  }

  const resetGraph = () => {
    setNodes([
      { id: "1", label: "User", type: "class" },
      { id: "2", label: "Profile", type: "class" },
      { id: "3", label: "Settings", type: "class" },
      { id: "4", label: "Preferences", type: "class" },
    ])
    setEdges([
      { source: "1", target: "2", label: "has" },
      { source: "2", target: "3", label: "contains" },
      { source: "3", target: "4", label: "references" },
      { source: "1", target: "4", label: "uses" },
    ])
  }

  return (
    <section id="visualizer-section" className="relative py-20 px-4 md:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow text-center">Interactive Visualizer Demo</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Explore runtime object relationships in real-time. Add objects, define relationships, and watch the graph
          update dynamically.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Controls */}
          <Card className="glow-border bg-card/50 p-6 rounded-lg h-fit">
            <h3 className="text-lg font-bold text-glow mb-4">Controls</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-glow mb-2">Add Object</label>
                <input
                  type="text"
                  value={newNodeLabel}
                  onChange={(e) => setNewNodeLabel(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addNode()}
                  placeholder="Object name"
                  className="w-full bg-input border border-border rounded px-3 py-2 text-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <Button
                onClick={addNode}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
              >
                Add Object
              </Button>

              <Button
                onClick={resetGraph}
                variant="outline"
                className="w-full glow-border text-glow text-sm bg-transparent"
              >
                Reset Graph
              </Button>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Current Objects: {nodes.length}</p>
                <p className="text-xs text-muted-foreground">Relationships: {edges.length}</p>
              </div>
            </div>
          </Card>

          {/* Canvas */}
          <div className="lg:col-span-3">
            <Card className="glow-border bg-card/50 rounded-lg overflow-hidden">
              <canvas
                ref={canvasRef}
                className="w-full h-96 md:h-[500px] bg-gradient-to-br from-background to-card/50"
              />
            </Card>
          </div>
        </div>

        <div className="mt-8 glow-border rounded-lg p-6 bg-card/30">
          <h3 className="text-lg font-bold text-glow mb-3">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-foreground/80">
            <div>
              <p className="font-mono text-glow mb-1">1. Create Objects</p>
              <p>Add runtime objects to the visualization canvas</p>
            </div>
            <div>
              <p className="font-mono text-glow mb-1">2. Define Relationships</p>
              <p>Establish connections between objects</p>
            </div>
            <div>
              <p className="font-mono text-glow mb-1">3. Explore Interactively</p>
              <p>Analyze object hierarchies and dependencies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
