import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ConclusionSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="glow-border bg-card/50 p-12 rounded-lg text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">Conclusion</h2>

          <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
            Graphify represents a paradigm shift in how developers understand and debug their applications. By
            transforming abstract runtime data into interactive visualizations, we empower developers to write better
            code, learn faster, and debug more efficiently.
          </p>

          <p className="text-lg text-foreground/90 mb-12 leading-relaxed">
            Whether you're a student learning object-oriented programming, a developer debugging complex systems, or a
            researcher analyzing program behavior, Graphify provides the tools you need to visualize the invisible and
            understand the complex.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground glow-border-hover rounded-lg font-mono transition-all duration-300">
              View on GitHub →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg glow-border glow-border-hover text-glow font-mono rounded-lg transition-all duration-300 bg-transparent"
            >
              Get Started
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
