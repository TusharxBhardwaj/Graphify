import { Card } from "@/components/ui/card"

const advantages = [
  {
    title: "Real-time Visualization",
    description: "See object relationships as they happen during program execution",
  },
  {
    title: "Interactive Exploration",
    description: "Zoom, pan, and filter to focus on specific object hierarchies",
  },
  {
    title: "Enhanced Learning",
    description: "Understand OOP concepts through visual representation",
  },
  {
    title: "Faster Debugging",
    description: "Identify issues quickly by visualizing object states",
  },
  {
    title: "Memory Insights",
    description: "Understand memory allocation and object references",
  },
  {
    title: "Developer Friendly",
    description: "Intuitive interface designed for developers of all levels",
  },
]

export default function AdvantagesSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-glow text-center">Advantages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <Card
              key={idx}
              className="glow-border glow-border-hover bg-card/50 p-6 rounded-lg transition-all duration-300 hover:bg-card/70"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl text-glow">◆</span>
                <h3 className="text-lg font-bold text-glow">{adv.title}</h3>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">{adv.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
