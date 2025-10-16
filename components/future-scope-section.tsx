import { Card } from "@/components/ui/card"

const futureFeatures = [
  "Multi-language support (Java, Python, C++, JavaScript)",
  "Real-time collaboration features for team debugging",
  "Advanced filtering and search capabilities",
  "Performance profiling integration",
  "Custom visualization themes and layouts",
  "Export and sharing capabilities",
  "AI-powered anomaly detection",
  "Integration with popular IDEs",
]

export default function FutureScopeSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-glow text-center">Limitations & Future Scope</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Limitations */}
          <Card className="glow-border bg-card/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-glow mb-6">Current Limitations</h3>
            <ul className="space-y-3">
              {[
                "Performance with very large object graphs",
                "Limited to supported programming languages",
                "Requires runtime instrumentation",
                "Memory overhead for tracking",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-glow mt-1">⚠</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Future Scope */}
          <Card className="glow-border bg-card/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-glow mb-6">Future Enhancements</h3>
            <div className="grid grid-cols-1 gap-3">
              {futureFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-glow mt-1">→</span>
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
