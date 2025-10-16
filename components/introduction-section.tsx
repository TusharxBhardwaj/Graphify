export default function IntroductionSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="glow-border rounded-lg p-8 md:p-12 bg-card/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">Introduction</h2>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              Software visualization is a powerful tool that helps in understanding complex program behaviors. It
              bridges the gap between abstract code and concrete execution, making it easier for developers and learners
              to comprehend how their programs actually work at runtime.
            </p>

            <p className="text-lg">
              <span className="text-glow font-mono">Graphify</span> captures and visualizes runtime object relationships
              in real-time, transforming the invisible world of memory and object interactions into an interactive,
              visual experience. Whether you're debugging a complex application, learning object-oriented programming,
              or analyzing system architecture, Graphify makes the invisible visible.
            </p>

            <p className="text-lg">
              By leveraging the power of D3.js and modern web technologies, Graphify provides an intuitive interface
              that allows you to explore object hierarchies, track relationships, and understand program flow with
              unprecedented clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
