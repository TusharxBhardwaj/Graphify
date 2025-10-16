import { Card } from "@/components/ui/card"

const systems = [
  {
    title: "Existing System",
    items: [
      "Manual object inspection via debuggers",
      "Text-based memory dumps",
      "Limited visualization capabilities",
      "Time-consuming analysis process",
    ],
  },
  {
    title: "Proposed System",
    items: [
      "Real-time interactive visualization",
      "Dynamic graph rendering with D3.js",
      "Intuitive UI for exploration",
      "Instant relationship mapping",
    ],
  },
  {
    title: "System Design",
    items: [
      "Frontend: React + D3.js visualization",
      "Backend: Runtime object capture",
      "Data Pipeline: Object serialization",
      "Architecture: Modular & scalable",
    ],
  },
  {
    title: "Implementation Details",
    items: [
      "Technologies: D3.js, Graphviz, Java/Python",
      "Database: SQLite/MySQL for caching",
      "API: RESTful endpoints for data",
      "Performance: Optimized rendering",
    ],
  },
]

export default function SystemOverviewSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-glow text-center">System Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((system, idx) => (
            <Card
              key={idx}
              className="glow-border glow-border-hover bg-card/50 p-8 rounded-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-glow mb-6">{system.title}</h3>
              <ul className="space-y-3">
                {system.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="text-glow mt-1">→</span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 glow-border rounded-lg p-8 bg-card/30">
          <h3 className="text-2xl font-bold text-glow mb-4">Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["D3.js", "Graphviz", "Java/Python", "SQLite/MySQL", "React", "Node.js", "WebSocket", "REST API"].map(
              (tech, idx) => (
                <div key={idx} className="glow-border rounded px-4 py-3 text-center text-glow font-mono text-sm">
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
