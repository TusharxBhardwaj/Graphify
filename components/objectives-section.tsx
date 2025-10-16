import { Card } from "@/components/ui/card"

const objectives = [
  {
    icon: "◆",
    title: "Visualize Object Structures",
    description:
      "Capture and display runtime object hierarchies created during program execution with interactive D3.js graphs.",
  },
  {
    icon: "◇",
    title: "Understand Runtime Memory",
    description: "Help learners and developers understand how objects are created, referenced, and managed in memory.",
  },
  {
    icon: "▲",
    title: "Intuitive Debugging",
    description:
      "Make debugging and learning more interactive by providing visual representations of complex relationships.",
  },
  {
    icon: "▼",
    title: "Interactive Exploration",
    description: "Explore object relationships dynamically with zoom, pan, and filter capabilities for deep analysis.",
  },
]

export default function ObjectivesSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-glow text-center">Objectives</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, idx) => (
            <Card
              key={idx}
              className="glow-border glow-border-hover bg-card/50 p-6 rounded-lg transition-all duration-300 hover:bg-card/70"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl text-glow flex-shrink-0">{obj.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-glow mb-2">{obj.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{obj.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
